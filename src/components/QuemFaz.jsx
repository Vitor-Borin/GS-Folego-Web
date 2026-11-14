import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import CabecalhoDeSecao from "./CabecalhoDeSecao"
import { quemFaz } from "../data/conteudo"
import { fotos } from "../data/fotos"

const QuemFaz = () => {
  return (
    <section className="rounded-[2rem] bg-white px-4 py-24 md:rounded-[3rem] md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
        <CabecalhoDeSecao etiqueta={quemFaz.etiqueta} linhas={quemFaz.linhas} />

        <ul className="border-t border-tinta/15">
          {quemFaz.papeis.map((papel, indice) => (
            <li key={papel.titulo} className="js-revelar border-b border-tinta/15">
              <Link
                to={papel.para}
                className="group relative grid gap-5 py-8 md:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)_auto] md:items-center md:gap-8 md:px-5 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 rounded-3xl bg-destaque transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className="dado relative">{`0${indice + 1}`}</span>
                <span className="relative flex items-center justify-between gap-6">
                  <span className="titulo text-[clamp(2rem,4.2vw,4rem)] transition-transform duration-500 ease-out group-hover:translate-x-2">
                    {papel.titulo}
                  </span>
                  <img
                    src={fotos[papel.foto].src}
                    alt=""
                    className="hidden h-24 w-32 shrink-0 rotate-6 scale-0 rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-100 lg:block"
                  />
                </span>
                <span className="relative text-lg text-tinta/70 transition-colors duration-300 group-hover:text-tinta">
                  {papel.texto}
                </span>
                <span className="botao botao-linha relative justify-self-start group-hover:border-tinta group-hover:bg-tinta group-hover:text-white">
                  {papel.acao}
                  <PiArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default QuemFaz
