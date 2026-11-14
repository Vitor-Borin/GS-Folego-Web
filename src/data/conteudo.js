export const projeto = {
  nome: "Fôlego",
  linhasDoTitulo: ["Quando a luz cai,", "a ajuda mora ao lado."],
  apoio: "Uma rede de vizinhos para quem depende de energia elétrica para respirar.",
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
  fecho: "A ajuda existia, a uma casa de distância. Faltava saber que ela estava ali.",
}

export const comoFunciona = {
  etiqueta: "Como funciona",
  linhas: ["Do apagão à tomada,", "em quatro passos."],
  passos: [
    {
      titulo: "A luz cai",
      texto: "Um aparelho pequeno, ligado na mesma tomada do respirador, percebe na hora. Ele funciona mesmo sem internet.",
      visual: "visor",
    },
    {
      titulo: "Ele conta o tempo",
      texto: "Lê a bateria, calcula quantos minutos sobram e mostra no visor. Em minutos, não em porcentagem.",
      visual: "conta",
    },
    {
      titulo: "Pede ajuda",
      texto: "Com menos de duas horas de bateria, toca um alarme e abre um pedido na rede do bairro.",
      visual: "pedido",
    },
    {
      titulo: "A rede responde",
      texto: "O site mostra quem está com energia por perto. Um vizinho aceita, e a família sai de casa sabendo para onde ir.",
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
    reserva: "Com duas horas ou mais, dá tempo de chegar a um ponto com folga.",
    alerta: "Menos de duas horas. O aparelho toca o alarme e abre um pedido na rede.",
    critico: "Menos de trinta minutos. O alarme fica contínuo. Em emergência, ligue 192.",
  },
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
      texto: "Vê quanto tempo de bateria sobra, pede uma tomada e encontra um ponto com energia no bairro.",
      acao: "Pedir tomada",
      para: "/pedidos",
      foto: 32,
    },
    {
      titulo: "Quem tem energia",
      texto: "Gerador, nobreak, placa solar ou a bateria do carro. Cadastra o que tem e atende os pedidos de perto.",
      acao: "Oferecer minha tomada",
      para: "/rede/novo",
      foto: 23,
    },
    {
      titulo: "Quem abre as portas",
      texto: "Padaria, igreja, condomínio, posto de saúde. Confirma que está com energia e quantas tomadas tem livres.",
      acao: "Confirmar um ponto",
      para: "/rede",
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
    { nome: "Edge Computing", faz: "O aparelho com ESP32 que mede a bateria e decide sozinho." },
    { nome: "Python", faz: "A central que simula o apagão e monta a fila de prioridade." },
    { nome: "Matemática", faz: "O modelo da bateria descarregando e da cidade voltando a ter luz." },
    { nome: "Front-end e Web", faz: "Esta página e a rede de pontos e pedidos." },
    { nome: "Experiência", faz: "A jornada de quem cuida, do alarme até a tomada." },
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
      pergunta: "O Fôlego substitui o SAMU ou a distribuidora?",
      resposta: "Não. Ele organiza a ajuda entre vizinhos enquanto a energia não volta. Em emergência, ligue 192.",
    },
    {
      pergunta: "Os pontos e os pedidos desta página são reais?",
      resposta: "Não. É um projeto acadêmico e todos os dados são simulados. Nenhum dado de paciente foi usado.",
    },
    {
      pergunta: "O vizinho fica sabendo do problema de saúde de quem pede ajuda?",
      resposta: "Não. O pedido mostra só o necessário, como “preciso de uma tomada por duas horas”. Dado de saúde é sensível e fica de fora.",
    },
    {
      pergunta: "Por que um ponto deixa de aparecer como confirmado?",
      resposta: "Porque a confirmação vale por duas horas. Numa emergência, informação velha é pior do que nenhuma.",
    },
    {
      pergunta: "Como o aparelho sabe quanto tempo falta?",
      resposta: "Ele mede a energia que resta na bateria, desconta a perda do inversor e divide pelo consumo do respirador. É a conta do simulador desta página.",
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
  { para: "/rede", rotulo: "Rede" },
  { para: "/pedidos", rotulo: "Pedidos" },
]
