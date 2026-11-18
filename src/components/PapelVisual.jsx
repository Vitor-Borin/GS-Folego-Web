import { PiCheck } from "react-icons/pi"
import { calcularAutonomia, textoDaDuracao } from "../utils/autonomia"

const nobreakComum = textoDaDuracao(calcularAutonomia(84, 290, "chumbo"))

const passosDoPlano = ["Anote a hora em que a luz caiu.", "Ligue para um ponto da lista.", "Combine quem traz a bateria carregada."]

const PapelVisual = ({ tipo }) => {
  return (
    <div aria-hidden="true" className="grid">
      {tipo === "plano" && (
        <div className="cartao grid gap-4 rounded-3xl md:p-6">
          <p className="dado flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <span>Plano de apagão</span>
            <span>Exemplo · Parque Arariba</span>
          </p>
          <div className="grid gap-3 min-[400px]:grid-cols-2">
            <p className="grid content-between gap-2 rounded-2xl bg-perigo p-4 text-white">
              <span className="text-xs text-white/80">A bateria dura cerca de</span>
              <span className="titulo whitespace-nowrap text-3xl tabular-nums sm:text-4xl">{nobreakComum}</span>
            </p>
            <p className="grid content-between gap-2 rounded-2xl bg-papel p-4">
              <span className="text-xs text-tinta/60">Peça ajuda</span>
              <span className="titulo whitespace-nowrap text-2xl sm:text-3xl">na hora</span>
            </p>
          </div>
          <ol className="grid gap-2 text-sm text-tinta/75">
            {passosDoPlano.map((passo, indice) => (
              <li key={passo} className="flex items-center gap-2.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-tinta text-xs text-white">
                  {indice + 1}
                </span>
                {passo}
              </li>
            ))}
          </ol>
        </div>
      )}

      {tipo === "ponto" && (
        <div className="cartao grid gap-4 rounded-3xl md:p-6">
          <p className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <span className="dado">Exemplo · Comércio · Parque Arariba</span>
            <span className="etiqueta">Com energia</span>
          </p>
          <p className="subtitulo text-2xl md:text-3xl">Padaria Estrela do Arariba</p>
          <p className="grid gap-1 border-t border-tinta/10 pt-4">
            <span className="font-medium">Com energia, confirmado há 19 min</span>
            <span className="dado">Gerador · 3 tomadas livres</span>
          </p>
          <span className="botao botao-tinta justify-self-start">
            <PiCheck size={18} />
            Confirmar agora
          </span>
        </div>
      )}

      {tipo === "fila" && (
        <div className="grid gap-3">
          <div className="cartao grid grid-cols-[6.5rem_minmax(0,1fr)] overflow-hidden rounded-3xl p-0">
            <p className="grid content-center gap-0.5 bg-perigo p-4 text-white">
              <span className="text-xs text-white/80">Crítico</span>
              <span className="titulo whitespace-nowrap text-3xl tabular-nums">21 min</span>
            </p>
            <p className="grid content-center gap-1 p-4">
              <span className="dado">Exemplo · Tomada no local</span>
              <span className="subtitulo text-lg">Tomada por uma hora</span>
            </p>
          </div>
          <div className="cartao grid grid-cols-[6.5rem_minmax(0,1fr)] overflow-hidden rounded-3xl p-0">
            <p className="grid content-center gap-0.5 bg-destaque p-4">
              <span className="text-xs text-tinta/70">Alerta</span>
              <span className="titulo whitespace-nowrap text-3xl tabular-nums">1h17</span>
            </p>
            <p className="grid content-center gap-1 p-4">
              <span className="dado">Exemplo · Bateria emprestada</span>
              <span className="subtitulo text-lg">Preciso de uma bateria carregada</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PapelVisual
