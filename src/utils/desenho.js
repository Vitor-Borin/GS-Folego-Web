export const pseudoAleatorio = (indice) => {
  const valor = Math.sin(indice * 12.9898) * 43758.5453

  return valor - Math.floor(valor)
}

const arredondar = (numero) => {
  return Math.round(numero * 100) / 100
}

export const montarConstelacao = (fotos) => {
  return fotos.map((foto, indice) => {
    const angulo = indice * 2.39996
    const profundidade = (indice * 0.7548777) % 1
    const raioHorizontal = 27 + profundidade * 24
    const raioVertical = 26 + profundidade * 23

    const inicioDaFaixa = Math.sin(angulo) < 0 ? 9 : 74

    return {
      id: indice,
      src: foto.src,
      profundidade: arredondar(profundidade),
      esquerda: arredondar(50 + Math.cos(angulo) * raioHorizontal),
      topo: arredondar(50 + Math.sin(angulo) * raioVertical),
      esquerdaNoCelular: arredondar(6 + pseudoAleatorio(indice + 71) * 88),
      topoNoCelular: arredondar(inicioDaFaixa + pseudoAleatorio(indice + 91) * 17),
      largura: arredondar(2.6 + profundidade * profundidade * 6.4),
      larguraMinima: Math.round(28 + profundidade * 56),
      opacidade: arredondar(0.28 + profundidade * 0.72),
    }
  })
}

export const montarCelulas = (desenho) => {
  const celulas = []
  let numero = 0

  desenho.forEach((linha, indiceDaLinha) => {
    linha.split("").forEach((marca, indiceDaColuna) => {
      const cheia = marca !== "0"

      if (cheia) {
        numero = numero + 1
      }

      celulas.push({
        id: `${indiceDaLinha}-${indiceDaColuna}`,
        cheia: cheia,
        acesa: marca === "2",
        numero: cheia ? numero : 0,
      })
    })
  })

  return celulas
}
