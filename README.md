# Fôlego

O plano de apagão do bairro, para quem depende de energia elétrica para respirar.

Global Solution 2026.2 (CitizenTech) · FIAP · Engenharia de Software, 1º ano · Front-end Design e Web Development

## Ficha da CitizenTech

| Item | Resposta |
|---|---|
| Nome da CitizenTech | Fôlego |
| Cidade e bairro | São Paulo, SP. Piloto no Campo Limpo, distrito da zona sul. Em 2024, a região elétrica que atende metade do distrito foi a que mais ficou sem luz entre as 143 da Enel São Paulo (ver "Fontes dos números do Campo Limpo"). Os dados de exemplo usam Parque Arariba, Jardim Iracema e Jardim Rosana, bairros do distrito |
| Cidadão beneficiado | Famílias e cuidadores de pessoas eletrodependentes: quem usa em casa concentrador de oxigênio, ventilador mecânico, aspirador de secreção ou outro aparelho que não pode desligar |
| Problema, em uma frase | Quando a luz cai, quem respira por aparelho tem minutos ou horas de bateria, a energia leva dias para voltar, e a ajuda que está a uma quadra ninguém sabe onde fica |
| Como funciona | Antes do apagão, a família monta e imprime o plano (quanto a bateria dura, quando pedir ajuda, pontos do bairro com telefone). Durante, um aparelho na tomada percebe a queda de luz e conta o tempo, o pedido entra numa fila ordenada pelo tempo de bateria que resta, e uma bateria carregada vai até a casa |
| O que cada parte faz | **Edge Computing:** dispositivo com ESP32 que percebe a queda de luz, conta o tempo e decide sozinho. **Python:** central que simula o apagão e monta a fila. **Matemática:** modelo da bateria descarregando e da cidade voltando a ter luz. **Front-end e Web (este repositório):** o plano, a rede de pontos e a fila de pedidos. **Experiência:** a jornada de quem cuida. **Pitch:** a história em três minutos |
| Link do repositório | https://github.com/Vitor-Borin/GS-Folego-Web |
| Link do deploy | https://gs-folego.vercel.app |
| Indicador de impacto | Famílias com plano pronto, tempo entre o pedido e a chegada da bateria carregada, pontos ativos e baterias reserva por bairro |
| ODS conectados | 3 (saúde e bem-estar), 7 (energia limpa e acessível), 10 (redução das desigualdades), 11 (cidades e comunidades sustentáveis) e 13 (ação contra a mudança global do clima) |

### Equipe

| Nome | RM | Parte |
|---|---|---|
| Vitor Borin | RM573194 | Front-end Design e Web Development |
| Robert Josino | RM571622 | Edge Computing & Computer Systems e Computational Thinking with Python |
| Ryan Maick | RM573051 | Software & Total Experience Design e Differentiated Problem Solving |

## Avisos

- Projeto acadêmico. **Todos os pontos, telefones e pedidos são simulados.** Nenhum dado de paciente foi usado.
- O Fôlego não é aparelho médico e não substitui o SAMU, a distribuidora de energia nem a equipe de saúde. **Em emergência, ligue 192.**
- Os manuais de nobreak comum (APC, TS Shara, Intelbras) avisam que ele não foi feito para equipamento de sustentação da vida nem para motor, e alguns desligam a saída quando a carga é muito baixa. O site calcula o tempo, mas a escolha da fonte reserva de cada aparelho é da equipe de saúde.
- A conta da bateria vale para bateria nova, a 25 °C. Para bateria de chumbo, como a do nobreak, ela já desconta o que a bateria perde quando o aparelho puxa muita potência. Bateria usada dura menos, e no frio também. O número certo de cada aparelho está na etiqueta ou no manual.
- Os valores de exemplo do simulador vêm de manuais e fichas de modelos comuns, listados em "Fontes dos exemplos do simulador".
- O aparelho que percebe a queda de luz (parte de Edge Computing) é um protótipo simulado. No site, quem abre o pedido é a pessoa.
- O projeto não sabe quais aparelhos aceitam ser ligados numa bateria emprestada. Isso se confirma no manual e com a equipe de saúde.

