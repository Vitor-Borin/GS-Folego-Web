import { createServer } from "node:http"
import { readFileSync } from "node:fs"
import { join } from "node:path"

const pasta = process.argv[2]
const porta = Number(process.argv[3] || 4010)
const ATRASO_MS = 250

const lerArquivo = (nome) => {
  const lista = JSON.parse(readFileSync(join(pasta, nome), "utf8"))

  lista.forEach((item) => {
    if (item.minutosAtras !== undefined) {
      const data = new Date(Date.now() - item.minutosAtras * 60000).toISOString()

      if (item.status !== undefined) {
        item.criadoEm = data
      } else {
        item.atualizadoEm = data
      }

      delete item.minutosAtras
    }
  })

  return lista
}

const dados = {
  pontos: lerArquivo("pontos.json"),
  pedidos: lerArquivo("pedidos.json"),
}

const responder = (resposta, status, corpo) => {
  setTimeout(() => {
    resposta.writeHead(status, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    })
    resposta.end(corpo === undefined ? "" : JSON.stringify(corpo))
  }, ATRASO_MS)
}

const lerCorpo = (requisicao, aoTerminar) => {
  let texto = ""

  requisicao.on("data", (pedaco) => {
    texto = texto + pedaco
  })

  requisicao.on("end", () => {
    aoTerminar(JSON.parse(texto || "{}"))
  })
}

const proximoId = (lista) => {
  let maior = 0

  lista.forEach((item) => {
    if (Number(item.id) > maior) {
      maior = Number(item.id)
    }
  })

  return String(maior + 1)
}

createServer((requisicao, resposta) => {
  const partes = requisicao.url.split("?")[0].split("/")
  const recurso = partes[1]
  const id = partes[2]
  const lista = dados[recurso]

  if (requisicao.method === "OPTIONS") {
    responder(resposta, 204)
    return
  }

  if (lista === undefined) {
    responder(resposta, 404, "Not found")
    return
  }

  if (requisicao.method === "GET" && id === undefined) {
    responder(resposta, 200, lista)
    return
  }

  if (requisicao.method === "POST") {
    lerCorpo(requisicao, (corpo) => {
      corpo.id = proximoId(lista)
      lista.push(corpo)
      responder(resposta, 201, corpo)
    })
    return
  }

  const item = lista.find((registro) => registro.id === id)

  if (item === undefined) {
    responder(resposta, 404, "Not found")
    return
  }

  if (requisicao.method === "GET") {
    responder(resposta, 200, item)
    return
  }

  if (requisicao.method === "PUT") {
    lerCorpo(requisicao, (corpo) => {
      for (const campo in corpo) {
        if (campo !== "id") {
          item[campo] = corpo[campo]
        }
      }
      responder(resposta, 200, item)
    })
    return
  }

  if (requisicao.method === "DELETE") {
    lista.splice(lista.indexOf(item), 1)
    responder(resposta, 200, item)
    return
  }

  responder(resposta, 405, "Method not allowed")
}).listen(porta, () => {
  console.log(`API local em http://localhost:${porta} (recursos: pontos, pedidos)`)
})
