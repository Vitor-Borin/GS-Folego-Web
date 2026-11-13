export const projeto = {
  nome: "Fôlego",
  linhasDoTitulo: ["Quando a luz cai,", "a ajuda mora ao lado."],
  apoio: "Uma rede de vizinhos para quem depende de energia elétrica para respirar.",
  cidade: "São Paulo, SP",
  edicao: "Global Solution 2026.2",
}

export const camadas = [
  {
    etiqueta: "O problema",
    linhas: ["A bateria dura horas.", "O apagão, dias."],
    texto: "Em dezembro de 2025, parte de São Paulo ficou cinco dias sem luz. Um respirador de casa aguenta até doze horas.",
    fonte: "Enel à ANEEL, jan/2026 · Viva, dez/2025",
  },
  {
    etiqueta: "Quem ajuda",
    linhas: ["O vizinho com gerador já existe.", "Falta saber onde ele está."],
    texto: "Padaria, condomínio, igreja, a casa da esquina. Quem tem energia de reserva entra na rede com um toque.",
    fonte: "Relato de uma mãe à Band, out/2024",
  },
  {
    etiqueta: "Como funciona",
    linhas: ["Um sensor conta os minutos.", "A rede acha a tomada mais perto."],
    texto: "O aparelho avisa quanto tempo de bateria sobra. Abaixo de duas horas, o pedido de ajuda chega aos pontos do bairro.",
    fonte: "Protótipo do grupo: ESP32, Python e esta página",
  },
]

export const assinatura = {
  frase: "Energia de vizinho, para quem não pode esperar.",
}

export const rede = {
  titulo: "A rede agora",
  texto: "Estes pontos estão cadastrados neste momento. Qualquer pessoa do bairro pode confirmar um ponto ou abrir um pedido.",
}

export const equipe = [
  { nome: "Vitor Borin", rm: "RM573194", parte: "Front-end e Web Development" },
  { nome: "Integrante 2", rm: "", parte: "Parte a definir" },
  { nome: "Integrante 3", rm: "", parte: "Parte a definir" },
]

export const linksDoMenu = [
  { para: "/", rotulo: "Início" },
  { para: "/rede", rotulo: "Rede" },
  { para: "/pedidos", rotulo: "Pedidos" },
]
