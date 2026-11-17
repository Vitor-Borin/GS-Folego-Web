export const tiposDePonto = [
  { valor: "comercio", rotulo: "Comércio" },
  { valor: "condominio", rotulo: "Condomínio" },
  { valor: "associacao", rotulo: "Associação ou igreja" },
  { valor: "morador", rotulo: "Morador" },
  { valor: "servico", rotulo: "Serviço público" },
]

export const fontesDeEnergia = [
  { valor: "gerador", rotulo: "Gerador" },
  { valor: "solar", rotulo: "Placa solar" },
  { valor: "nobreak", rotulo: "Nobreak ou bateria" },
  { valor: "carro", rotulo: "Bateria de carro" },
]

export const tiposDeAjuda = [
  { valor: "emprestimo", rotulo: "Bateria emprestada" },
  { valor: "recarga", rotulo: "Recarregar minha bateria" },
  { valor: "tomada", rotulo: "Tomada no local" },
]

export const statusDoPedido = [
  { valor: "aberto", rotulo: "Aberto" },
  { valor: "andamento", rotulo: "A caminho" },
  { valor: "resolvido", rotulo: "Resolvido" },
]

export const bateriasDeExemplo = [
  { rotulo: "Nobreak comum", valor: 84 },
  { rotulo: "Nobreak de 1.500 VA", valor: 168 },
  { rotulo: "Estação portátil", valor: 512 },
  { rotulo: "Bateria grande", valor: 1200 },
]

export const aparelhosDeExemplo = [
  { rotulo: "Bomba de dieta", valor: 9 },
  { rotulo: "CPAP", valor: 20 },
  { rotulo: "CPAP com umidificador", valor: 53 },
  { rotulo: "Concentrador portátil", valor: 62 },
  { rotulo: "Ventilador domiciliar", valor: 90 },
  { rotulo: "Concentrador de oxigênio", valor: 290 },
]

export const estadosDaBateria = [
  { valor: "critico", rotulo: "Crítico", faixa: "até 30 min" },
  { valor: "alerta", rotulo: "Alerta", faixa: "até 2 h" },
  { valor: "reserva", rotulo: "Reserva", faixa: "2 h ou mais" },
]

export const pontoVazio = {
  nome: "",
  tipo: "",
  bairro: "",
  endereco: "",
  descricao: "",
  vagas: 1,
  ativo: true,
  fonte: "",
  empresta: false,
  telefone: "",
}
