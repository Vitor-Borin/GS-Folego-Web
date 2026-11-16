import { useState } from "react"
import { Link } from "react-router"
import { PiArrowsClockwise, PiPlus } from "react-icons/pi"
import CabecalhoPagina from "../components/CabecalhoPagina"
import Estado from "../components/Estado"
import FiltroPontos from "../components/FiltroPontos"
import Indicador from "../components/Indicador"
import ListaPontos from "../components/ListaPontos"
import useEntradaDaLista from "../hooks/useEntradaDaLista"
import useListaAnimada, { esquecerPosicoes, guardarPosicoes } from "../hooks/useListaAnimada"
import usePontos from "../hooks/usePontos"
import { contarConfirmados, contarQueEmprestam, filtrarPontos, ordenarPontos, somarVagas } from "../utils/regras"

const RedePage = () => {
  const { pontos, carregando, erro, ocupado, aviso, agora, recarregar, confirmarPonto, apagarPonto } = usePontos()
  const [busca, setBusca] = useState("")
  const [tipo, setTipo] = useState("todos")
  const [soEmprestam, setSoEmprestam] = useState(false)

  const pontosVisiveis = ordenarPontos(filtrarPontos(pontos, busca, tipo, soEmprestam), agora)
  const assinatura = pontosVisiveis.map((ponto) => ponto.id).join(",")

  useEntradaDaLista(!carregando && !erro)
  useListaAnimada(assinatura)

  const aoBuscar = (texto) => {
    guardarPosicoes()
    setBusca(texto)
  }

  const aoEscolherTipo = (valor) => {
    guardarPosicoes()
    setTipo(valor)
  }

  const aoAlternarEmprestimo = () => {
    guardarPosicoes()
    setSoEmprestam(!soEmprestam)
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

  const aoAtualizar = () => {
    guardarPosicoes()
    recarregar().then((deuCerto) => {
      if (!deuCerto) {
        esquecerPosicoes()
      }
    })
  }

  return (
    <div className="pagina">
      <CabecalhoPagina
        rotulo="Rede do bairro"
        titulo="Pontos de energia"
        texto="Padarias, prédios, igrejas e casas com energia de reserva: tomada, recarga ou bateria para emprestar. Quem está no ponto confirma que há energia agora, e a confirmação vale por duas horas."
      >
        <Link to="/rede/novo" className="botao botao-tinta">
          <PiPlus size={18} aria-hidden="true" />
          Cadastrar ponto
        </Link>
        <button type="button" disabled={ocupado || carregando} onClick={aoAtualizar} className="botao botao-linha">
          <PiArrowsClockwise size={18} aria-hidden="true" />
          Atualizar a rede
        </button>
      </CabecalhoPagina>

      {carregando && <Estado tipo="carregando" titulo="Buscando os pontos da rede" />}

      {erro && (
        <Estado
          tipo="erro"
          titulo="Não deu para carregar a rede"
          texto="Confira a conexão e use o botão Atualizar a rede."
        />
      )}

      {!carregando && !erro && (
        <>
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Indicador valor={pontos.length} rotulo="pontos cadastrados" />
            <Indicador valor={contarConfirmados(pontos, agora)} rotulo="com energia agora" destaque />
            <Indicador valor={somarVagas(pontos, agora)} rotulo="tomadas livres" />
            <Indicador valor={contarQueEmprestam(pontos)} rotulo="emprestam bateria" />
          </dl>

          <FiltroPontos
            busca={busca}
            aoBuscar={aoBuscar}
            tipo={tipo}
            aoEscolherTipo={aoEscolherTipo}
            soEmprestam={soEmprestam}
            aoAlternarEmprestimo={aoAlternarEmprestimo}
          />

          {aviso !== "" && (
            <p role="alert" className="aviso">
              {aviso}
            </p>
          )}

          <ListaPontos
            pontos={pontosVisiveis}
            redeVazia={pontos.length === 0}
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
