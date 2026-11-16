import { useState } from "react"
import { algarismosDoTelefone, soAlgarismos } from "../utils/regras"

const useFormularioPonto = (pontoInicial) => {
  const [nome, setNome] = useState(pontoInicial.nome)
  const [tipo, setTipo] = useState(pontoInicial.tipo)
  const [bairro, setBairro] = useState(pontoInicial.bairro)
  const [endereco, setEndereco] = useState(pontoInicial.endereco)
  const [telefone, setTelefone] = useState(pontoInicial.telefone)
  const [fonte, setFonte] = useState(pontoInicial.fonte)
  const [descricao, setDescricao] = useState(pontoInicial.descricao)
  const [vagas, setVagas] = useState(String(pontoInicial.vagas))
  const [empresta, setEmpresta] = useState(pontoInicial.empresta)
  const [ativo, setAtivo] = useState(pontoInicial.ativo)
  const [erros, setErros] = useState({})

  const validar = () => {
    const novosErros = {}
    let valido = true

    if (nome.trim().length < 3 || nome.trim().length > 60) {
      novosErros.nome = "Escreva o nome do ponto, de 3 a 60 letras."
      valido = false
    }

    if (tipo === "") {
      novosErros.tipo = "Escolha o tipo do ponto."
      valido = false
    }

    if (bairro.trim() === "" || bairro.trim().length > 40) {
      novosErros.bairro = "Escreva o bairro, com até 40 letras."
      valido = false
    }

    if (endereco.trim() === "" || endereco.trim().length > 80) {
      novosErros.endereco = "Escreva o endereço ou um ponto de referência, com até 80 letras."
      valido = false
    }

    const numeros = algarismosDoTelefone(telefone)

    if (!soAlgarismos(numeros) || numeros.length < 10 || numeros.length > 11) {
      novosErros.telefone = "Escreva o telefone com DDD: 10 ou 11 números."
      valido = false
    }

    if (fonte === "") {
      novosErros.fonte = "Escolha de onde vem a energia."
      valido = false
    }

    if (!soAlgarismos(vagas.trim()) || Number(vagas) > 50) {
      novosErros.vagas = "Informe um número inteiro de 0 a 50."
      valido = false
    }

    if (descricao.length > 200) {
      novosErros.descricao = "A descrição cabe em até 200 letras."
      valido = false
    }

    setErros(novosErros)

    return valido
  }

  const montarDados = () => {
    const confirmadoEm = pontoInicial.atualizadoEm ? pontoInicial.atualizadoEm : new Date().toISOString()

    return {
      nome: nome.trim(),
      tipo: tipo,
      bairro: bairro.trim(),
      endereco: endereco.trim(),
      telefone: telefone.trim(),
      fonte: fonte,
      descricao: descricao.trim(),
      vagas: Number(vagas),
      empresta: empresta,
      ativo: ativo,
      atualizadoEm: confirmadoEm,
    }
  }

  return {
    nome,
    setNome,
    tipo,
    setTipo,
    bairro,
    setBairro,
    endereco,
    setEndereco,
    telefone,
    setTelefone,
    fonte,
    setFonte,
    descricao,
    setDescricao,
    vagas,
    setVagas,
    empresta,
    setEmpresta,
    ativo,
    setAtivo,
    erros,
    validar,
    montarDados,
  }
}

export default useFormularioPonto
