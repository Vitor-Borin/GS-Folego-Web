import { useState } from "react"
import { Link } from "react-router"
import { PiCheckBold, PiPencilSimple, PiTrash } from "react-icons/pi"
import { confirmadoHaPouco, minutosEntre, rotuloDoTipo, textoDoTempo } from "../utils/regras"

const CartaoPonto = ({ ponto, agora, ocupado, aoConfirmar, aoApagar }) => {
  const [querApagar, setQuerApagar] = useState(false)

  const emDia = confirmadoHaPouco(ponto, agora)
  const tempo = textoDoTempo(minutosEntre(agora, ponto.atualizadoEm))

  return (
    <li
      data-flip-id={`ponto-${ponto.id}`}
      className="js-cartao grid gap-5 border-b border-tinta/15 py-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_auto] md:items-center"
    >
      <div className="grid min-w-0 gap-1">
        <p className="dado text-tinta/60">
          {rotuloDoTipo(ponto.tipo)} · {ponto.bairro}
        </p>
        <h2 className="subtitulo text-2xl md:text-3xl">
          <Link to={`/rede/${ponto.id}`} className="hover:underline">
            {ponto.nome}
          </Link>
        </h2>
        <p className="text-tinta/70">{ponto.endereco}</p>
      </div>

      <div className="grid gap-1.5">
        <p className="flex items-center gap-2 font-semibold">
          <span
            aria-hidden="true"
            className={`block size-3 shrink-0 border border-tinta ${emDia ? "bg-destaque" : "bg-transparent"}`}
          />
          {!ponto.ativo && "Fora da rede no momento"}
          {ponto.ativo && emDia && `Confirmado ${tempo}`}
          {ponto.ativo && !emDia && `Última confirmação ${tempo}`}
        </p>
        <p className="dado text-tinta/60">
          {ponto.vagas} {Number(ponto.vagas) === 1 ? "vaga" : "vagas"}
        </p>
      </div>

      {!querApagar && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={ocupado}
            onClick={() => aoConfirmar(ponto)}
            className="botao botao-tinta"
          >
            <PiCheckBold size={16} aria-hidden="true" />
            Confirmar agora
          </button>
          <Link to={`/rede/${ponto.id}`} className="botao botao-linha" aria-label={`Editar ${ponto.nome}`}>
            <PiPencilSimple size={18} aria-hidden="true" />
          </Link>
          <button
            type="button"
            disabled={ocupado}
            onClick={() => setQuerApagar(true)}
            className="botao botao-linha"
            aria-label={`Apagar ${ponto.nome}`}
          >
            <PiTrash size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      {querApagar && (
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={ocupado}
            onClick={() => aoApagar(ponto.id)}
            className="botao botao-perigo"
          >
            Apagar de vez
          </button>
          <button type="button" onClick={() => setQuerApagar(false)} className="botao botao-linha">
            Cancelar
          </button>
        </div>
      )}
    </li>
  )
}

export default CartaoPonto
