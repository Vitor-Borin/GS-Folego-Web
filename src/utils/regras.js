import { estadosDaBateria, fontesDeEnergia, statusDoPedido, tiposDeAjuda, tiposDePonto } from "../data/opcoes"
import { LIMITE_CRITICO_MIN } from "./autonomia"

export const LIMITE_CONFIRMACAO_MIN = 120

export const minutosEntre = (agora, dataIso) => {
  const minutos = Math.round((agora - new Date(dataIso).getTime()) / 60000)

  return Math.max(0, minutos)
}

export const soAlgarismos = (texto) => {
  if (texto === "") {
    return false
  }

  for (let posicao = 0; posicao < texto.length; posicao = posicao + 1) {
    if (!"0123456789".includes(texto[posicao])) {
      return false
    }
  }

  return true
}

export const algarismosDoTelefone = (telefone) => {
  return telefone.replaceAll("(", "").replaceAll(")", "").replaceAll("-", "").replaceAll(" ", "")
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

export const rotuloDaFonte = (valor) => {
  const fonte = fontesDeEnergia.find((item) => item.valor === valor)

  return fonte ? fonte.rotulo : "Energia"
}

export const situacaoDoPonto = (ponto, agora) => {
  if (!ponto.ativo) {
    return "Fora da rede no momento"
  }

  const tempo = textoDoTempo(minutosEntre(agora, ponto.atualizadoEm))

  return confirmadoHaPouco(ponto, agora) ? `Com energia, confirmado ${tempo}` : `Última confirmação ${tempo}`
}

export const situacaoCurta = (ponto, agora) => {
  if (!ponto.ativo) {
    return "Fora da rede"
  }

  return confirmadoHaPouco(ponto, agora) ? "Com energia" : "Aguardando"
}

export const textoDasVagas = (vagas) => {
  return `${vagas} ${Number(vagas) === 1 ? "tomada livre" : "tomadas livres"}`
}

export const textoDaOferta = (ponto) => {
  const partes = [rotuloDaFonte(ponto.fonte), textoDasVagas(ponto.vagas)]

  if (ponto.empresta) {
    partes.push("empresta bateria")
  }

  return partes.join(" · ")
}

export const filtrarPontos = (pontos, busca, tipo, soEmprestam) => {
  const termo = busca.trim().toLowerCase()

  return pontos.filter((ponto) => {
    const combinaComTipo = tipo === "todos" || ponto.tipo === tipo
    const combinaComEmprestimo = !soEmprestam || ponto.empresta
    const texto = `${ponto.nome} ${ponto.bairro} ${ponto.endereco}`.toLowerCase()

    return combinaComTipo && combinaComEmprestimo && texto.includes(termo)
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

export const resumoDaRede = (pontos, agora) => {
  const confirmados = contarConfirmados(pontos, agora)

  if (pontos.length === 0) {
    return "Nenhum ponto cadastrado ainda"
  }

  if (confirmados === 0) {
    return pontos.length === 1 ? "1 ponto cadastrado, sem confirmação agora" : `${pontos.length} pontos cadastrados, sem confirmação agora`
  }

  return confirmados === 1 ? "1 ponto com energia agora" : `${confirmados} pontos com energia agora`
}

export const contarQueEmprestam = (pontos) => {
  return pontos.filter((ponto) => ponto.empresta).length
}

export const somarVagas = (pontos, agora) => {
  return pontos.reduce((total, ponto) => {
    return confirmadoHaPouco(ponto, agora) ? total + Number(ponto.vagas) : total
  }, 0)
}

export const pontoRepetido = (pontos, nome, bairro) => {
  const repetido = pontos.find((ponto) => {
    const mesmoNome = ponto.nome.trim().toLowerCase() === nome.trim().toLowerCase()

    return mesmoNome && mesmoBairro(ponto.bairro, bairro)
  })

  return repetido !== undefined
}

export const mesmoBairro = (bairroA, bairroB) => {
  return bairroA.trim().toLowerCase() === bairroB.trim().toLowerCase()
}

export const listarBairros = (pontos) => {
  const nomes = pontos.map((ponto) => ponto.bairro.trim())
  const chaves = nomes.map((nome) => nome.toLowerCase())

  return nomes.filter((nome, indice) => chaves.indexOf(nome.toLowerCase()) === indice).toSorted()
}

export const pontosDoBairro = (pontos, bairro) => {
  return pontos
    .filter((ponto) => mesmoBairro(ponto.bairro, bairro) && ponto.ativo)
    .toSorted((a, b) => {
      const pesoA = a.empresta ? 1 : 0
      const pesoB = b.empresta ? 1 : 0

      if (pesoA !== pesoB) {
        return pesoB - pesoA
      }

      return a.nome < b.nome ? -1 : 1
    })
}

export const rotuloDaAjuda = (valor) => {
  const ajuda = tiposDeAjuda.find((item) => item.valor === valor)

  return ajuda ? ajuda.rotulo : "Ajuda"
}

export const rotuloDoStatus = (valor) => {
  const status = statusDoPedido.find((item) => item.valor === valor)

  return status ? status.rotulo : "Sem status"
}

export const rotuloDoEstado = (valor) => {
  const estado = estadosDaBateria.find((item) => item.valor === valor)

  return estado ? estado.rotulo : ""
}

export const minutosRestantes = (pedido, agora) => {
  return Math.max(0, Number(pedido.minutos) - minutosEntre(agora, pedido.criadoEm))
}

export const LIMITE_PEDIDO_MIN = 1440

export const pedidoAntigo = (pedido, agora) => {
  return pedido.status !== "resolvido" && minutosEntre(agora, pedido.criadoEm) > LIMITE_PEDIDO_MIN
}

export const ordenarPedidos = (pedidos, agora) => {
  return pedidos.toSorted((a, b) => {
    const resolvidoA = a.status === "resolvido" ? 1 : 0
    const resolvidoB = b.status === "resolvido" ? 1 : 0

    if (resolvidoA !== resolvidoB) {
      return resolvidoA - resolvidoB
    }

    const diferenca = minutosRestantes(a, agora) - minutosRestantes(b, agora)

    if (diferenca !== 0) {
      return diferenca
    }

    return new Date(a.criadoEm).getTime() - new Date(b.criadoEm).getTime()
  })
}

export const contarPorStatus = (pedidos, status) => {
  return pedidos.filter((pedido) => pedido.status === status).length
}

export const contarNaFila = (pedidos) => {
  return pedidos.filter((pedido) => pedido.status !== "resolvido").length
}

export const contarCriticos = (pedidos, agora) => {
  return pedidos.filter((pedido) => {
    return pedido.status !== "resolvido" && minutosRestantes(pedido, agora) < LIMITE_CRITICO_MIN
  }).length
}
