import { PiArrowsClockwise } from "react-icons/pi"
import CabecalhoPagina from "../components/CabecalhoPagina"
import CartaoPedido from "../components/CartaoPedido"
import Estado from "../components/Estado"
import FormularioPedido from "../components/FormularioPedido"
import Indicador from "../components/Indicador"
import useEntradaDaLista from "../hooks/useEntradaDaLista"
import useFormularioPedido from "../hooks/useFormularioPedido"
import useListaAnimada, { esquecerPosicoes, guardarPosicoes } from "../hooks/useListaAnimada"
import usePedidos from "../hooks/usePedidos"
import { contarCriticos, contarNaFila, contarPorStatus, ordenarPedidos, pedidoAntigo } from "../utils/regras"

const PedidosPage = () => {
  const { pedidos, carregando, erro, ocupado, aviso, agora, recarregar, abrirPedido, mudarStatus, apagarPedido } =
    usePedidos()
  const formulario = useFormularioPedido()

  const pedidosOrdenados = ordenarPedidos(pedidos, agora)
  const fila = pedidosOrdenados.filter((pedido) => !pedidoAntigo(pedido, agora))
  const antigos = pedidosOrdenados.filter((pedido) => pedidoAntigo(pedido, agora))
  const assinatura = pedidosOrdenados.map((pedido) => `${pedido.id}:${pedido.status}`).join(",")

  useEntradaDaLista(!carregando && !erro)
  useListaAnimada(assinatura)

  const enviar = () => {
    if (!formulario.validar()) {
      return
    }

    guardarPosicoes()
    abrirPedido(formulario.montarDados()).then((deuCerto) => {
      if (deuCerto) {
        formulario.limpar()
      } else {
        esquecerPosicoes()
      }
    })
  }

  const aoMudarStatus = (pedido, status) => {
    guardarPosicoes()
    mudarStatus(pedido, status).then((deuCerto) => {
      if (!deuCerto) {
        esquecerPosicoes()
      }
    })
  }

  const aoApagar = (id) => {
    guardarPosicoes()
    apagarPedido(id).then((deuCerto) => {
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
        rotulo="Durante o apagão"
        titulo="Fila de pedidos"
        texto="A fila anda pelo relógio: quem tem menos bateria fica em primeiro. Quem está por perto leva uma bateria carregada ou busca a vazia para recarregar."
      >
        <button type="button" disabled={ocupado || carregando} onClick={aoAtualizar} className="botao botao-linha">
          <PiArrowsClockwise size={18} aria-hidden="true" />
          Atualizar a fila
        </button>
      </CabecalhoPagina>

      {!carregando && !erro && (
        <dl className="grid gap-3 min-[340px]:grid-cols-3">
          <Indicador valor={contarNaFila(fila)} rotulo="na fila" destaque />
          <Indicador valor={contarCriticos(fila, agora)} rotulo="com menos de 30 min" />
          <Indicador valor={contarPorStatus(pedidos, "resolvido")} rotulo="resolvidos" />
        </dl>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
        <section className="folha grid gap-6 md:p-8">
          <h2 className="subtitulo text-3xl">Abrir um pedido</h2>
          <FormularioPedido
            formulario={formulario}
            ocupado={ocupado}
            travado={carregando || erro}
            aoEnviar={enviar}
          />
          <p className="dado border-t border-tinta/10 pt-4">Em emergência, ligue 192.</p>
        </section>

        <section className="grid content-start gap-4">
          <h2 className="sr-only">Pedidos na fila</h2>

          {carregando && <Estado tipo="carregando" titulo="Buscando os pedidos" />}

          {erro && (
            <Estado
              tipo="erro"
              titulo="Não deu para carregar os pedidos"
              texto="Confira a conexão e use o botão Atualizar a fila. Em emergência, ligue 192."
            />
          )}

          {!carregando && !erro && (
            <>
              {aviso !== "" && (
                <p role="alert" className="aviso">
                  {aviso}
                </p>
              )}

              {fila.length === 0 && (
                <Estado
                  tipo="vazio"
                  titulo="Nenhum pedido na fila agora"
                  texto="Quando alguém do bairro precisar de ajuda, o pedido aparece aqui."
                />
              )}

              {fila.length > 0 && (
                <ul className="grid gap-4">
                  {fila.map((pedido) => (
                    <CartaoPedido
                      key={pedido.id}
                      pedido={pedido}
                      agora={agora}
                      ocupado={ocupado}
                      aoMudarStatus={aoMudarStatus}
                      aoApagar={aoApagar}
                    />
                  ))}
                </ul>
              )}

              {antigos.length > 0 && (
                <>
                  <div className="mt-8 grid gap-2">
                    <h2 className="subtitulo text-2xl">Sem resposta há mais de um dia</h2>
                    <p className="max-w-prose text-tinta/70">
                      Estes pedidos saíram da fila porque o relógio deles já não vale. Marque como resolvido ou apague.
                    </p>
                  </div>

                  <ul className="grid gap-4">
                    {antigos.map((pedido) => (
                      <CartaoPedido
                        key={pedido.id}
                        pedido={pedido}
                        agora={agora}
                        ocupado={ocupado}
                        aoMudarStatus={aoMudarStatus}
                        aoApagar={aoApagar}
                      />
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default PedidosPage
