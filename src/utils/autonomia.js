export const RENDIMENTO = 0.85
export const HORAS_NOMINAIS = 20
export const EXPOENTE_DO_CHUMBO = 1.3
export const EXPOENTE_DO_LITIO = 1

export const LIMITE_ALERTA_MIN = 120
export const LIMITE_CRITICO_MIN = 30

export const PICO_SEM_LUZ = 2200000
export const SEM_LUZ_NO_FIM = 158000
export const DIAS_DO_MODELO = 5

export const TAXA_DE_VOLTA = Math.log(PICO_SEM_LUZ / SEM_LUZ_NO_FIM) / DIAS_DO_MODELO

export const expoenteDaBateria = (tipo) => {
  if (tipo === "litio") {
    return EXPOENTE_DO_LITIO
  }

  return EXPOENTE_DO_CHUMBO
}

export const calcularAutonomia = (energia, consumo, tipo) => {
  if (energia <= 0 || consumo <= 0) {
    return 0
  }

  const fracao = (energia * RENDIMENTO) / (consumo * HORAS_NOMINAIS)
  const horas = HORAS_NOMINAIS * Math.pow(fracao, expoenteDaBateria(tipo))

  return Math.round(horas * 60)
}

export const estadoDaBateria = (minutos) => {
  if (minutos < LIMITE_CRITICO_MIN) {
    return "critico"
  }

  if (minutos < LIMITE_ALERTA_MIN) {
    return "alerta"
  }

  return "reserva"
}

export const folgaParaPedir = (minutos) => {
  return Math.max(0, minutos - LIMITE_ALERTA_MIN)
}

export const textoDaDuracao = (minutos) => {
  if (minutos < 60) {
    return `${minutos} min`
  }

  const horas = Math.floor(minutos / 60)
  const resto = minutos % 60

  return `${horas}h${resto < 10 ? "0" : ""}${resto}`
}

export const imoveisSemLuz = (dias) => {
  return PICO_SEM_LUZ * Math.exp(-TAXA_DE_VOLTA * dias)
}

export const fracaoSemLuz = (minutos) => {
  return Math.exp(-TAXA_DE_VOLTA * (minutos / 1440))
}

export const porCento = (fracao) => {
  return `${(fracao * 100).toFixed(1).replace(".", ",")}%`
}
