import { Link } from "react-router"
import { projeto } from "../data/conteudo"
import useAnimacaoHero from "../hooks/useAnimacaoHero"

const Hero = ({ totalDePontos, carregando, erro }) => {
  useAnimacaoHero()

  return (
    <section className="js-hero relative flex min-h-svh flex-col justify-between overflow-hidden bg-tinta px-4 pb-8 pt-28 text-papel md:px-8 md:pb-10 md:pt-32">
      <div className="js-hero-apoio flex flex-wrap justify-between gap-x-10 gap-y-2 border-t border-papel/25 pt-3">
        <p className="dado">{projeto.cidade}</p>
        <p className="dado">{projeto.edicao}</p>
        <p className="dado" role="status">
          {carregando && "Lendo a rede"}
          {erro && "Rede fora do ar"}
          {!carregando && !erro && `${totalDePontos} pontos na rede agora`}
        </p>
      </div>

      <h1 className="js-hero-titulo titulo my-10 text-[clamp(3.75rem,17.5vw,18rem)]">
        {projeto.linhasDoTitulo.map((linha, indice) => (
          <span
            key={linha}
            className={`js-hero-linha block whitespace-nowrap ${indice % 2 === 1 ? "md:text-right" : ""}`}
          >
            {linha}
          </span>
        ))}
      </h1>

      <div className="js-hero-apoio grid gap-6 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:justify-between">
        <p className="text-lg leading-relaxed text-papel/80 md:text-xl">{projeto.promessa}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/rede" className="botao botao-destaque">
            Abrir a rede
          </Link>
          <a href="#como-funciona" className="botao border border-papel/40 hover:bg-papel hover:text-tinta">
            Como funciona
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
