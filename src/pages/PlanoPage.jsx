import { useState } from "react"
import { Link } from "react-router"
import { PiPrinter } from "react-icons/pi"
import CabecalhoPagina from "../components/CabecalhoPagina"
import Campo from "../components/Campo"
import ControleDeslizante from "../components/ControleDeslizante"
import FolhaDoPlano from "../components/FolhaDoPlano"
import { plano } from "../data/conteudo"
import { aparelhosDeExemplo, bateriasDeExemplo } from "../data/opcoes"
import useAutonomia from "../hooks/useAutonomia"
import usePontos from "../hooks/usePontos"
import { listarBairros, pontosDoBairro } from "../utils/regras"

const PlanoPage = () => {
  const { pontos, carregando, erro } = usePontos()
  const { energia, setEnergia, consumo, setConsumo, minutos, estado } = useAutonomia()
  const [bairro, setBairro] = useState("")

  const bairros = listarBairros(pontos).map((nome) => {
    return { valor: nome, rotulo: nome }
  })

  return (
    <div className="pagina print:block print:p-0">
      <div className="print:hidden">
        <CabecalhoPagina rotulo={plano.rotulo} titulo={plano.titulo} texto={plano.texto}>
          <button type="button" onClick={() => window.print()} className="botao botao-tinta">
            <PiPrinter size={18} aria-hidden="true" />
            Imprimir o plano
          </button>
        </CabecalhoPagina>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start print:block">
        <section className="folha grid gap-8 md:p-8 lg:sticky lg:top-28 print:hidden">
          <div className="grid gap-8">
            <h2 className="subtitulo text-2xl">1. A sua bateria</h2>
            <ControleDeslizante
              id="plano-energia"
              rotulo="Bateria"
              valor={energia}
              unidade="Wh"
              minimo={20}
              maximo={2000}
              passo={4}
              aoMudar={setEnergia}
              exemplos={bateriasDeExemplo}
            />
            <ControleDeslizante
              id="plano-consumo"
              rotulo="Consumo do aparelho"
              valor={consumo}
              unidade="W"
              minimo={20}
              maximo={600}
              passo={10}
              aoMudar={setConsumo}
              exemplos={aparelhosDeExemplo}
            />
          </div>

          <div className="grid gap-4 border-t border-tinta/10 pt-8">
            <h2 className="subtitulo text-2xl">2. O seu bairro</h2>

            {carregando && <p className="dado">Buscando os bairros da rede</p>}

            {erro && (
              <p role="alert" className="aviso">
                Não deu para carregar os pontos. Confira a conexão e recarregue a página.
              </p>
            )}

            {!carregando && !erro && bairros.length === 0 && (
              <div className="grid justify-items-start gap-4">
                <p className="text-tinta/70">
                  Ainda não há ponto cadastrado na rede. O plano já mostra a conta da bateria, e os telefones aparecem
                  quando o primeiro ponto entrar.
                </p>
                <Link to="/rede/novo" className="botao botao-linha">
                  Cadastrar um ponto
                </Link>
              </div>
            )}

            {!carregando && !erro && bairros.length > 0 && (
              <Campo
                id="plano-bairro"
                rotulo="Bairro"
                tipo="lista"
                opcoes={bairros}
                valor={bairro}
                aoMudar={setBairro}
                dica="Aparecem os bairros que já têm ponto cadastrado."
              />
            )}
          </div>
        </section>

        <FolhaDoPlano
          minutos={minutos}
          estado={estado}
          bairro={bairro}
          pontos={pontosDoBairro(pontos, bairro)}
          redeVazia={!carregando && !erro && pontos.length === 0}
        />
      </div>
    </div>
  )
}

export default PlanoPage
