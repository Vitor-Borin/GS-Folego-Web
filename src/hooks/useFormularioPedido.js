import { useState } from "react"

const useFormularioPedido = () => {
  const [titulo, setTitulo] = useState("")
  const [bairro, setBairro] = useState("")
  const [detalhe, setDetalhe] = useState("")
  const [prioridade, setPrioridade] = useState("media")
  const [erros, setErros] = useState({})

  const validar = () => {
    const novosErros = {}
    let valido = true

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
      titulo: titulo.trim(),
      bairro: bairro.trim(),
      detalhe: detalhe.trim(),
      prioridade: prioridade,
      status: "aberto",
      criadoEm: new Date().toISOString(),
    }
  }

  const limpar = () => {
    setTitulo("")
    setBairro("")
    setDetalhe("")
    setPrioridade("media")
    setErros({})
  }

  return {
    titulo,
    setTitulo,
    bairro,
    setBairro,
    detalhe,
    setDetalhe,
    prioridade,
    setPrioridade,
    erros,
    validar,
    montarDados,
    limpar,
  }
}

export default useFormularioPedido
