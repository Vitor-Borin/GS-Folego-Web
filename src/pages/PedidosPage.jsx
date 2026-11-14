import CabecalhoPagina from "../components/CabecalhoPagina"
import CartaoPedido from "../components/CartaoPedido"
import Estado from "../components/Estado"
import FormularioPedido from "../components/FormularioPedido"
import Indicador from "../components/Indicador"
import useEntradaDaLista from "../hooks/useEntradaDaLista"
import useFormularioPedido from "../hooks/useFormularioPedido"
import useListaAnimada, { esquecerPosicoes, guardarPosicoes } from "../hooks/useListaAnimada"
import usePedidos from "../hooks/usePedidos"
import { contarPorStatus, ordenarPedidos } from "../utils/regras"

const PedidosPage = () => {
  const { pedidos, carregando, erro, ocupado, aviso, agora, abrirPedido, mudarStatus, apagarPedido } =
    usePedidos()
  const formulario = useFormularioPedido()

  const pedidosOrdenados = ordenarPedidos(pedidos)
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

  return (
    <div className="pagina">
      <CabecalhoPagina
        rotulo="Rede do bairro"
        titulo="Pedidos de ajuda"
        texto="Quem precisa de uma tomada abre um pedido. Quem está por perto avisa que está a caminho."
      />

      {!carregando && !erro && (
        <dl className="grid grid-cols-3 gap-3">
          <Indicador valor={contarPorStatus(pedidos, "aberto")} rotulo="abertos" destaque />
          <Indicador valor={contarPorStatus(pedidos, "andamento")} rotulo="a caminho" />
          <Indicador valor={contarPorStatus(pedidos, "resolvido")} rotulo="resolvidos" />
        </dl>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
        <section className="folha grid gap-6 md:p-8 lg:sticky lg:top-28">
          <h2 className="subtitulo text-3xl">Abrir um pedido</h2>
          <FormularioPedido formulario={formulario} ocupado={ocupado} aoEnviar={enviar} />
        </section>

        <section className="grid content-start gap-4">
          {carregando && <Estado tipo="carregando" titulo="Buscando os pedidos" />}

          {erro && (
            <Estado
              tipo="erro"
              titulo="Não deu para carregar os pedidos"
              texto="Confira a conexão e recarregue a página."
            />
          )}

          {!carregando && !erro && (
            <>
              {aviso !== "" && (
                <p role="alert" className="aviso">
                  {aviso}
                </p>
              )}

              {pedidosOrdenados.length === 0 && (
                <Estado
                  tipo="vazio"
                  titulo="Nenhum pedido por enquanto"
                  texto="Quando alguém do bairro precisar de ajuda, o pedido aparece aqui."
                />
              )}

              {pedidosOrdenados.length > 0 && (
                <ul className="grid gap-4">
                  {pedidosOrdenados.map((pedido) => (
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
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default PedidosPage
