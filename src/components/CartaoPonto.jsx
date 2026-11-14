import { useState } from "react"
import { Link } from "react-router"
import { PiCheckBold, PiPencilSimple, PiTrash } from "react-icons/pi"
import { confirmadoHaPouco, rotuloDoTipo, situacaoCurta, situacaoDoPonto, textoDasVagas } from "../utils/regras"

const CartaoPonto = ({ ponto, agora, ocupado, aoConfirmar, aoApagar }) => {
  const [querApagar, setQuerApagar] = useState(false)

  const emDia = confirmadoHaPouco(ponto, agora)

  return (
    <li data-flip-id={`ponto-${ponto.id}`} className="js-cartao js-entrada">
      <article className="cartao grid h-full content-between gap-8 p-6">
        <div className="grid gap-4">
          <p className="flex items-center justify-between gap-3">
            <span className="dado">
              {rotuloDoTipo(ponto.tipo)} · {ponto.bairro}
            </span>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-sm font-medium ${
                emDia ? "bg-destaque" : "bg-papel text-tinta/70"
              }`}
            >
              {situacaoCurta(ponto, agora)}
            </span>
          </p>
          <h2 className="subtitulo text-2xl md:text-3xl">
            <Link to={`/rede/${ponto.id}`} className="hover:underline">
              {ponto.nome}
            </Link>
          </h2>
          <p className="text-tinta/70">{ponto.endereco}</p>
        </div>

        <div className="grid gap-4 border-t border-tinta/10 pt-4">
          <p className="grid gap-1">
            <span className="font-medium">{situacaoDoPonto(ponto, agora)}</span>
            <span className="dado">{textoDasVagas(ponto.vagas)}</span>
          </p>

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
              <Link to={`/rede/${ponto.id}`} className="botao botao-linha px-3.5" aria-label={`Editar ${ponto.nome}`}>
                <PiPencilSimple size={18} aria-hidden="true" />
              </Link>
              <button
                type="button"
                disabled={ocupado}
                onClick={() => setQuerApagar(true)}
                className="botao botao-linha px-3.5"
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
        </div>
      </article>
    </li>
  )
}

export default CartaoPonto
