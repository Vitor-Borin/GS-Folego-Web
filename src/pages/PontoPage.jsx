import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import CabecalhoPagina from "../components/CabecalhoPagina"
import EditorPonto from "../components/EditorPonto"
import Estado from "../components/Estado"
import usePonto from "../hooks/usePonto"
import { confirmadoHaPouco, minutosEntre, rotuloDoTipo, textoDoTempo } from "../utils/regras"

const PontoPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { ponto, carregando, erro, ocupado, aviso, agora, salvarPonto, apagarPonto } = usePonto(id)
  const [querApagar, setQuerApagar] = useState(false)

  const apagar = () => {
    apagarPonto().then((deuCerto) => {
      if (deuCerto) {
        navigate("/rede")
      }
    })
  }

  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
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
          <CabecalhoPagina rotulo={`${rotuloDoTipo(ponto.tipo)} · ${ponto.bairro}`} titulo={ponto.nome}>
            <Link to="/rede" className="botao botao-linha">
              Voltar para a rede
            </Link>
          </CabecalhoPagina>

          <dl className="grid gap-x-10 gap-y-4 border-b border-tinta/15 py-8 md:grid-cols-3">
            <div className="grid gap-1">
              <dt className="dado text-tinta/60">Situação</dt>
              <dd className="font-semibold">
                {!ponto.ativo && "Fora da rede no momento"}
                {ponto.ativo && confirmadoHaPouco(ponto, agora) && "Confirmado há pouco"}
                {ponto.ativo && !confirmadoHaPouco(ponto, agora) && "Aguardando confirmação"}
              </dd>
            </div>
            <div className="grid gap-1">
              <dt className="dado text-tinta/60">Última atualização</dt>
              <dd className="font-semibold">{textoDoTempo(minutosEntre(agora, ponto.atualizadoEm))}</dd>
            </div>
            <div className="grid gap-1">
              <dt className="dado text-tinta/60">Tomadas livres</dt>
              <dd className="font-semibold">{ponto.vagas}</dd>
            </div>
          </dl>

          <section className="grid gap-6 pt-10">
            <h2 className="subtitulo text-3xl">Editar ponto</h2>
            <EditorPonto ponto={ponto} ocupado={ocupado} aoSalvar={salvarPonto} />
            {aviso !== "" && (
              <p role="alert" className="font-semibold text-perigo">
                {aviso}
              </p>
            )}
          </section>

          <section className="mt-14 grid gap-4 border-t border-tinta pt-8">
            <h2 className="subtitulo text-3xl">Apagar ponto</h2>
            <p className="max-w-prose text-tinta/70">
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
        </>
      )}
    </div>
  )
}

export default PontoPage
