# Fôlego

O plano de apagão do bairro, para quem depende de energia elétrica para respirar.

Global Solution 2026.2 (CitizenTech) · FIAP · Engenharia de Software, 1º ano · Front-end Design e Web Development

## Ficha da CitizenTech

| Item | Resposta |
|---|---|
| Nome da CitizenTech | Fôlego |
| Cidade e bairro | São Paulo, SP. **[PREENCHER: bairro do piloto escolhido pelo grupo]**. Os dados de exemplo usam Bela Vista, Liberdade e Cambuci |
| Cidadão beneficiado | Famílias e cuidadores de pessoas eletrodependentes: quem usa em casa concentrador de oxigênio, ventilador mecânico, aspirador de secreção ou outro aparelho que não pode desligar |
| Problema, em uma frase | Quando a luz cai, quem respira por aparelho tem minutos ou horas de bateria, a energia leva dias para voltar, e a ajuda que está a uma quadra ninguém sabe onde fica |
| Como funciona | Antes do apagão, a família monta e imprime o plano (quanto a bateria dura, quando pedir ajuda, pontos do bairro com telefone). Durante, um aparelho na tomada percebe a queda de luz e conta o tempo, o pedido entra numa fila ordenada pelo tempo de bateria que resta, e uma bateria carregada vai até a casa |
| O que cada parte faz | **Edge Computing:** dispositivo com ESP32 que percebe a queda de luz, conta o tempo e decide sozinho. **Python:** central que simula o apagão e monta a fila. **Matemática:** modelo da bateria descarregando e da cidade voltando a ter luz. **Front-end e Web (este repositório):** o plano, a rede de pontos e a fila de pedidos. **Experiência:** a jornada de quem cuida. **Pitch:** a história em três minutos |
| Link do repositório | **[PREENCHER: link do repositório no GitHub]** |
| Link do deploy | **[PREENCHER: link da Vercel]** |
| Indicador de impacto | Famílias com plano pronto, tempo entre o pedido e a chegada da bateria carregada, pontos ativos e baterias reserva por bairro |
| ODS conectados | 3 (saúde e bem-estar), 7 (energia limpa e acessível), 10 (redução das desigualdades), 11 (cidades e comunidades sustentáveis) e 13 (ação contra a mudança global do clima) |

### Equipe

| Nome | RM | Parte |
|---|---|---|
| Vitor Borin | RM573194 | Front-end Design e Web Development |
| **[PREENCHER: nome completo do Ryan]** | **[RM]** | **[parte]** |
| **[PREENCHER: nome completo do Robert]** | **[RM]** | **[parte]** |

## Avisos

- Projeto acadêmico. **Todos os pontos, telefones e pedidos são simulados.** Nenhum dado de paciente foi usado.
- O Fôlego não é aparelho médico e não substitui o SAMU, a distribuidora de energia nem a equipe de saúde. **Em emergência, ligue 192.**
- A conta da bateria é uma estimativa: bateria usada dura menos. Os 290 W são uma referência para concentrador de oxigênio doméstico, e o número certo está no manual de cada aparelho.
- O aparelho que percebe a queda de luz (parte de Edge Computing) é um protótipo simulado. No site, quem abre o pedido é a pessoa.
- O projeto não sabe quais aparelhos aceitam ser ligados numa bateria emprestada. Isso se confirma no manual e com a equipe de saúde.

## O que a aplicação faz

| Rota | Página | O que dá para fazer | API |
|---|---|---|---|
| `/` | Início | Conta o problema, mostra os quatro passos, tem o simulador de bateria e os três pontos mais recentes da rede | GET `pontos` |
| `/plano` | Meu plano | Ajustar a bateria e o consumo do aparelho, escolher o bairro e imprimir a folha do plano | GET `pontos` |
| `/rede` | Rede | Ver os pontos, atualizar a lista, buscar, filtrar por tipo e por quem empresta bateria, confirmar "com energia agora" e apagar | GET, PUT e DELETE `pontos` |
| `/rede/novo` | Cadastrar ponto | Cadastrar um ponto, com prévia de como ele aparece na rede | POST `pontos` |
| `/rede/:id` | Ponto | Ver, editar e apagar um ponto | GET por id, PUT e DELETE `pontos` |
| `/pedidos` | Fila de pedidos | Abrir um pedido, dizer "estou a caminho", marcar como resolvido, reabrir, apagar e atualizar a fila | GET, POST, PUT e DELETE `pedidos` |
| qualquer outra | 404 | Voltar para o início ou para a rede | |

### Roteiro rápido para testar o CRUD

