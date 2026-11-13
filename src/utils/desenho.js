export const pseudoAleatorio = (indice) => {
  const valor = Math.sin(indice * 12.9898) * 43758.5453

  return valor - Math.floor(valor)
}

export const montarCelulas = (desenho) => {
  const celulas = []
  let numero = 0

  desenho.forEach((linha, indiceDaLinha) => {
    linha.split("").forEach((marca, indiceDaColuna) => {
      const cheia = marca === "1"

      if (cheia) {
        numero = numero + 1
      }

      celulas.push({
        id: `${indiceDaLinha}-${indiceDaColuna}`,
        cheia: cheia,
        numero: cheia ? numero : 0,
      })
    })
  })

  return celulas
}
