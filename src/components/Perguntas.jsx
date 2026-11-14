import { useState } from "react"
import { PiMinus, PiPlus } from "react-icons/pi"
import { perguntas } from "../data/conteudo"

const Perguntas = () => {
  const [aberta, setAberta] = useState(0)

  return (
    <section className="px-4 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
        <div className="js-revelar grid content-start justify-items-start gap-5 lg:sticky lg:top-28 lg:self-start">
          <p className="etiqueta">{perguntas.etiqueta}</p>
          <h2 className="titulo text-[clamp(2.2rem,3.5vw,3.5rem)]">
            {perguntas.linhas.map((linha) => (
              <span key={linha} className="lg:block">
                {`${linha} `}
              </span>
            ))}
          </h2>
        </div>

        <ul className="border-t border-tinta/15">
          {perguntas.itens.map((item, indice) => (
            <li key={item.pergunta} className="js-revelar border-b border-tinta/15">
              <h3>
                <button
                  type="button"
                  aria-expanded={aberta === indice}
                  aria-controls={`resposta-${indice}`}
                  onClick={() => setAberta(aberta === indice ? -1 : indice)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-xl font-medium md:text-2xl"
                >
                  {item.pergunta}
                  <span
                    aria-hidden="true"
                    className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                      aberta === indice ? "bg-destaque" : "bg-white"
                    }`}
                  >
                    {aberta === indice ? <PiMinus size={18} /> : <PiPlus size={18} />}
                  </span>
                </button>
              </h3>

              <div
                id={`resposta-${indice}`}
                aria-hidden={aberta !== indice}
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  aberta === indice ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-prose pb-7 text-lg text-tinta/70">{item.resposta}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Perguntas
