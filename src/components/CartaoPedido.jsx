import { useState } from "react"
import { PiTrash } from "react-icons/pi"
import { statusDoPedido } from "../data/opcoes"
import { minutosEntre, rotuloDaPrioridade, textoDoTempo } from "../utils/regras"

const CartaoPedido = ({ pedido, agora, ocupado, aoMudarStatus, aoApagar }) => {
  const [querApagar, setQuerApagar] = useState(false)

  const resolvido = pedido.status === "resolvido"
  const tempo = textoDoTempo(minutosEntre(agora, pedido.criadoEm))
  const idDoStatus = `status-${pedido.id}`

  return (
    <li
      data-flip-id={`pedido-${pedido.id}`}
      className={`js-cartao grid gap-4 border-b border-tinta/15 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start ${
        resolvido ? "opacity-55" : ""
      }`}
    >
      <div className="grid min-w-0 gap-1.5">
        <p className="dado flex flex-wrap items-center gap-x-3 gap-y-1 text-tinta/60">
          <span
            className={`border px-1.5 py-0.5 ${
              pedido.prioridade === "alta" ? "border-tinta bg-tinta text-papel" : "border-tinta/40"
            }`}
          >
            Prioridade {rotuloDaPrioridade(pedido.prioridade)}
          </span>
          <span>{pedido.bairro}</span>
          <span>Aberto {tempo}</span>
        </p>
        <h2 className={`subtitulo text-2xl ${resolvido ? "line-through" : ""}`}>{pedido.titulo}</h2>
        {pedido.detalhe !== "" && <p className="max-w-prose text-tinta/70">{pedido.detalhe}</p>}
      </div>

      <div className="flex flex-wrap items-end gap-2">
        <div className="grid gap-1">
          <label htmlFor={idDoStatus} className="dado text-tinta/60">
            Status
          </label>
          <select
            id={idDoStatus}
            value={pedido.status}
            disabled={ocupado}
            onChange={(evento) => aoMudarStatus(pedido, evento.target.value)}
            className="campo min-h-11 w-auto py-2"
          >
            {statusDoPedido.map((item) => (
              <option key={item.valor} value={item.valor}>
                {item.rotulo}
              </option>
            ))}
          </select>
        </div>

        {!querApagar && (
          <button
            type="button"
            disabled={ocupado}
            onClick={() => setQuerApagar(true)}
            className="botao botao-linha"
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
    </li>
  )
}

export default CartaoPedido
