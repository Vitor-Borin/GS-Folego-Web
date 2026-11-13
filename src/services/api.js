const API_URL = import.meta.env.VITE_API_URL

const conferirResposta = (resposta) => {
  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status}`)
  }

  return resposta.json()
}

const opcoesComDados = (metodo, dados) => {
  return {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  }
}

export const listar = (recurso) => {
  return fetch(`${API_URL}/${recurso}`).then(conferirResposta)
}

export const buscar = (recurso, id) => {
  return fetch(`${API_URL}/${recurso}/${id}`).then(conferirResposta)
}

export const criar = (recurso, dados) => {
  return fetch(`${API_URL}/${recurso}`, opcoesComDados("POST", dados)).then(conferirResposta)
}

export const atualizar = (recurso, id, dados) => {
  return fetch(`${API_URL}/${recurso}/${id}`, opcoesComDados("PUT", dados)).then(conferirResposta)
}

export const remover = (recurso, id) => {
  return fetch(`${API_URL}/${recurso}/${id}`, { method: "DELETE" }).then(conferirResposta)
}
