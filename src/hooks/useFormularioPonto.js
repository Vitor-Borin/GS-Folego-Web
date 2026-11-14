import { useState } from "react"

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

    if (nome.trim().length < 3) {
      novosErros.nome = "Escreva o nome do ponto, com pelo menos 3 letras."
      valido = false
    }

    if (tipo === "") {
      novosErros.tipo = "Escolha o tipo do ponto."
      valido = false
    }

    if (bairro.trim() === "") {
      novosErros.bairro = "Escreva o bairro."
      valido = false
    }

    if (endereco.trim() === "") {
      novosErros.endereco = "Escreva o endereço ou um ponto de referência."
      valido = false
    }

    if (telefone.trim().length < 8) {
      novosErros.telefone = "Escreva um telefone com DDD."
      valido = false
    }

    if (fonte === "") {
      novosErros.fonte = "Escolha de onde vem a energia."
      valido = false
    }

    if (vagas.trim() === "" || isNaN(Number(vagas)) || Number(vagas) < 0 || Number(vagas) > 50) {
      novosErros.vagas = "Informe um número de 0 a 50."
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
      atualizadoEm: new Date().toISOString(),
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
