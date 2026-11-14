export const projeto = {
  nome: "Fôlego",
  linhasDoTitulo: ["Quando a luz cai,", "a ajuda mora ao lado."],
  apoio: "O plano de apagão do bairro, para quem depende de energia elétrica para respirar.",
  cidade: "São Paulo, SP",
  edicao: "Global Solution 2026.2",
}

export const manifesto = {
  etiqueta: "O problema",
  pedacos: [
    { id: "a", texto: "Em dezembro de 2025, um ciclone deixou" },
    { id: "b", foto: 34 },
    { id: "c", texto: "2,2 milhões de imóveis da Grande São Paulo sem luz ao mesmo tempo. Cinco dias depois," },
    { id: "d", foto: 22 },
    { id: "e", texto: "158 mil continuavam no escuro. A bateria de um respirador de casa dura, no melhor relato," },
    { id: "f", foto: 32 },
    { id: "g", texto: "doze horas." },
  ],
  fonte: "Números da Enel publicados pelo portal eixos em dezembro de 2025. Relato da bateria: Viva, 19/12/2025.",
}

export const apagao = {
  etiqueta: "A conta",
  linhas: ["A luz volta devagar.", "A bateria não espera."],
  texto: "Ligamos os dois números divulgados do apagão de dezembro de 2025 com uma curva. Ela mostra quantos imóveis ainda estavam sem luz em cada dia.",
  tituloDoGrafico: "Imóveis sem luz depois do pico",
  dias: ["Pico", "Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5"],
  tituloDasBaterias: "Quando a bateria acaba, quantas casas ainda estão no escuro?",
  baterias: [
    { nome: "Nobreak comum", duracao: "15 min", minutos: 15 },
    { nome: "Bateria de duas horas", duracao: "2 h", minutos: 120 },
    { nome: "A melhor bateria dos relatos", duracao: "12 h", minutos: 720 },
  ],
  nota: "Modelo do grupo para a disciplina de Matemática: uma curva exponencial ajustada ao pico e ao quinto dia. É uma simplificação.",
}

export const citacao = {
  inicio: "Peguei energia emprestada",
  destaque: "do meu vizinho.",
  autoria: "Mãe de um paciente em ventilação mecânica, no apagão de outubro de 2024",
  fonte: "Band, 14/10/2024",
  fecho: "Ela levou as baterias do aparelho para carregar na casa ao lado. A ajuda existia. Faltava um plano.",
}

export const comoFunciona = {
  etiqueta: "Como funciona",
  linhas: ["Do plano à bateria cheia,", "em quatro passos."],
  passos: [
    {
      titulo: "Antes, o plano",
      texto: "Com calma, a família calcula quanto a bateria dura e imprime o plano: os pontos com energia do bairro e os telefones. Sem internet, o papel continua valendo.",
      visual: "conta",
    },
    {
      titulo: "A luz cai",
      texto: "Um aparelho pequeno, ligado na mesma tomada do respirador, percebe na hora e começa a contar o tempo. Ele apita sem precisar de internet.",
      visual: "visor",
    },
    {
      titulo: "A fila anda pelo relógio",
      texto: "Com menos de duas horas de bateria, o pedido entra na fila do bairro. Quem tem menos tempo fica em primeiro.",
      visual: "pedido",
    },
    {
      titulo: "A bateria vai até a casa",
      texto: "Quem ajuda leva uma bateria carregada e traz a vazia para recarregar no ponto. A pessoa que respira por aparelho não precisa sair de casa.",
      visual: "ponto",
    },
  ],
}

export const simulador = {
  etiqueta: "Faça a conta",
  linhas: ["Quanto tempo a sua", "bateria aguenta?"],
  texto: "É a mesma fórmula que roda no aparelho, no programa em Python e no relatório de Matemática.",
  nota: "Os 290 W são de concentradores domésticos citados em fontes. Confira o manual do seu aparelho.",
  mensagens: {
    reserva: "Com duas horas ou mais, dá tempo de a bateria reserva chegar com folga.",
    alerta: "Menos de duas horas. É a hora de pedir ajuda: o pedido entra na fila do bairro.",
    critico: "Menos de trinta minutos. O alarme fica contínuo. Em emergência, ligue 192.",
  },
}

export const plano = {
  rotulo: "Antes do apagão",
  titulo: "Meu plano de apagão",
  texto: "Monte agora, com calma, e deixe impresso em casa. No dia em que a luz cair, o papel funciona sem internet.",
  passos: [
    "Anote a hora em que a luz caiu. O relógio da bateria começa aí.",
    "Ligue para um ponto desta lista ou abra um pedido no site, se houver sinal no celular.",
    "Combine quem traz a bateria carregada e quem leva a vazia para recarregar.",
    "Com menos de 30 minutos de bateria e sem ajuda a caminho, ligue 192.",
  ],
  emergencia: "Em emergência, ligue 192.",
  aviso: "Gerador só em área aberta: a fumaça em lugar fechado mata. Este plano organiza a ajuda entre vizinhos e não substitui o SAMU nem a distribuidora. Projeto acadêmico, com dados simulados.",
}

export const assinatura = {
  frase: "Energia de vizinho, para quem não pode esperar.",
}

