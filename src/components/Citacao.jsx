import { citacao } from "../data/conteudo"
import useMarcaTexto from "../hooks/useMarcaTexto"

const Citacao = () => {
  useMarcaTexto()

  return (
    <section className="rounded-b-[2rem] bg-white px-4 py-24 md:rounded-b-[3rem] md:px-10 md:py-40">
      <figure className="mx-auto grid max-w-5xl justify-items-center gap-8 text-center">
        <blockquote className="js-revelar titulo text-balance text-[clamp(2.3rem,6.2vw,6rem)]">
          <p>
            “{citacao.inicio}{" "}
            <span className="js-marca-texto box-decoration-clone bg-linear-to-r from-destaque to-destaque bg-size-[0%_40%] bg-position-[0_88%] bg-no-repeat">
              {citacao.destaque}
            </span>
            ”
          </p>
        </blockquote>
        <figcaption className="js-revelar dado">
          {citacao.autoria} · {citacao.fonte}
        </figcaption>
        <p className="js-revelar max-w-xl text-xl md:text-2xl">{citacao.fecho}</p>
      </figure>
    </section>
  )
}

export default Citacao
