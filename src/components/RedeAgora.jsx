import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import CartaoResumo from "./CartaoResumo"
import Estado from "./Estado"
import { rede } from "../data/conteudo"
import { confirmadoHaPouco, ordenarPontos, rotuloDoTipo, situacaoDoPonto, textoDaOferta } from "../utils/regras"

const inclinacoes = ["md:-rotate-2", "md:translate-y-6 md:rotate-1", "md:-rotate-1"]

const RedeAgora = ({ pontos, carregando, erro, agora }) => {
  const recentes = ordenarPontos(pontos, agora).filter((ponto, indice) => indice < 3)

  return (
    <section className="bg-papel px-4 pb-28 pt-24 md:px-10 md:pb-40 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-14">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="grid gap-5">
            <h2 className="titulo text-[clamp(2.4rem,5.4vw,5.25rem)]">{rede.titulo}</h2>
            <p className="max-w-lg text-lg text-tinta/70">{rede.texto}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/rede" className="botao botao-tinta">
              Ver todos os pontos
              <PiArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/pedidos" className="botao botao-linha">
              Abrir um pedido
            </Link>
          </div>
        </div>

        {carregando && <Estado tipo="carregando" titulo="Lendo a rede" />}

        {erro && (
          <Estado
            tipo="erro"
            titulo="A rede não respondeu"
            texto="Os pontos aparecem aqui assim que a conexão voltar."
          />
        )}

        {!carregando && !erro && recentes.length === 0 && (
          <Estado tipo="vazio" titulo="Nenhum ponto cadastrado ainda" />
        )}

        {!carregando && !erro && recentes.length > 0 && (
          <ul className="grid gap-5 md:grid-cols-3">
            {recentes.map((ponto, indice) => (
              <li key={ponto.id} className={`transition-transform duration-300 hover:rotate-0 ${inclinacoes[indice]}`}>
                <Link to={`/rede/${ponto.id}`} className="block rounded-2xl">
                  <CartaoResumo
                    rotulo={`${rotuloDoTipo(ponto.tipo)} · ${ponto.bairro}`}
                    nome={ponto.nome}
                    situacao={situacaoDoPonto(ponto, agora)}
                    vagas={textoDaOferta(ponto)}
                    aceso={confirmadoHaPouco(ponto, agora)}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default RedeAgora
