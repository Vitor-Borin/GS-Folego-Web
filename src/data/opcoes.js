export const tiposDePonto = [
  { valor: "comercio", rotulo: "Comércio" },
  { valor: "condominio", rotulo: "Condomínio" },
  { valor: "associacao", rotulo: "Associação ou igreja" },
  { valor: "morador", rotulo: "Morador" },
  { valor: "servico", rotulo: "Serviço público" },
]

export const prioridades = [
  { valor: "alta", rotulo: "Alta", peso: 3 },
  { valor: "media", rotulo: "Média", peso: 2 },
  { valor: "baixa", rotulo: "Baixa", peso: 1 },
]

export const statusDoPedido = [
  { valor: "aberto", rotulo: "Aberto" },
  { valor: "andamento", rotulo: "A caminho" },
  { valor: "resolvido", rotulo: "Resolvido" },
]

export const pontoVazio = {
  nome: "",
  tipo: "",
  bairro: "",
  endereco: "",
  descricao: "",
  vagas: 1,
  ativo: true,
}
