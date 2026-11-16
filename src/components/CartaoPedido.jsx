import { useState } from "react"
import { PiArrowCounterClockwise, PiCheckBold, PiPersonSimpleWalk, PiTrash } from "react-icons/pi"
import { estadoDaBateria, textoDaDuracao } from "../utils/autonomia"
import {
  minutosEntre,
  minutosRestantes,
  pedidoAntigo,
  rotuloDaAjuda,
  rotuloDoEstado,
  rotuloDoStatus,
  textoDoTempo,
} from "../utils/regras"

const coresDoRelogio = {
  critico: "bg-perigo text-white",
  alerta: "bg-destaque text-tinta",
  reserva: "bg-calma text-white",
}

const coresDoStatus = {
  aberto: "bg-tinta text-white",
  andamento: "bg-destaque text-tinta",
  resolvido: "bg-papel text-tinta/70",
}

const CartaoPedido = ({ pedido, agora, ocupado, aoMudarStatus, aoApagar }) => {
  const [querApagar, setQuerApagar] = useState(false)

  const resolvido = pedido.status === "resolvido"
  const antigo = pedidoAntigo(pedido, agora)
  const restante = minutosRestantes(pedido, agora)
  const estado = estadoDaBateria(restante)
  const tempo = textoDoTempo(minutosEntre(agora, pedido.criadoEm))

  let corDoQuadro = coresDoRelogio[estado]
  let rotuloDoQuadro = rotuloDoEstado(estado)

  if (antigo) {
    corDoQuadro = "bg-papel text-tinta/70"
    rotuloDoQuadro = "Sem resposta"
  }

  if (resolvido) {
    corDoQuadro = "bg-papel text-tinta/70"
    rotuloDoQuadro = "Resolvido"
  }

  return (
    <li data-flip-id={`pedido-${pedido.id}`} className="js-cartao js-entrada">
      <article
        className={`cartao grid gap-4 p-4 transition-opacity duration-300 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-6 ${
          resolvido ? "opacity-60" : ""
        }`}
      >
        <div
          className={`flex items-end justify-between gap-3 rounded-2xl p-4 md:grid md:content-between md:justify-normal ${corDoQuadro}`}
        >
          <span className="text-sm font-medium">{rotuloDoQuadro}</span>
          {resolvido && <PiCheckBold size={36} aria-hidden="true" />}
          {antigo && <span className="titulo text-2xl">{tempo}</span>}
          {!resolvido && !antigo && (
            <span className="grid justify-items-end md:justify-items-start">
              <span className="titulo text-4xl tabular-nums">{textoDaDuracao(restante)}</span>
              <span className="text-xs opacity-80">de bateria</span>
            </span>
          )}
        </div>

        <div className="grid content-between gap-5 md:py-1 md:pr-2">
          <div className="grid min-w-0 gap-2">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className={`rounded-full px-3 py-1 text-sm font-medium ${coresDoStatus[pedido.status]}`}>
                {rotuloDoStatus(pedido.status)}
              </span>
              <span className="text-sm font-medium">{rotuloDaAjuda(pedido.ajuda)}</span>
              <span className="dado">
                {pedido.bairro} · aberto {tempo}
              </span>
            </p>
            <h3 className={`subtitulo text-2xl ${resolvido ? "line-through" : ""}`}>{pedido.titulo}</h3>
            {pedido.detalhe !== "" && <p className="max-w-prose text-tinta/70">{pedido.detalhe}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {!querApagar && !antigo && pedido.status === "aberto" && (
              <button
                type="button"
                disabled={ocupado}
                onClick={() => aoMudarStatus(pedido, "andamento")}
                className="botao botao-tinta"
              >
                <PiPersonSimpleWalk size={18} aria-hidden="true" />
                Estou a caminho
              </button>
            )}

            {!querApagar && (antigo || pedido.status === "andamento") && (
              <button
                type="button"
                disabled={ocupado}
                onClick={() => aoMudarStatus(pedido, "resolvido")}
                className="botao botao-tinta"
              >
                <PiCheckBold size={16} aria-hidden="true" />
                Marcar como resolvido
              </button>
            )}

            {!querApagar && resolvido && (
              <button
                type="button"
                disabled={ocupado}
                onClick={() => aoMudarStatus(pedido, "aberto")}
                className="botao botao-linha"
              >
                <PiArrowCounterClockwise size={18} aria-hidden="true" />
                Reabrir
              </button>
            )}

            {!querApagar && (
              <button
                type="button"
                disabled={ocupado}
                onClick={() => setQuerApagar(true)}
                className="botao botao-linha px-3.5"
                aria-label={`Apagar o pedido ${pedido.titulo}`}
              >
                <PiTrash size={18} aria-hidden="true" />
              </button>
            )}

            {querApagar && (
              <>
                <button
                  type="button"
                  disabled={ocupado}
                  onClick={() => aoApagar(pedido.id)}
                  className="botao botao-perigo"
                >
                  Apagar de vez
                </button>
                <button type="button" onClick={() => setQuerApagar(false)} className="botao botao-linha">
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      </article>
    </li>
  )
}

export default CartaoPedido
