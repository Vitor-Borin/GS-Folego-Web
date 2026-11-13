import { atualizar, criar, listar, remover } from "./api"

export const listarPedidos = () => {
  return listar("pedidos")
}

export const criarPedido = (dados) => {
  return criar("pedidos", dados)
}

export const atualizarPedido = (id, dados) => {
  return atualizar("pedidos", id, dados)
}

export const removerPedido = (id) => {
  return remover("pedidos", id)
}
