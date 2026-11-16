import Marca from "./Marca"
import { plano, projeto } from "../data/conteudo"
import { folgaParaPedir, textoDaDuracao } from "../utils/autonomia"
import { rotuloDaFonte, rotuloDoEstado, rotuloDoTipo } from "../utils/regras"

const coresDoEstado = {
  reserva: "bg-calma text-white",
  alerta: "bg-destaque text-tinta",
  critico: "bg-perigo text-white",
}

const FolhaDoPlano = ({ energia, consumo, minutos, estado, bairro, pontos, redeVazia }) => {
  const folga = folgaParaPedir(minutos)

  return (
    <article className="folha grid gap-8 [print-color-adjust:exact] print:gap-3 print:rounded-none print:p-0">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-tinta/10 pb-6 print:pb-3">
        <p className="flex items-center gap-2 text-xl font-medium">
          <Marca />
          Plano de apagão
        </p>
        <p className="dado">
          {projeto.nome} · {bairro === "" ? "bairro a escolher" : bairro}
        </p>
      </header>

      <section className="grid gap-3 md:grid-cols-2 print:grid-cols-2">
        <div
          className={`grid content-between gap-6 rounded-3xl p-6 transition-colors duration-500 print:gap-3 print:p-4 ${coresDoEstado[estado]}`}
        >
          <p className="flex items-center justify-between gap-3 text-sm font-medium">
            <span>A bateria dura cerca de</span>
            <span className="rounded-full bg-white px-3 py-1 text-tinta">{rotuloDoEstado(estado)}</span>
          </p>
          <p className="titulo text-6xl tabular-nums md:text-7xl lg:text-5xl xl:text-7xl print:text-4xl">
            {textoDaDuracao(minutos)}
          </p>
        </div>

        <div className="grid content-between gap-6 rounded-3xl bg-papel p-6 print:gap-2 print:p-4">
          <p className="text-sm font-medium">{folga > 0 ? "Peça ajuda em até" : "Peça ajuda"}</p>
          <p className="titulo text-4xl md:text-5xl print:text-3xl">{folga > 0 ? textoDaDuracao(folga) : "na hora"}</p>
          <p className="text-sm text-tinta/70">
            {folga > 0
              ? "Contando da queda de luz: é quando a bateria chega a duas horas. Se puder, peça antes."
              : "A conta dá duas horas de bateria ou menos. Peça assim que a luz cair."}
          </p>
        </div>

        <p className="dado md:col-span-2 print:col-span-2">
          Conta feita com bateria de {energia.toLocaleString("pt-BR")} Wh e aparelho de {consumo} W. É uma
          estimativa: bateria usada dura menos.
        </p>
      </section>

      <section className="grid gap-4 print:gap-3">
        <h2 className="subtitulo text-2xl">Quando a luz cair</h2>
        <ol className="grid gap-3 print:gap-1.5">
          {plano.passos.map((passo, indice) => (
            <li key={passo} className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3">
              <span className="grid size-8 place-items-center rounded-full bg-tinta text-sm font-medium text-white">
                {indice + 1}
              </span>
              <span className="pt-1">{passo}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 print:order-last print:gap-2">
        <h2 className="subtitulo text-2xl">
          {bairro === "" ? "Pontos de energia do bairro" : `Pontos de energia em ${bairro}`}
        </h2>

        {bairro === "" && (
          <p className="rounded-2xl bg-papel p-5 text-tinta/70">
            {redeVazia
              ? "Ainda não há ponto cadastrado na rede."
              : "Escolha o bairro para ver os pontos e os telefones."}
          </p>
        )}

        {bairro !== "" && pontos.length === 0 && (
          <p className="rounded-2xl bg-papel p-5 text-tinta/70">Nenhum ponto desse bairro está na rede agora.</p>
        )}

        {pontos.length > 0 && (
          <ul className="grid gap-3 print:gap-2">
            {pontos.map((ponto) => (
              <li
                key={ponto.id}
                className="grid gap-3 rounded-2xl bg-papel p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center print:break-inside-avoid print:grid-cols-[minmax(0,1fr)_auto] print:items-center print:px-4 print:py-2"
              >
                <span className="grid gap-1">
                  <span className="text-lg font-medium">{ponto.nome}</span>
                  <span className="text-tinta/70">{ponto.endereco}</span>
                  <span className="dado">
                    {rotuloDoTipo(ponto.tipo)} · {rotuloDaFonte(ponto.fonte)}
                    {ponto.empresta ? " · empresta bateria" : ""}
                  </span>
                </span>
                <span className="titulo text-2xl tabular-nums">{ponto.telefone}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer className="grid gap-2 border-t border-tinta/10 pt-6 text-sm print:break-inside-avoid print:pt-3">
        <p className="font-medium">{plano.emergencia}</p>
        <p className="text-tinta/70">{plano.aviso}</p>
      </footer>
    </article>
  )
}

export default FolhaDoPlano