1. Em `/rede/novo`, cadastre um ponto (POST). Ele aparece em `/rede`.
2. Em `/rede`, clique em **Confirmar agora** num ponto (PUT). O cartão passa a mostrar "Com energia, confirmado agora".
3. Abra um ponto, mude o telefone e salve (PUT). Depois use **Apagar este ponto** (DELETE).
4. Em `/pedidos`, abra um pedido com 20 minutos de bateria (POST). Ele entra no topo da fila, em vermelho.
5. Clique em **Estou a caminho** e depois em **Marcar como resolvido** (PUT). Apague com a lixeira (DELETE).
6. Em `/plano`, escolha "Bateria grande" e um bairro e use **Imprimir o plano**.

## Regras de negócio

Ficam em `src/utils`, fora dos componentes.

- **Tempo de bateria:** minutos = energia (Wh) × 0,85 ÷ consumo (W) × 60. O 0,85 é a perda estimada no inversor.
- **Estados da bateria:** Reserva (2 h ou mais), Alerta (menos de 2 h, hora de pedir ajuda) e Crítico (menos de 30 min). São os mesmos limites do aparelho, do programa em Python e do relatório de Matemática.
- **Confirmação do ponto vale por 2 horas.** Depois disso o ponto deixa de contar como "com energia agora" e as tomadas dele saem da soma, até alguém confirmar de novo. Cadastrar e confirmar renovam a confirmação; editar os dados do ponto não renova.
- **Ponto repetido não entra:** mesmo nome no mesmo bairro é recusado no cadastro. O bairro é comparado sem diferença de maiúsculas e de espaços.
- **Validação:** telefone com DDD (10 ou 11 números), tomadas de 0 a 50 e minutos de 0 a 1440, sempre números inteiros, e limite de letras nos textos.
- **A fila anda pelo relógio:** o tempo que resta num pedido é o que a pessoa informou menos o tempo que já passou. Quem tem menos tempo fica em primeiro e, no empate, o pedido mais antigo. Resolvidos vão para o fim.
- **Pedido sem solução há mais de um dia sai da fila** e aparece numa lista à parte, porque o relógio dele já não vale.
- **O pedido não tem campo para doença nem diagnóstico:** só o tipo de ajuda, os minutos de bateria, um resumo, um detalhe e o bairro. O formulário orienta a não contar o motivo.
- **O plano impresso** dá o prazo para pedir ajuda (o tempo até a bateria chegar a duas horas) e lista só os pontos do bairro que estão na rede, com quem empresta bateria em primeiro lugar.
- **A bateria vazia só sai de casa depois que a carregada estiver funcionando no aparelho.**

## Tecnologias

- React 19 com Vite
- Tailwind CSS 4 (plugin `@tailwindcss/vite`)
- React Router 7 (`createBrowserRouter`)
- GSAP, só para as animações
- React Icons (família Phosphor)
- MockAPI como API externa

## Pré-requisitos

- Node.js 20.19 ou mais novo (ou 22.12 em diante)
- npm

## Instalação e execução

```bash
npm install
```

```bash
npm run dev
```

O endereço aparece no terminal (normalmente `http://localhost:5173`).

O endereço da API fica na variável `VITE_API_URL`, no arquivo `.env` na raiz do projeto, sem barra no final:

```
VITE_API_URL=https://SEU-ID.mockapi.io/api/v1
```

Outros comandos:

| Comando | O que faz |
|---|---|
| `npm run build` | Gera a versão final em `dist/` |
| `npm run preview` | Abre a versão final gerada |
| `npm run lint` | Confere o código com o ESLint |
| `npm run api:local` | Liga uma imitação local da MockAPI em `http://localhost:4010`, para desenvolver sem internet |
| `npm run api:semear -- ENDERECO` | Envia os dados de exemplo para a API do endereço informado |

Para usar a API local, crie um arquivo `.env.local` com `VITE_API_URL=http://localhost:4010` e rode `npm run api:local` em outro terminal.

## API

Dois recursos na MockAPI, os dois com criar, consultar, atualizar e excluir.

**`pontos`**

| Campo | Tipo | Exemplo |
|---|---|---|
| `id` | texto (gerado pela API) | `"1"` |
| `nome` | texto | `"Padaria Estrela do Bixiga"` |
| `tipo` | texto | `comercio`, `condominio`, `associacao`, `morador` ou `servico` |
| `bairro` | texto | `"Bela Vista"` |
| `endereco` | texto | `"Rua Treze de Maio, altura do 900"` |
| `telefone` | texto | `"(11) 90000-0001"` |
| `fonte` | texto | `gerador`, `solar`, `nobreak` ou `carro` |
| `descricao` | texto, até 200 letras | |
| `vagas` | número de 0 a 50 | `3` |
| `empresta` | verdadeiro ou falso | tem bateria reserva para emprestar |
| `ativo` | verdadeiro ou falso | o ponto está na rede |
| `atualizadoEm` | data em texto (ISO) | hora da última confirmação |

**`pedidos`**

