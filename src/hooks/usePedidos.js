import { useEffect, useState } from "react"
import { atualizarPedido, criarPedido, listarPedidos, removerPedido } from "../services/pedidos"

const usePedidos = () => {
  const [pedidos, setPedidos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)
  const [ocupado, setOcupado] = useState(false)
  const [aviso, setAviso] = useState("")
  const [agora, setAgora] = useState(0)

  useEffect(() => {
    listarPedidos()
      .then((dados) => {
        setPedidos(dados)
        setAgora(Date.now())
        setCarregando(false)
      })
      .catch(() => {
        setErro(true)
        setCarregando(false)
      })
  }, [])

  const abrirPedido = (dados) => {
    setOcupado(true)
    setAviso("")

    return criarPedido(dados)
      .then((novo) => {
        setPedidos(pedidos.concat(novo))
        setAgora(Date.now())
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível abrir o pedido. Confira a conexão e tente de novo.")
        setOcupado(false)

        return false
      })
  }

  const mudarStatus = (pedido, status) => {
    const dados = {
      titulo: pedido.titulo,
      bairro: pedido.bairro,
      detalhe: pedido.detalhe,
      prioridade: pedido.prioridade,
      status: status,
      criadoEm: pedido.criadoEm,
    }

    setOcupado(true)
    setAviso("")

    return atualizarPedido(pedido.id, dados)
      .then((atualizado) => {
        setPedidos(pedidos.map((item) => (item.id === pedido.id ? atualizado : item)))
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível mudar o status. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  const apagarPedido = (id) => {
    setOcupado(true)
    setAviso("")

    return removerPedido(id)
      .then(() => {
        setPedidos(pedidos.filter((item) => item.id !== id))
        setOcupado(false)

        return true
      })
      .catch(() => {
        setAviso("Não foi possível apagar o pedido. Tente de novo.")
        setOcupado(false)

        return false
      })
  }

  return { pedidos, carregando, erro, ocupado, aviso, agora, abrirPedido, mudarStatus, apagarPedido }
}

export default usePedidos
