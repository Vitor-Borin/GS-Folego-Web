import { Link } from "react-router"
import Estado from "./Estado"
import { titulos } from "../data/conteudo"
import { confirmadoHaPouco, minutosEntre, ordenarPontos, rotuloDoTipo, textoDoTempo } from "../utils/regras"

const ChamadaRede = ({ pontos, carregando, erro, agora }) => {
  const recentes = ordenarPontos(pontos, agora).filter((ponto, indice) => indice < 3)

  return (
    <section className="bg-tinta px-4 py-24 text-papel md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
        <div className="grid content-between gap-10">
          <h2 className="titulo text-[clamp(2.75rem,8.5vw,8.5rem)]">{titulos.rede}</h2>
          <div className="grid justify-items-start gap-6">
            <p className="max-w-md text-lg text-papel/80">{titulos.textoDaRede}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/rede" className="botao botao-destaque">
                Ver todos os pontos
              </Link>
              <Link to="/pedidos" className="botao border border-papel/40 hover:bg-papel hover:text-tinta">
                Abrir um pedido
              </Link>
            </div>
          </div>
        </div>

        <div className="grid content-start">
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
            <ul className="border-t border-papel/25">
              {recentes.map((ponto) => (
                <li key={ponto.id} className="border-b border-papel/25">
                  <Link
                    to={`/rede/${ponto.id}`}
                    className="grid gap-1 py-5 transition-colors duration-200 hover:text-destaque"
                  >
                    <span className="dado text-papel/60">
                      {rotuloDoTipo(ponto.tipo)} · {ponto.bairro}
                    </span>
                    <span className="subtitulo text-2xl md:text-3xl">{ponto.nome}</span>
                    <span className="text-papel/70">
                      {confirmadoHaPouco(ponto, agora) ? "Confirmado" : "Última confirmação"}{" "}
                      {textoDoTempo(minutosEntre(agora, ponto.atualizadoEm))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default ChamadaRede
