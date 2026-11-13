import { atualizar, buscar, criar, listar, remover } from "./api"

export const listarPontos = () => {
  return listar("pontos")
}

export const buscarPonto = (id) => {
  return buscar("pontos", id)
}

export const criarPonto = (dados) => {
  return criar("pontos", dados)
}

export const atualizarPonto = (id, dados) => {
  return atualizar("pontos", id, dados)
}

export const removerPonto = (id) => {
  return remover("pontos", id)
}
