import { useState } from "react"
import { PiArrowCounterClockwise, PiCheckBold, PiPersonSimpleWalk, PiTrash } from "react-icons/pi"
import { minutosEntre, rotuloDaPrioridade, rotuloDoStatus, textoDoTempo } from "../utils/regras"

const coresDoStatus = {
  aberto: "bg-destaque text-tinta",
  andamento: "bg-tinta text-white",
  resolvido: "bg-papel text-tinta/70",
}

const CartaoPedido = ({ pedido, agora, ocupado, aoMudarStatus, aoApagar }) => {
  const [querApagar, setQuerApagar] = useState(false)

  const resolvido = pedido.status === "resolvido"
  const tempo = textoDoTempo(minutosEntre(agora, pedido.criadoEm))

  return (
    <li data-flip-id={`pedido-${pedido.id}`} className="js-cartao js-entrada">
      <article
        className={`cartao grid gap-6 p-6 transition-opacity duration-300 md:grid-cols-[minmax(0,1fr)_auto] md:items-center ${
          resolvido ? "opacity-60" : ""
        }`}
      >
        <div className="grid min-w-0 gap-3">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${coresDoStatus[pedido.status]}`}>
              {rotuloDoStatus(pedido.status)}
            </span>
            <span className={`text-sm ${pedido.prioridade === "alta" ? "font-medium" : "text-tinta/60"}`}>
              Prioridade {rotuloDaPrioridade(pedido.prioridade).toLowerCase()}
            </span>
            <span className="dado">
              {pedido.bairro} · aberto {tempo}
            </span>
          </p>
          <h2 className={`subtitulo text-2xl ${resolvido ? "line-through" : ""}`}>{pedido.titulo}</h2>
          {pedido.detalhe !== "" && <p className="max-w-prose text-tinta/70">{pedido.detalhe}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!querApagar && pedido.status === "aberto" && (
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

          {!querApagar && pedido.status === "andamento" && (
            <button
              type="button"
              disabled={ocupado}
              onClick={() => aoMudarStatus(pedido, "resolvido")}
              className="botao botao-destaque hover:bg-tinta hover:text-white"
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
      </article>
    </li>
  )
}

export default CartaoPedido
