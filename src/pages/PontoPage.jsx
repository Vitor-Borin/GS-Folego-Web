import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { PiArrowLeft } from "react-icons/pi"
import CabecalhoPagina from "../components/CabecalhoPagina"
import CartaoResumo from "../components/CartaoResumo"
import EditorPonto from "../components/EditorPonto"
import Estado from "../components/Estado"
import Indicador from "../components/Indicador"
import useEntradaDaLista from "../hooks/useEntradaDaLista"
import usePonto from "../hooks/usePonto"
import {
  confirmadoHaPouco,
  minutosEntre,
  rotuloDoTipo,
  situacaoCurta,
  situacaoDoPonto,
  textoDaOferta,
  textoDoTempo,
} from "../utils/regras"

const PontoPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { ponto, carregando, erro, ocupado, aviso, agora, salvarPonto, apagarPonto } = usePonto(id)
  const [querApagar, setQuerApagar] = useState(false)

  useEntradaDaLista(ponto !== null)

  const apagar = () => {
    apagarPonto().then((deuCerto) => {
      if (deuCerto) {
        navigate("/rede")
      }
    })
  }

  return (
    <div className="pagina">
      {carregando && <Estado tipo="carregando" titulo="Buscando o ponto" />}

      {erro && (
        <Estado
          tipo="erro"
          titulo="Esse ponto não foi encontrado"
          texto="Ele pode ter sido apagado, ou a conexão caiu."
        >
          <Link to="/rede" className="botao botao-tinta">
            Voltar para a rede
          </Link>
        </Estado>
      )}

      {ponto !== null && (
        <>
          <CabecalhoPagina
            rotulo={`${rotuloDoTipo(ponto.tipo)} · ${ponto.bairro}`}
            titulo={ponto.nome}
            texto={`${ponto.endereco} · ${ponto.telefone}`}
          >
            <Link to="/rede" className="botao botao-linha">
              <PiArrowLeft size={18} aria-hidden="true" />
              Voltar para a rede
            </Link>
          </CabecalhoPagina>

          <dl className="grid gap-3 md:grid-cols-3">
            <Indicador
              valor={situacaoCurta(ponto, agora)}
              rotulo="Situação"
              destaque={confirmadoHaPouco(ponto, agora)}
            />
            <Indicador
              valor={textoDoTempo(minutosEntre(agora, ponto.atualizadoEm))}
              rotulo="Última confirmação"
            />
            <Indicador valor={ponto.vagas} rotulo="Tomadas livres" />
          </dl>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
            <section className="folha grid gap-8">
              <h2 className="subtitulo text-3xl">Editar ponto</h2>
              <EditorPonto ponto={ponto} ocupado={ocupado} aoSalvar={salvarPonto} />
              {aviso !== "" && (
                <p role="alert" className="aviso">
                  {aviso}
                </p>
              )}
            </section>

            <aside className="grid gap-4 lg:sticky lg:top-28">
              <div className="grid gap-3">
                <p className="dado">Como aparece na rede</p>
                <CartaoResumo
                  rotulo={`${rotuloDoTipo(ponto.tipo)} · ${ponto.bairro}`}
                  nome={ponto.nome}
                  situacao={situacaoDoPonto(ponto, agora)}
                  vagas={textoDaOferta(ponto)}
                  aceso={confirmadoHaPouco(ponto, agora)}
                />
              </div>

              <section className="grid gap-4 rounded-[2rem] border border-perigo/25 p-6">
                <h2 className="subtitulo text-2xl">Apagar ponto</h2>
                <p className="text-tinta/70">
                  O ponto sai da rede e não aparece mais para ninguém. Não dá para desfazer.
                </p>
                <div className="flex flex-wrap gap-2">
                  {!querApagar && (
                    <button type="button" onClick={() => setQuerApagar(true)} className="botao botao-perigo">
                      Apagar este ponto
                    </button>
                  )}
                  {querApagar && (
                    <>
                      <button type="button" disabled={ocupado} onClick={apagar} className="botao botao-perigo">
                        Apagar de vez
                      </button>
                      <button type="button" onClick={() => setQuerApagar(false)} className="botao botao-linha">
                        Cancelar
                      </button>
                    </>
                  )}
                </div>
              </section>
            </aside>
          </div>
        </>
      )}
    </div>
  )
}

export default PontoPage
