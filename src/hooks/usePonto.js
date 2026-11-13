import { useEffect, useState } from "react"
import { atualizarPonto, buscarPonto, removerPonto } from "../services/pontos"

const usePonto = (id) => {
  const [ponto, setPonto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)
  const [ocupado, setOcupado] = useState(false)
  const [aviso, setAviso] = useState("")
  const [agora, setAgora] = useState(0)

  useEffect(() => {
    buscarPonto(id)
      .then((dados) => {
        setPonto(dados)
        setAgora(Date.now())
        setCarregando(false)
      })
      .catch(() => {
        setErro(true)
        setCarregando(false)
      })
  }, [id])

  const salvarPonto = (dados) => {
    setOcupado(true)
    setAviso("")

    return atualizarPonto(id, dados)
      .then((atualizado) => {
        setPonto(atualizado)
        setAgora(Date.now())
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível salvar as alterações. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  const apagarPonto = () => {
    setOcupado(true)
    setAviso("")

    return removerPonto(id)
      .then(() => {
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível apagar o ponto. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  return { ponto, carregando, erro, ocupado, aviso, agora, salvarPonto, apagarPonto }
}

export default usePonto
