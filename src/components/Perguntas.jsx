import { useState } from "react"
import { PiArrowLeft, PiArrowRight } from "react-icons/pi"
import { perguntas } from "../data/conteudo"
import useTroca from "../hooks/useTroca"

const Perguntas = () => {
  const [escolhida, setEscolhida] = useState(0)
  const total = perguntas.itens.length
  const item = perguntas.itens[escolhida]
  const proxima = (escolhida + 1) % total
  const anterior = (escolhida + total - 1) % total

  useTroca(".js-resposta", escolhida)

  return (
    <section className="px-4 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="grid content-between gap-10">
          <header className="js-revelar grid justify-items-start gap-5">
            <p className="etiqueta">{perguntas.etiqueta}</p>
            <h2 className="titulo text-balance text-[clamp(2.2rem,4.4vw,4.2rem)]">
              {perguntas.linhas.map((linha) => (
                <span key={linha} className="lg:block">
                  {`${linha} `}
                </span>
              ))}
            </h2>
          </header>

          <ul className="js-revelar flex flex-wrap gap-2 md:gap-2.5">
            {perguntas.itens.map((pergunta, indice) => (
              <li key={pergunta.curta}>
                <button
                  type="button"
                  aria-pressed={escolhida === indice}
                  onClick={() => setEscolhida(indice)}
                  className={`min-h-11 cursor-pointer rounded-full px-4 py-2.5 text-left transition-colors duration-200 md:px-5 md:py-3 md:text-lg ${
                    escolhida === indice ? "bg-destaque font-medium" : "bg-white hover:bg-tinta hover:text-white"
                  }`}
                >
                  {pergunta.curta}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="js-revelar grid content-between gap-10 rounded-[2rem] bg-tinta p-6 text-white md:p-12 lg:min-h-[34rem]">
          <div aria-live="polite" className="grid gap-5 md:gap-6">
            <p className="js-resposta text-sm text-white/60">
              Pergunta {escolhida + 1} de {total}
            </p>
            <h3 className="js-resposta subtitulo text-xl text-destaque md:text-2xl">{item.pergunta}</h3>
            <p
              className={`js-resposta subtitulo leading-[1.25] ${
                item.resposta.length > 260 ? "text-xl md:text-2xl" : "text-2xl md:text-[2rem]"
              }`}
            >
              {item.resposta}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-white/60">A seguir: {perguntas.itens[proxima].curta}</p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Pergunta anterior"
                onClick={() => setEscolhida(anterior)}
                className="grid size-12 cursor-pointer place-items-center rounded-full border border-white/25 transition-colors duration-200 hover:border-white"
              >
                <PiArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Próxima pergunta"
                onClick={() => setEscolhida(proxima)}
                className="grid size-12 cursor-pointer place-items-center rounded-full bg-destaque text-tinta transition-colors duration-200 hover:bg-white"
              >
                <PiArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Perguntas
