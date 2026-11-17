# Uso de IA no projeto

Este arquivo documenta como a inteligência artificial foi usada na parte de Front-end Design e Web Development do Fôlego.

## 1. Ferramentas utilizadas

| Ferramenta | Finalidade |
|---|---|
| Claude (Anthropic) | Pesquisa (material das aulas, dados do problema e referências visuais), escrita e revisão de código e execução dos testes das telas |

Nenhuma imagem do site foi gerada por IA. As fotos são do Wikimedia Commons, com crédito no rodapé.

## 2. Interações realizadas

Três exemplos que representam como a ferramenta foi usada. Os pedidos são trechos reais.

**Fazer a ideia funcionar na prática**

> "precisamos pensar na ideia na prática, melhorar ela na prática... não adianta nada ideia ser boa e prática não"

Resposta: a IA apontou dois furos da primeira versão (quem depende do aparelho não consegue ir até uma tomada, e a internet pode cair junto com a luz) e sugeriu um plano feito antes do apagão. O grupo adotou a ideia, que virou a página do plano impresso e a fila de pedidos ordenada pelo tempo de bateria que resta.

**Checar um risco levantado pelo grupo**

> "e tem que ver como funciona a troca de bateria no aparelho também, porque talvez tenha alguns riscos sobre isso."

Resposta: a IA reconheceu que esse ponto não estava coberto e que não sabe quais aparelhos aceitam a troca. Entrou a regra de só tirar a bateria vazia depois que a carregada estiver funcionando, no plano impresso e nas perguntas da página inicial, com o aviso de conferir no manual e com a equipe de saúde.

**Conferir a responsividade**

> "eu preciso que o responsivo no celular, tablet, notebook, em telas menores de computador, esteja tudo ok"

Resposta: as páginas foram abertas em 21 tamanhos de tela, de 320 a 1920 px. A conferência achou painéis mais altos do que a tela no notebook e textos cortados no celular deitado, que foram corrigidos.

## 3. Aplicação no projeto

Partes desenvolvidas com auxílio da IA:

- **Acesso à API** (`src/services`): funções de consultar, criar, atualizar e apagar com `fetch`.
- **Hooks** (`src/hooks`): os de dados e de formulário, no padrão `useState` + `useEffect`, e os de animação com GSAP.
- **Regras de negócio** (`src/utils`): cálculo do tempo de bateria, ordem da fila e validação dos formulários.
- **Componentes e páginas** (`src/components` e `src/pages`): montados a partir da direção visual aprovada.
- **Textos e dados de exemplo** (`src/data` e `mockapi`), a API local de teste e a primeira versão do README e deste arquivo.

Decisões do grupo:

- A escolha do tema e a adoção da versão prática da ideia: o plano impresso antes do apagão e a bateria que vai até a casa.
- As regras da rede, que valem também para o Python e o Edge: a confirmação de energia dura duas horas, o alerta começa em duas horas de bateria e a fila segue o tempo que resta.
- A direção visual do site, escolhida entre as referências pesquisadas.
- A regra da troca de bateria, levantada por um integrante do grupo.

## 4. Validação das respostas

- `npm run lint` e `npm run build` sem erro a cada rodada de mudanças.
- CRUD completo testado na tela nos dois recursos: criar, listar, editar, confirmar, mudar o status e apagar.
- Formulários testados com campo vazio, ponto repetido, telefone com letra e número quebrado.
- Todas as páginas conferidas em 21 tamanhos de tela, e o plano impresso gerado em PDF.
- Site testado com dados antigos e com a rede vazia.

Os testes foram rodados com a própria IA. Nós conferimos cada rodada nas telas, apontamos o que estava errado e pedimos os ajustes antes de aprovar.

## 5. Análise crítica

**Benefícios.** Ganhamos tempo na pesquisa, na escrita do código e, principalmente, nos testes: conferir o CRUD e todas as páginas em 21 tamanhos de tela à mão não caberia no prazo.

**Limitações.** A IA afirma coisas sem testar: em um caso disse que o plano impresso cabia em uma página, e com os pontos do bairro ele passava para a segunda. Ela também não conhece o problema na prática: o risco da troca de bateria foi percebido por um colega, não por ela. E quando o pedido é vago, a sugestão vem genérica.

**Dificuldades.** O que a IA entrega precisa ser lido e testado como código de outra pessoa. Uma correção de quebra de linha criou rolagem lateral no celular, e só vimos porque as telas foram conferidas de novo.

**O que fica.** A ferramenta rende mais com pedido específico, e ver na tela antes de aprovar evitou entregar versão ruim.
