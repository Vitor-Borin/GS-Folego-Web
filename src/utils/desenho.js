export const pseudoAleatorio = (indice) => {
  const valor = Math.sin(indice * 12.9898) * 43758.5453

  return valor - Math.floor(valor)
}

const arredondar = (numero) => {
  return Math.round(numero * 100) / 100
}

export const montarConstelacao = (fotos) => {
  return fotos.map((foto, indice) => {
    const angulo = indice * 2.39996 + pseudoAleatorio(indice + 3) * 0.6
    const profundidade = pseudoAleatorio(indice + 11)
    const raioHorizontal = 17 + profundidade * 33
    const raioVertical = 19 + profundidade * 29

    return {
      id: indice,
      src: foto.src,
      profundidade: arredondar(profundidade),
      cosseno: arredondar(Math.cos(angulo)),
      seno: arredondar(Math.sin(angulo)),
      esquerda: arredondar(50 + Math.cos(angulo) * raioHorizontal),
      topo: arredondar(50 + Math.sin(angulo) * raioVertical),
      largura: arredondar(3.2 + profundidade * profundidade * 8.8),
      larguraMinima: Math.round(30 + profundidade * 64),
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
