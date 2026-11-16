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
          {quemFaz.papeis.map((papel) => (
            <li key={papel.titulo} className="js-revelar border-b border-tinta/15">
              <Link
                to={papel.para}
                className="group relative grid gap-5 py-8 md:grid-cols-[6rem_minmax(0,1fr)_auto] md:items-center md:gap-x-8 md:gap-y-3 md:px-5 md:py-10 lg:grid-cols-[6rem_minmax(0,1.5fr)_minmax(0,1fr)_16rem] lg:py-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 rounded-3xl bg-destaque transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className="relative block h-12 w-24 overflow-hidden rounded-full md:row-span-2 lg:row-span-1">
                  <img
                    src={fotos[papel.foto].src}
                    alt=""
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                  />
                </span>
                <span className="titulo relative text-[clamp(1.9rem,2.9vw,2.6rem)] transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {papel.titulo}
                </span>
                <span className="relative text-lg text-tinta/70 transition-colors duration-300 group-hover:text-tinta md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1">
                  {papel.texto}
                </span>
                <span className="botao botao-linha relative justify-self-start whitespace-nowrap group-hover:border-tinta group-hover:bg-tinta group-hover:text-white md:col-start-3 md:row-span-2 md:row-start-1 md:justify-self-end lg:col-start-4 lg:row-span-1">
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
