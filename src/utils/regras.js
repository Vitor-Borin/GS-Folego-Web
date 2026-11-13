import { prioridades, tiposDePonto } from "../data/opcoes"

export const LIMITE_CONFIRMACAO_MIN = 120

export const minutosEntre = (agora, dataIso) => {
  const minutos = Math.round((agora - new Date(dataIso).getTime()) / 60000)

  return Math.max(0, minutos)
}

export const textoDoTempo = (minutos) => {
  if (minutos < 1) {
    return "agora"
  }

  if (minutos < 60) {
    return `há ${minutos} min`
  }

  if (minutos < 1440) {
    return `há ${Math.floor(minutos / 60)} h`
  }

  const dias = Math.floor(minutos / 1440)

  return dias === 1 ? "há 1 dia" : `há ${dias} dias`
}

export const confirmadoHaPouco = (ponto, agora) => {
  return ponto.ativo && minutosEntre(agora, ponto.atualizadoEm) <= LIMITE_CONFIRMACAO_MIN
}

export const rotuloDoTipo = (valor) => {
  const tipo = tiposDePonto.find((item) => item.valor === valor)

  return tipo ? tipo.rotulo : "Outro"
}

export const filtrarPontos = (pontos, busca, tipo) => {
  const termo = busca.trim().toLowerCase()

  return pontos.filter((ponto) => {
    const combinaComTipo = tipo === "todos" || ponto.tipo === tipo
    const texto = `${ponto.nome} ${ponto.bairro} ${ponto.endereco}`.toLowerCase()

    return combinaComTipo && texto.includes(termo)
  })
}

export const ordenarPontos = (pontos, agora) => {
  return pontos.toSorted((a, b) => {
    const pesoA = confirmadoHaPouco(a, agora) ? 1 : 0
    const pesoB = confirmadoHaPouco(b, agora) ? 1 : 0

    if (pesoA !== pesoB) {
      return pesoB - pesoA
    }

    return new Date(b.atualizadoEm).getTime() - new Date(a.atualizadoEm).getTime()
  })
}

export const contarConfirmados = (pontos, agora) => {
  return pontos.filter((ponto) => confirmadoHaPouco(ponto, agora)).length
}

export const somarVagas = (pontos, agora) => {
  return pontos.reduce((total, ponto) => {
    return confirmadoHaPouco(ponto, agora) ? total + Number(ponto.vagas) : total
  }, 0)
}

export const pontoRepetido = (pontos, nome, bairro) => {
  const repetido = pontos.find((ponto) => {
    const mesmoNome = ponto.nome.trim().toLowerCase() === nome.trim().toLowerCase()
    const mesmoBairro = ponto.bairro.trim().toLowerCase() === bairro.trim().toLowerCase()

    return mesmoNome && mesmoBairro
  })

  return repetido !== undefined
}

export const rotuloDaPrioridade = (valor) => {
  const prioridade = prioridades.find((item) => item.valor === valor)

  return prioridade ? prioridade.rotulo : "Sem prioridade"
}

const pesoDaPrioridade = (valor) => {
  const prioridade = prioridades.find((item) => item.valor === valor)

  return prioridade ? prioridade.peso : 0
}

export const ordenarPedidos = (pedidos) => {
  return pedidos.toSorted((a, b) => {
    const resolvidoA = a.status === "resolvido" ? 1 : 0
    const resolvidoB = b.status === "resolvido" ? 1 : 0

    if (resolvidoA !== resolvidoB) {
      return resolvidoA - resolvidoB
    }

    const diferenca = pesoDaPrioridade(b.prioridade) - pesoDaPrioridade(a.prioridade)

    if (diferenca !== 0) {
      return diferenca
    }

    return new Date(a.criadoEm).getTime() - new Date(b.criadoEm).getTime()
  })
}

export const contarPorStatus = (pedidos, status) => {
  return pedidos.filter((pedido) => pedido.status === status).length
}
