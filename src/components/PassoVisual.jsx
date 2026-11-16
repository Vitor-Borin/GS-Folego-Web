import { PiBellRingingFill, PiLightningSlash, PiPersonSimpleWalk } from "react-icons/pi"
import { calcularAutonomia, textoDaDuracao } from "../utils/autonomia"

const bateriaGrande = textoDaDuracao(calcularAutonomia(1200, 290))
const nobreakComum = textoDaDuracao(calcularAutonomia(84, 290))

const PassoVisual = ({ tipo }) => {
  return (
    <div aria-hidden="true" className="grid place-items-center">
      {tipo === "visor" && (
        <div className="grid w-full max-w-sm gap-5 rounded-3xl bg-noite p-5 text-white md:p-6">
          <p className="flex items-center justify-between gap-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <PiLightningSlash size={18} />
              Sem energia da rua
            </span>
            <span>Protótipo</span>
          </p>
          <p className="grid gap-1 rounded-2xl bg-calma px-5 py-4 font-mono text-white">
            <span className="text-sm">RESERVA</span>
            <span className="text-5xl font-medium tabular-nums">{bateriaGrande}</span>
          </p>
          <p className="flex items-center justify-between gap-3 text-sm text-white/60">
            <span className="flex gap-2.5">
              <span className="block size-3.5 rounded-full bg-calma ring-4 ring-calma/30" />
              <span className="block size-3.5 rounded-full bg-white/15" />
              <span className="block size-3.5 rounded-full bg-white/15" />
            </span>
            <span>Bateria de 1.200 Wh</span>
          </p>
        </div>
      )}

      {tipo === "conta" && (
        <div className="grid w-full max-w-sm gap-6 rounded-3xl bg-white p-5 md:p-6">
          <p className="dado">Nobreak comum ligado a um concentrador de oxigênio</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-2.5 text-lg font-medium">
            <span className="rounded-full bg-papel px-3 py-1">84 Wh</span>
            <span>×</span>
            <span className="rounded-full bg-papel px-3 py-1">0,85</span>
            <span>÷</span>
            <span className="rounded-full bg-papel px-3 py-1">290 W</span>
            <span>×</span>
            <span className="rounded-full bg-papel px-3 py-1">60</span>
          </p>
          <p className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-tinta/10 pt-5">
            <span className="dado">Tempo de bateria</span>
            <span className="titulo text-6xl tabular-nums">{nobreakComum}</span>
          </p>
        </div>
      )}

      {tipo === "pedido" && (
        <div className="grid w-full max-w-sm -rotate-2 gap-6 rounded-3xl bg-white p-5 text-tinta md:p-6">
          <p className="flex items-center justify-between gap-3">
            <span className="etiqueta">
              <PiBellRingingFill size={16} />
              Alerta
            </span>
            <span className="dado">Exemplo · Bela Vista</span>
          </p>
          <p className="subtitulo text-2xl md:text-3xl">Bateria carregada para o nobreak</p>
          <p className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-tinta/10 pt-5">
            <span className="dado">Bateria restante</span>
            <span className="titulo text-5xl tabular-nums">1h47</span>
          </p>
        </div>
      )}

      {tipo === "ponto" && (
        <div className="grid w-full max-w-sm rotate-2 gap-5 rounded-3xl bg-papel p-5 md:p-6">
          <p className="flex items-center justify-between gap-3">
            <span className="dado">Exemplo · Condomínio · Bela Vista</span>
            <span className="block size-2.5 rounded-full bg-destaque" />
          </p>
          <p className="subtitulo text-2xl md:text-3xl">Condomínio Mirante</p>
          <p className="grid gap-1 border-t border-tinta/10 pt-4">
            <span className="font-medium">Com energia, confirmado há 20 min</span>
            <span className="dado">Gerador · empresta bateria</span>
          </p>
          <span className="botao botao-tinta justify-self-start">
            <PiPersonSimpleWalk size={18} />
            Estou a caminho
          </span>
        </div>
      )}
    </div>
  )
}

export default PassoVisual
