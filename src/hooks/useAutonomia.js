import { useState } from "react"
import { calcularAutonomia, estadoDaBateria, fracaoSemLuz } from "../utils/autonomia"

const useAutonomia = () => {
  const [energia, setEnergia] = useState(84)
  const [consumo, setConsumo] = useState(290)

  const minutos = calcularAutonomia(energia, consumo)
  const estado = estadoDaBateria(minutos)
  const semLuz = fracaoSemLuz(minutos)

  return { energia, setEnergia, consumo, setConsumo, minutos, estado, semLuz }
}

export default useAutonomia