export const quemFaz = {
  etiqueta: "Quem faz a rede",
  linhas: ["Três jeitos", "de entrar."],
  papeis: [
    {
      titulo: "Quem cuida",
      texto: "Monta o plano antes. No apagão, abre um pedido com os minutos de bateria que sobram.",
      acao: "Montar meu plano",
      para: "/plano",
      foto: 32,
    },
    {
      titulo: "Quem tem energia",
      texto: "Gerador, placa solar, nobreak ou bateria reserva. Cadastra o ponto e diz se pode emprestar uma bateria.",
      acao: "Cadastrar meu ponto",
      para: "/rede/novo",
      foto: 23,
    },
    {
      titulo: "Quem leva e traz",
      texto: "Voluntário ou equipe de saúde do bairro. Atende a fila na ordem do relógio: leva a bateria cheia e traz a vazia.",
      acao: "Ver a fila",
      para: "/pedidos",
      foto: 1,
    },
  ],
}

export const rede = {
  titulo: "A rede agora",
  texto: "Estes pontos estão cadastrados neste momento. Qualquer pessoa do bairro pode confirmar um ponto ou abrir um pedido.",
}

export const porDentro = {
  etiqueta: "Por dentro",
  linhas: ["Uma ideia,", "sete disciplinas."],
  texto: "O mesmo problema atravessa todas as entregas da Global Solution. Os números são os mesmos em todas elas.",
  partes: [
    { nome: "Edge Computing", faz: "O aparelho com ESP32 que percebe a queda de luz, conta o tempo e decide sozinho." },
    { nome: "Python", faz: "A central que simula o apagão e monta a fila pelo tempo de bateria." },
    { nome: "Matemática", faz: "O modelo da bateria descarregando e da cidade voltando a ter luz." },
    { nome: "Front-end e Web", faz: "Esta página, o plano, a rede de pontos e a fila de pedidos." },
    { nome: "Experiência", faz: "A jornada de quem cuida, do plano até a bateria cheia." },
    { nome: "Pitch", faz: "A história contada em três minutos." },
  ],
  ods: [
    { numero: "3", nome: "Saúde e bem-estar", faz: "Evita que o aparelho pare por falta de energia." },
    { numero: "7", nome: "Energia limpa e acessível", faz: "Energia confiável para quem não pode ficar sem ela." },
    { numero: "10", nome: "Redução das desigualdades", faz: "Quem não pode comprar um gerador passa a ter uma rede." },
    { numero: "11", nome: "Cidades e comunidades sustentáveis", faz: "Menos pessoas afetadas quando o desastre vem." },
    { numero: "13", nome: "Ação contra a mudança global do clima", faz: "Bairros mais preparados para eventos extremos." },
  ],
}

export const perguntas = {
  etiqueta: "Perguntas",
  linhas: ["O que todo mundo", "pergunta primeiro."],
  itens: [
    {
      pergunta: "E se a internet cair junto com a luz?",
      resposta: "Por isso o plano é feito antes e fica impresso em casa, com os pontos e os telefones. O aparelho apita sem internet. O site ajuda enquanto houver sinal.",
    },
    {
      pergunta: "A pessoa precisa ir até o ponto de energia?",
      resposta: "Quase nunca. O mais comum é a bateria andar: alguém traz uma carregada e leva a vazia para recarregar. Ir até o ponto é só para quem consegue se deslocar.",
    },
    {
      pergunta: "O Fôlego substitui o SAMU ou a distribuidora?",
      resposta: "Não. Ele organiza a ajuda entre vizinhos enquanto a energia não volta. Em emergência, ligue 192.",
    },
    {
      pergunta: "Os pontos e os pedidos desta página são reais?",
      resposta: "Não. É um projeto acadêmico e todos os dados são simulados. Nenhum dado de paciente foi usado.",
    },
    {
      pergunta: "O vizinho fica sabendo do problema de saúde de quem pede ajuda?",
      resposta: "Não. O pedido mostra só o necessário, como “preciso de uma bateria carregada”. Dado de saúde é sensível e fica de fora.",
    },
    {
      pergunta: "Como o aparelho sabe quanto tempo falta?",
      resposta: "Ele percebe que a luz caiu e passa a contar o tempo. A duração da bateria vem da conta do simulador desta página, com margem de segurança.",
    },
    {
      pergunta: "Posso ligar um gerador dentro de casa?",
      resposta: "Não. Gerador só em área aberta: a fumaça em lugar fechado mata.",
    },
  ],
}

export const chamada = {
  linhas: ["Tem energia de reserva?", "Entre na rede antes do próximo apagão."],
  aviso: "Em emergência, ligue 192.",
}

export const equipe = [
  { nome: "Vitor Borin", rm: "RM573194", parte: "Front-end e Web Development" },
  { nome: "Integrante 2", rm: "", parte: "Parte a definir" },
  { nome: "Integrante 3", rm: "", parte: "Parte a definir" },
]

export const linksDoMenu = [
  { para: "/", rotulo: "Início" },
  { para: "/plano", rotulo: "Meu plano" },
  { para: "/rede", rotulo: "Rede" },
  { para: "/pedidos", rotulo: "Pedidos" },
]