### Fontes dos exemplos do simulador

| Exemplo | Valor | De onde vem |
|---|---|---|
| Concentrador de oxigênio | 290 W | CAIRE VisionAire 5: "290 W (todas as taxas de fluxo)". [Ficha](https://files.caireinc.com/CutSheets-Lit/ML-CONC0082-6.pdf) |
| Concentrador portátil | 62 W | Inogen One G5 no ajuste mais alto (61,5 W). [Ficha](https://cdn.hjm.aws.inera.se/5024f94d-9651-4e0f-9616-3fdd569793e1/29d87cb7-68a9-48d5-8ad7-ca3b83f8a9b0/SE_InogenOne-G5_datasheet_2021-05-01_tcm584-580462.pdf) |
| CPAP | 20 W | ResMed AirSense 10 sem umidificador, no ajuste mais alto (1,66 A em 12 V). [Guia de baterias](https://cdn.shopify.com/s/files/1/2790/7304/files/ResMed_Battery_Guide_Converter.pdf) |
| CPAP com umidificador | 53 W | ResMed AirSense 10: consumo típico de 53 W. [Manual](https://manualslib.mx/manual/850907/Resmed-Airsense10.html?page=21) |
| Ventilador domiciliar | 90 W | ResMed Astral: entrada de 90 W contínuos. [Manual](https://manualslib.mx/manual/213586/Resmed-Astral-Serie.html?page=75) |
| Bomba de dieta | 9 W | Fresenius Kabi Amika: "máximo de 9 W". Valor conferido no manual do fabricante. |
| Nobreak comum | 84 Wh | SMS Station II 600 VA: uma bateria de 12 V e 7 Ah. [Catálogo](https://content.voltimum.com/br/3263/catalogo-23003-station_ii.pdf) |
| Nobreak de 1.200 VA | 120 Wh | SMS Station II 1200 VA: duas baterias de 12 V e 5 Ah (mesmo catálogo). |
| Estação portátil | 512 Wh | EcoFlow RIVER 2 Max. [Página do produto](https://br.ecoflow.com/products/river-2-max-portable-power-station) |
| Bateria de lítio grande | 1.200 Wh | Valor de exemplo do grupo, sem modelo de referência. |

Cada valor é de um modelo específico e serve só de exemplo.

### Fontes da fórmula da bateria

Tabelas de descarga em potência constante usadas para ajustar o expoente da bateria de chumbo:

- Moura, manual técnico da linha VRLA MVA (12MVA-5, 12MVA-7, 12MVA-9 e 12MVA-100): [manual](https://www.moura.com.br/assets/pdf/produtos/estacionarias/vrla/MANUAL_TECNICO_MOURA_VRLA_MVA_V5_18_DEZEMBRO_2024_ANATEL.pdf)
- CSB GP1272 (12 V, 7,2 Ah): [ficha](https://csb-battery.com/wp-content/uploads/2026/03/CSB-Datasheet-GP1272-01312026.pdf)
- Long WP7.2-12 e WP5-12: [ficha de 7,2 Ah](https://baterias.com/fichastecnicas/data-sheet-battery-long-wp7_2-12-72ah-12v-en.pdf) e [ficha de 5 Ah](https://baterias.com/fichastecnicas/data-sheet-battery-long-wp5-12-5ah-12v-en.pdf)
- Ritar RT1270 (12 V, 7 Ah): [ficha](https://images.thdstatic.com/catalog/pdfImages/0b/0bfc2654-b742-47e0-b673-29f251c2342d.pdf)
- Victron Energy, expoente de Peukert padrão de 1,25 para baterias de chumbo: [manual](https://www.victronenergy.com/media/pg/BMV-700/en/battery-capacity-and-peukert-exponent.html)
- Rendimento de 85% do nobreak em modo bateria: catálogo SMS Station II, citado na tabela acima.
- Autonomia publicada pela APC para os nobreaks BZ400, BZ600 e BZ700 (bateria de 12 V e 7 Ah), usada para conferir a fórmula, e os avisos sobre motor e sustentação da vida: [manual](https://ckm-content.se.com/ckmContent/sfc/servlet.shepherd/document/download/0698V00000mKZCnQAO)
- Conta de tempo de uso das estações portáteis de lítio (capacidade × 0,85 ÷ potência), que é a fórmula com k = 1: [EcoFlow](https://www.ecoflow.com/us/blog/battery-run-time-calculator), [Jackery](https://uk.jackery.com/blogs/all/what-is-a-watthour) e [Anker](https://www.ankersolix.com/blogs/portable-power-station/how-long-will-a-power-station-last)

### Fontes dos números do Campo Limpo

O piloto é o Campo Limpo, distrito da zona sul de São Paulo. A Enel divide a área que atende em 143 conjuntos elétricos (no site, "regiões elétricas"), que não seguem o limite dos bairros.

| Dado | Valor | De onde vem |
|---|---|---|
| Conjuntos que cobrem o distrito | Germânia (51% da área), Taboão da Serra (27%) e Embu (22%) | Cruzamento feito pelo grupo entre o contorno do distrito (OpenStreetMap) e o [mapa de conjuntos da ANEEL](https://sigel.aneel.gov.br/arcgis/rest/services/SRD/Conjuntos/MapServer), base de 31/12/2020 |
| Horas sem luz por imóvel em 2024, conjunto Germânia | 66,81 h, o maior valor entre os 143 conjuntos | Enel São Paulo, [Informe de Indicadores (RN ANEEL 1.137)](https://www.enel.com.br/content/dam/enel-br/para_voce/dec_fec/2026/02fevereiro/Informe%20Indicadores%20Aneel%20-%20RN%201137%20SP.pdf), fevereiro de 2026, tabela "Histórico 12 meses - Sem aplicação de expurgos" (DEC) |
| Mediana dos 143 conjuntos em 2024 | 17,48 h | Conta do grupo sobre o mesmo informe |
| Conjunto Brigadeiro (34% da área da Bela Vista) em 2024 | 7,70 h | Mesmo informe |
| Soma de 2023, 2024 e 2025, conjunto Germânia | 129,26 h (mediana: 55,5 h) | Mesmo informe |
| Quedas de luz em 2024, conjunto Germânia | 7,68 (mediana: 4,99) | Mesmo informe (FEC) |
| Protesto na Estrada do Campo Limpo, em 15/10/2024 | Moradores sem luz desde 11/10 | [Diário do Transporte](https://diariodotransporte.com.br/2024/10/15/video-estrada-do-campo-limpo-na-zona-sul-de-sao-paulo-volta-a-ser-fechada-em-protesto-contra-a-enel-na-noite-desta-terca-15/) |

As horas são a média por imóvel na soma do ano, não a duração de um apagão só. O conjunto Germânia cobre metade do Campo Limpo e também parte do Capão Redondo, por isso o site fala em "região que atende metade do Campo Limpo".

## O que a aplicação faz

| Rota | Página | O que dá para fazer | API |
|---|---|---|---|
| `/` | Início | Conta o problema, mostra os números do Campo Limpo e os quatro passos, tem o simulador de bateria e os três pontos mais recentes da rede | GET `pontos` |
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
6. Em `/plano`, escolha "Bateria de lítio grande" e um bairro e use **Imprimir o plano**.

## Regras de negócio

Ficam em `src/utils`, fora dos componentes.

- **Tempo de bateria:** horas = 20 × (energia × 0,85 ÷ (consumo × 20)) elevado a k, e minutos = horas × 60, arredondado. O 0,85 é o rendimento do inversor e 20 são as horas do regime em que a capacidade da bateria é medida. O expoente k é 1,3 para bateria de chumbo (nobreak) e 1 para bateria de lítio (estação portátil). Com k = 1 a conta vira energia × 0,85 ÷ consumo.
- **Por que o expoente:** bateria de chumbo entrega menos energia quanto mais rápido é descarregada (lei de Peukert). O 1,3 foi ajustado com as tabelas de descarga de dez fichas de fabricantes (lista em "Fontes da fórmula da bateria"): de 15 minutos para cima, a conta nunca passa do que as fichas dizem.
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

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env` a partir do `.env.example`, que já traz o endereço da API do projeto:

```bash
cp .env.example .env
```

No Prompt de Comando do Windows, o comando é `copy .env.example .env`.

3. Rode o projeto:

```bash
npm run dev
```

O endereço aparece no terminal (normalmente `http://localhost:5173`).

O endereço da API fica na variável `VITE_API_URL`, sem barra no final. O `.env` fica com esta linha:

```
VITE_API_URL=https://6afc4e51892984c4494b5bd9.mockapi.io/api/v1
```

Sem o `.env`, o site abre, mas a rede e os pedidos não carregam.

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
| `nome` | texto | `"Padaria Estrela do Arariba"` |
| `tipo` | texto | `comercio`, `condominio`, `associacao`, `morador` ou `servico` |
| `bairro` | texto | `"Parque Arariba"` |
| `endereco` | texto | `"Rua Francisco Soares, portaria principal"` |
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
| `bairro` | texto | `"Parque Arariba"` |
| `detalhe` | texto, até 200 letras | |
| `ajuda` | texto | `emprestimo`, `recarga` ou `tomada` |
| `minutos` | número de 0 a 1440 | minutos de bateria na hora do pedido |
| `status` | texto | `aberto`, `andamento` ou `resolvido` |
| `criadoEm` | data em texto (ISO) | hora em que o pedido foi aberto |

### Como montar a MockAPI do zero

1. Crie um projeto em [mockapi.io](https://mockapi.io) e, nele, os recursos `pontos` e `pedidos`.
2. No esquema de cada recurso, deixe só o campo `id` e apague os registros gerados automaticamente.
3. Troque o endereço do `.env` pelo do projeto novo.
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
| No mínimo 8 componentes reutilizáveis | 34 em `src/components`. Exemplos usados em mais de uma página: `Campo`, `Estado`, `Indicador`, `CabecalhoPagina`, `CartaoResumo`, `ControleDeslizante`, `FormularioPonto` |
| `useState` e `useEffect` | Em todos os hooks de dados, por exemplo `src/hooks/usePontos.js` |
| No mínimo 2 custom hooks | Dados: `usePontos`, `usePonto`, `usePedidos`. Lógica: `useAutonomia`, `useFormularioPonto`, `useFormularioPedido`. Os outros hooks da pasta cuidam das animações |
| Lógica e dados separados da apresentação | `src/services` (API), `src/utils` (regras) e `src/hooks` (estado). Só `src/services/api.js` faz `fetch`. Os componentes recebem os dados por props ou chamam um hook; nenhum fala com a API |
| API externa com CRUD completo | `src/services/api.js` tem GET, POST, PUT e DELETE, usados nos dois recursos |
| Funcionalidades ligadas ao tema | Plano de apagão, rede de pontos e fila pelo tempo de bateria |
| Uso de IA documentado | `AI.md` |

## Deploy

Feito na Vercel: https://gs-folego.vercel.app

O arquivo `vercel.json` reescreve todas as rotas para `/index.html`, para que um link direto como `/rede/3` abra certo. A variável `VITE_API_URL` está cadastrada no projeto da Vercel, porque o `.env` não vai para o repositório.

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
