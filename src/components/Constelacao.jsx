import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import { projeto } from "../data/conteudo"
import { fotos } from "../data/fotos"
import useConstelacao from "../hooks/useConstelacao"
import { montarConstelacao } from "../utils/desenho"

const estrelas = montarConstelacao(fotos)

const Constelacao = ({ resumo, temEnergia, carregando, erro }) => {
  useConstelacao(estrelas)

  return (
    <section className="js-ceu relative z-0 h-[200svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          {estrelas.map((estrela) => (
            <div
              key={estrela.id}
              className="js-foto absolute left-[var(--x-celular)] top-[var(--y-celular)] -translate-x-1/2 -translate-y-1/2 md:left-[var(--x)] md:top-[var(--y)]"
              style={{
                "--x": `${estrela.esquerda}%`,
                "--y": `${estrela.topo}%`,
                "--x-celular": `${estrela.esquerdaNoCelular}%`,
                "--y-celular": `${estrela.topoNoCelular}%`,
                width: `max(${estrela.largura}vw, ${estrela.larguraMinima}px)`,
                opacity: estrela.opacidade,
                zIndex: Math.round(estrela.profundidade * 10),
              }}
            >
              <div className="js-foto-paralaxe">
                <img src={estrela.src} alt="" className="js-foto-imagem block w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>

        <div className="js-ceu-conteudo relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <p
            role="status"
            className="js-ceu-apoio mb-7 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm"
          >
            <span
              aria-hidden="true"
              className={`block size-2 rounded-full ${temEnergia ? "bg-destaque" : "bg-tinta/25"}`}
            />
            {carregando && "Lendo a rede"}
            {erro && "Rede fora do ar"}
            {!carregando && !erro && resumo}
          </p>

          <h1 className="titulo text-[clamp(2.4rem,5.4vw,5.25rem)]">
            {projeto.linhasDoTitulo.map((linha) => (
              <span key={linha} className="block overflow-hidden pb-[0.12em]">
                <span className="js-ceu-linha block">{linha}</span>
              </span>
            ))}
          </h1>

          <p className="js-ceu-apoio mt-6 max-w-md text-lg text-tinta/70">{projeto.apoio}</p>

          <div className="js-ceu-apoio mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/plano" className="botao botao-tinta">
              Montar meu plano
              <PiArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/rede/novo" className="botao botao-claro">
              Cadastrar um ponto de energia
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Constelacao