| Campo | Tipo | Exemplo |
|---|---|---|
| `id` | texto (gerado pela API) | `"1"` |
| `titulo` | texto | `"Preciso de uma bateria carregada"` |
| `bairro` | texto | `"Bela Vista"` |
| `detalhe` | texto, até 200 letras | |
| `ajuda` | texto | `emprestimo`, `recarga` ou `tomada` |
| `minutos` | número de 0 a 1440 | minutos de bateria na hora do pedido |
| `status` | texto | `aberto`, `andamento` ou `resolvido` |
| `criadoEm` | data em texto (ISO) | hora em que o pedido foi aberto |

### Como montar a MockAPI do zero

1. Crie um projeto em [mockapi.io](https://mockapi.io) e, nele, os recursos `pontos` e `pedidos`.
2. No esquema de cada recurso, deixe só o campo `id` e apague os registros gerados automaticamente.
3. Copie o endereço do projeto para o `.env`.
4. Rode `npm run api:semear -- https://SEU-ID.mockapi.io/api/v1` uma vez, para enviar os dados de exemplo.

## Organização das pastas

```
src/
  main.jsx        rotas (createBrowserRouter)
  App.jsx         layout com menu, <Outlet /> e rodapé
  index.css       Tailwind, cores e classes reaproveitadas
  gsap.js         registro dos plugins do GSAP
  pages/          uma página por rota
  components/     componentes de apresentação, sem regra de negócio
  hooks/          custom hooks: estado e lógica separados da tela
  services/       acesso à API (fetch). Só aqui o endereço é conhecido
  utils/          regras de negócio e contas, sem tela e sem API
  data/           textos, opções dos formulários e fotos
mockapi/          dados de exemplo, API local de teste e script de carga
```

## Onde está cada exigência

| Exigência | Onde |
|---|---|
| React com Vite | `package.json`, `vite.config.js` |
| Tailwind CSS | `src/index.css` e as classes em todos os componentes |
| No mínimo 8 componentes reutilizáveis | 31 em `src/components`. Exemplos usados em mais de uma página: `Campo`, `Estado`, `Indicador`, `CabecalhoPagina`, `CartaoResumo`, `ControleDeslizante`, `FormularioPonto` |
| `useState` e `useEffect` | Em todos os hooks de dados, por exemplo `src/hooks/usePontos.js` |
| No mínimo 2 custom hooks | Dados: `usePontos`, `usePonto`, `usePedidos`. Lógica: `useAutonomia`, `useFormularioPonto`, `useFormularioPedido`. Os outros hooks da pasta cuidam das animações |
| Lógica e dados separados da apresentação | `src/services` (API), `src/utils` (regras) e `src/hooks` (estado). Só `src/services/api.js` faz `fetch`. Os componentes recebem os dados por props ou chamam um hook; nenhum fala com a API |
| API externa com CRUD completo | `src/services/api.js` tem GET, POST, PUT e DELETE, usados nos dois recursos |
| Funcionalidades ligadas ao tema | Plano de apagão, rede de pontos e fila pelo tempo de bateria |
| Uso de IA documentado | `AI.md` |

## Deploy

Feito na Vercel. O arquivo `vercel.json` reescreve todas as rotas para `/index.html`, para que um link direto como `/rede/3` abra certo. A variável `VITE_API_URL` também precisa estar cadastrada no projeto da Vercel.

## Acessibilidade e uso no celular

- O site foi conferido em 21 tamanhos de tela, de 320 px (celular pequeno) a 1920 px (monitor), passando por tablet em pé e deitado, notebook de tela baixa (1280 × 600 e 1366 × 625) e celular deitado. Nenhuma página tem rolagem lateral.
- O que gruda no topo ao rolar (os cartões do "Como funciona" e os painéis laterais das páginas internas) só gruda quando cabe inteiro na altura da tela. Para isso o `src/index.css` cria duas variantes de altura, `tela-media:` e `tela-alta:`, porque o Tailwind só traz as de largura (`md:`, `lg:`).
- Texto digitado pelo usuário (nome do ponto, bairro, endereço, pedido) quebra a linha mesmo sem espaços: um nome comprido não sai do cartão nem da tela.
- Quem pede menos movimento no sistema (`prefers-reduced-motion`) vê a página sem as animações de rolagem.
- Formulários com rótulo em cada campo e mensagem de erro por campo. Os estados de carregando, erro e vazio aparecem em toda tela que busca dados.
- A folha do plano tem estilo próprio de impressão e cabe em uma página A4 com até quatro pontos no bairro.

## Fotos

As fotos são do Wikimedia Commons, com licenças livres. O autor, a licença e a página de origem de cada uma estão em `src/data/fotos.js` e aparecem em "Créditos das fotos", no rodapé do site.

## Uso de inteligência artificial

O projeto foi feito com apoio de IA. O arquivo [AI.md](AI.md) conta quais ferramentas foram usadas, com exemplos de pedidos e respostas, onde a IA entrou no código, como o resultado foi conferido e o que deu errado no caminho.
