import { useState } from "react"
import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import PapelVisual from "./PapelVisual"
import { quemFaz } from "../data/conteudo"
import useTroca from "../hooks/useTroca"

const QuemFaz = () => {
  const [escolhido, setEscolhido] = useState(0)
  const papel = quemFaz.papeis[escolhido]

  useTroca(".js-papel", escolhido)

  return (
    <section className="rounded-[2rem] bg-white px-4 py-24 md:rounded-[3rem] md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 md:gap-12">
        <header className="js-revelar grid justify-items-center gap-5 text-center">
          <p className="etiqueta">{quemFaz.etiqueta}</p>
          <h2 className="titulo text-balance text-[clamp(2.4rem,5.4vw,5.25rem)]">{quemFaz.titulo}</h2>
        </header>

        <ul className="js-revelar flex flex-wrap justify-center gap-2 md:gap-3">
          {quemFaz.papeis.map((item, indice) => (
            <li key={item.rotulo}>
              <button
                type="button"
                aria-pressed={escolhido === indice}
                onClick={() => setEscolhido(indice)}
                className={`min-h-12 cursor-pointer rounded-full border px-5 py-3 text-lg font-medium transition-colors duration-200 md:px-7 md:py-4 md:text-xl ${
                  escolhido === indice ? "border-tinta bg-tinta text-white" : "border-tinta/25 hover:border-tinta"
                }`}
              >
                {item.rotulo}
              </button>
            </li>
          ))}
        </ul>

        <div
          aria-live="polite"
          className="js-revelar grid gap-10 rounded-[2rem] bg-papel p-6 md:p-12 lg:min-h-[26rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-12"
        >
          <div className="grid justify-items-start gap-6 md:gap-7">
            <p className="js-papel dado">{papel.titulo}</p>
            <p className="js-papel titulo text-balance text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">{papel.texto}</p>
            <Link to={papel.para} className="js-papel botao botao-tinta">
              {papel.acao}
              <PiArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="js-papel">
            <PapelVisual tipo={papel.visual} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemFaz
