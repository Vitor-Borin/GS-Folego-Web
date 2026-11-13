import { useState } from "react"
import { Link } from "react-router"
import CabecalhoPagina from "../components/CabecalhoPagina"
import Estado from "../components/Estado"
import FiltroPontos from "../components/FiltroPontos"
import ListaPontos from "../components/ListaPontos"
import usePontos from "../hooks/usePontos"
import useListaAnimada, { esquecerPosicoes, guardarPosicoes } from "../hooks/useListaAnimada"
import { contarConfirmados, filtrarPontos, ordenarPontos, somarVagas } from "../utils/regras"

const RedePage = () => {
  const { pontos, carregando, erro, ocupado, aviso, agora, confirmarPonto, apagarPonto } = usePontos()
  const [busca, setBusca] = useState("")
  const [tipo, setTipo] = useState("todos")

  const pontosVisiveis = ordenarPontos(filtrarPontos(pontos, busca, tipo), agora)
  const assinatura = pontosVisiveis.map((ponto) => ponto.id).join(",")

  useListaAnimada(assinatura)

  const aoBuscar = (texto) => {
    guardarPosicoes()
    setBusca(texto)
  }

  const aoEscolherTipo = (valor) => {
    guardarPosicoes()
    setTipo(valor)
  }

  const aoConfirmar = (ponto) => {
    guardarPosicoes()
    confirmarPonto(ponto).then((deuCerto) => {
      if (!deuCerto) {
        esquecerPosicoes()
      }
    })
  }

  const aoApagar = (id) => {
    guardarPosicoes()
    apagarPonto(id).then((deuCerto) => {
      if (!deuCerto) {
        esquecerPosicoes()
      }
    })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
      <CabecalhoPagina rotulo="Rede do bairro" titulo="Pontos">
        <Link to="/rede/novo" className="botao botao-tinta">
          Cadastrar ponto
        </Link>
      </CabecalhoPagina>

      {carregando && (
        <div className="pt-8">
          <Estado tipo="carregando" titulo="Buscando os pontos da rede" />
        </div>
      )}

      {erro && (
        <div className="pt-8">
          <Estado
            tipo="erro"
            titulo="Não deu para carregar a rede"
            texto="Confira a conexão e recarregue a página. Se você está testando no computador, veja se a API local está ligada."
          />
        </div>
      )}

      {!carregando && !erro && (
        <>
          <p className="dado border-b border-tinta/15 py-4 text-tinta/70">
            {pontos.length} pontos · {contarConfirmados(pontos, agora)} confirmados nas últimas 2 horas ·{" "}
            {somarVagas(pontos, agora)} vagas confirmadas
          </p>

          <FiltroPontos busca={busca} aoBuscar={aoBuscar} tipo={tipo} aoEscolherTipo={aoEscolherTipo} />

          {aviso !== "" && (
            <p role="alert" className="mb-4 border border-perigo px-4 py-3 font-semibold text-perigo">
              {aviso}
            </p>
          )}

          <ListaPontos
            pontos={pontosVisiveis}
            agora={agora}
            ocupado={ocupado}
            aoConfirmar={aoConfirmar}
            aoApagar={aoApagar}
          />
        </>
      )}
    </div>
  )
}

export default RedePage
