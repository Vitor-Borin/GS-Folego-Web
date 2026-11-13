import CabecalhoPagina from "../components/CabecalhoPagina"
import CartaoPedido from "../components/CartaoPedido"
import Estado from "../components/Estado"
import FormularioPedido from "../components/FormularioPedido"
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
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
      <CabecalhoPagina rotulo="Rede do bairro" titulo="Pedidos" />

      <div className="grid gap-12 pt-10 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        <section className="grid content-start gap-5 md:sticky md:top-28 md:self-start">
          <h2 className="subtitulo text-3xl">Abrir um pedido</h2>
          <FormularioPedido formulario={formulario} ocupado={ocupado} aoEnviar={enviar} />
        </section>

        <section className="grid content-start gap-2">
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
              <p className="dado border-b border-tinta/15 pb-4 text-tinta/70">
                {contarPorStatus(pedidos, "aberto")} abertos · {contarPorStatus(pedidos, "andamento")} a
                caminho · {contarPorStatus(pedidos, "resolvido")} resolvidos
              </p>

              {aviso !== "" && (
                <p role="alert" className="border border-perigo px-4 py-3 font-semibold text-perigo">
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
                <ul>
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
