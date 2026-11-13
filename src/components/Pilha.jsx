import PainelPilha from "./PainelPilha"
import { participantes, passos, problema, titulos } from "../data/conteudo"
import usePilha from "../hooks/usePilha"

const Pilha = () => {
  usePilha()

  return (
    <div className="js-pilha relative">
      <PainelPilha tom="papel">
        <h2 className="titulo max-w-6xl text-[clamp(2.75rem,8.5vw,8.5rem)]">{problema.titulo}</h2>
        <div className="grid gap-8 border-t border-tinta pt-6 md:grid-cols-2">
          <p className="max-w-xl text-lg md:text-xl">{problema.texto}</p>
          <div className="grid content-start gap-2">
            <p className="subtitulo text-2xl md:text-4xl">{problema.fato}</p>
            <p className="dado text-tinta/60">Fonte: {problema.fonte}</p>
          </div>
        </div>
      </PainelPilha>

      <PainelPilha tom="tinta" ancora="como-funciona">
        <h2 className="titulo text-[clamp(2.75rem,8.5vw,8.5rem)]">{titulos.passos}</h2>
        <ol className="grid gap-x-8 gap-y-8 md:grid-cols-4">
          {passos.map((passo, indice) => (
            <li key={passo.titulo} className="grid content-start gap-3 border-t border-papel/25 pt-5">
              <span className="titulo text-6xl text-destaque md:text-8xl">{indice + 1}</span>
              <h3 className="subtitulo text-2xl md:text-3xl">{passo.titulo}</h3>
              <p className="text-papel/70">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </PainelPilha>

      <PainelPilha tom="destaque">
        <h2 className="titulo text-[clamp(2.75rem,8.5vw,8.5rem)]">{titulos.participantes}</h2>
        <ul className="border-t border-tinta">
          {participantes.map((participante) => (
            <li
              key={participante.nome}
              className="grid gap-1 border-b border-tinta/30 py-4 md:grid-cols-2 md:items-baseline md:py-5"
            >
              <span className="subtitulo text-3xl md:text-5xl">{participante.nome}</span>
              <span className="text-lg md:text-xl">{participante.papel}</span>
            </li>
          ))}
        </ul>
      </PainelPilha>
    </div>
  )
}

export default Pilha
