import { useState } from "react"
import { calcularAutonomia, estadoDaBateria, fracaoSemLuz } from "../utils/autonomia"

const useAutonomia = () => {
  const [energia, setEnergia] = useState(84)
  const [consumo, setConsumo] = useState(290)
  const [tipo, setTipo] = useState("chumbo")

  const minutos = calcularAutonomia(energia, consumo, tipo)
  const estado = estadoDaBateria(minutos)
  const semLuz = fracaoSemLuz(minutos)

  const escolherBateria = (bateria) => {
    setEnergia(bateria.valor)
    setTipo(bateria.tipo)
  }

  return { energia, setEnergia, consumo, setConsumo, tipo, setTipo, escolherBateria, minutos, estado, semLuz }
}

export default useAutonomia
