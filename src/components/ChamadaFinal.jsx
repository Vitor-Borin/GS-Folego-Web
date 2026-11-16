import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import { chamada } from "../data/conteudo"

const ChamadaFinal = () => {
  return (
    <section className="px-2 pb-2 md:px-5 md:pb-5">
      <div className="mx-auto grid max-w-[96rem] justify-items-center gap-10 rounded-[2rem] bg-destaque px-5 py-24 text-center md:rounded-[3rem] md:py-40">
        <h2 className="js-revelar titulo max-w-5xl text-balance text-[clamp(2.4rem,6vw,6rem)]">
          {chamada.linhas.map((linha) => (
            <span key={linha} className="md:block">
              {`${linha} `}
            </span>
          ))}
        </h2>
        <div className="js-revelar flex flex-wrap justify-center gap-3">
          <Link to="/rede/novo" className="botao botao-tinta">
            Cadastrar um ponto de energia
            <PiArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/plano" className="botao botao-claro">
            Montar meu plano
          </Link>
        </div>
        <p className="js-revelar text-sm font-medium">{chamada.aviso}</p>
      </div>
    </section>
  )
}

export default ChamadaFinal
