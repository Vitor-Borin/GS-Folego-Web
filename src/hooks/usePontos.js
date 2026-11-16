import { useEffect, useState } from "react"
import { atualizarPonto, criarPonto, listarPontos, removerPonto } from "../services/pontos"

const usePontos = () => {
  const [pontos, setPontos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)
  const [ocupado, setOcupado] = useState(false)
  const [aviso, setAviso] = useState("")
  const [agora, setAgora] = useState(0)

  useEffect(() => {
    listarPontos()
      .then((dados) => {
        setPontos(dados)
        setAgora(Date.now())
        setCarregando(false)
      })
      .catch(() => {
        setErro(true)
        setCarregando(false)
      })
  }, [])

  const recarregar = () => {
    setOcupado(true)
    setAviso("")

    return listarPontos()
      .then((dados) => {
        setPontos(dados)
        setAgora(Date.now())
        setErro(false)
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível atualizar a rede. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  const adicionarPonto = (dados) => {
    setOcupado(true)
    setAviso("")

    return criarPonto(dados)
      .then((novo) => {
        setPontos(pontos.concat(novo))
        setAgora(Date.now())
        setOcupado(false)

        return novo
      })
      .catch(() => {
        setAviso("Não foi possível salvar o ponto. Confira a conexão e tente de novo.")
        setOcupado(false)

        return null
      })
  }

  const confirmarPonto = (ponto) => {
    const dados = {
      nome: ponto.nome,
      tipo: ponto.tipo,
      bairro: ponto.bairro,
      endereco: ponto.endereco,
      descricao: ponto.descricao,
      vagas: ponto.vagas,
      fonte: ponto.fonte,
      empresta: ponto.empresta,
      telefone: ponto.telefone,
      ativo: true,
      atualizadoEm: new Date().toISOString(),
    }

    setOcupado(true)
    setAviso("")

    return atualizarPonto(ponto.id, dados)
      .then((atualizado) => {
        setPontos(pontos.map((item) => (item.id === ponto.id ? atualizado : item)))
        setAgora(Date.now())
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível confirmar o ponto. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  const apagarPonto = (id) => {
    setOcupado(true)
    setAviso("")

    return removerPonto(id)
      .then(() => {
        setPontos(pontos.filter((item) => item.id !== id))
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível apagar o ponto. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  return { pontos, carregando, erro, ocupado, aviso, agora, recarregar, adicionarPonto, confirmarPonto, apagarPonto }
}

export default usePontos
