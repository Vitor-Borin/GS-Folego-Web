import { readFileSync } from "node:fs"

const endereco = process.argv[2]

const prepararLista = (recurso) => {
  const lista = JSON.parse(readFileSync(`mockapi/${recurso}.json`, "utf8"))

  lista.forEach((item) => {
    const data = new Date(Date.now() - item.minutosAtras * 60000).toISOString()

    if (recurso === "pedidos") {
      item.criadoEm = data
    } else {
      item.atualizadoEm = data
    }

    delete item.id
    delete item.minutosAtras
  })

  return lista
}

const enviar = (recurso, lista, posicao) => {
  if (posicao >= lista.length) {
    console.log(`${recurso}: ${lista.length} registros enviados`)

    return Promise.resolve()
  }

  return fetch(`${endereco}/${recurso}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lista[posicao]),
  }).then((resposta) => {
    if (!resposta.ok) {
      throw new Error(`A API respondeu ${resposta.status} ao criar em "${recurso}"`)
    }

    return enviar(recurso, lista, posicao + 1)
  })
}

if (endereco === undefined) {
  console.log("Faltou o endereço da API. Exemplo: npm run api:semear -- https://SEU-ID.mockapi.io/api/v1")
} else {
  enviar("pontos", prepararLista("pontos"), 0)
    .then(() => enviar("pedidos", prepararLista("pedidos"), 0))
    .then(() => console.log("Pronto. Confira os dados no painel da MockAPI."))
    .catch((erro) => console.log(`Não deu certo: ${erro.message}`))
}
