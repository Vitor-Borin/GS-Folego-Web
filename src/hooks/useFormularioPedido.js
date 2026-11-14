import { useState } from "react"

const useFormularioPedido = () => {
  const [ajuda, setAjuda] = useState("")
  const [minutos, setMinutos] = useState("")
  const [titulo, setTitulo] = useState("")
  const [bairro, setBairro] = useState("")
  const [detalhe, setDetalhe] = useState("")
  const [erros, setErros] = useState({})

  const validar = () => {
    const novosErros = {}
    let valido = true

    if (ajuda === "") {
      novosErros.ajuda = "Escolha o tipo de ajuda."
      valido = false
    }

    if (minutos.trim() === "" || isNaN(Number(minutos)) || Number(minutos) < 0 || Number(minutos) > 1440) {
      novosErros.minutos = "Informe os minutos de bateria, de 0 a 1440."
      valido = false
    }

    if (titulo.trim().length < 5) {
      novosErros.titulo = "Diga em poucas palavras do que você precisa."
      valido = false
    }

    if (bairro.trim() === "") {
      novosErros.bairro = "Escreva o bairro."
      valido = false
    }

    if (detalhe.length > 200) {
      novosErros.detalhe = "O detalhe cabe em até 200 letras."
      valido = false
    }

    setErros(novosErros)

    return valido
  }

  const montarDados = () => {
    return {
      ajuda: ajuda,
      minutos: Number(minutos),
      titulo: titulo.trim(),
      bairro: bairro.trim(),
      detalhe: detalhe.trim(),
      status: "aberto",
      criadoEm: new Date().toISOString(),
    }
  }

  const limpar = () => {
    setAjuda("")
    setMinutos("")
    setTitulo("")
    setBairro("")
    setDetalhe("")
    setErros({})
  }

  return {
    ajuda,
    setAjuda,
    minutos,
    setMinutos,
    titulo,
    setTitulo,
    bairro,
    setBairro,
    detalhe,
    setDetalhe,
    erros,
    validar,
    montarDados,
    limpar,
  }
}

export default useFormularioPedido
