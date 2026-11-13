import { frase } from "../data/conteudo"
import useFraseAcende from "../hooks/useFraseAcende"

const FraseAcende = () => {
  useFraseAcende()

  return (
    <section className="js-frase bg-papel px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[11rem_minmax(0,1fr)]">
        <p className="dado border-t border-tinta pt-3 text-tinta/70">O problema, em uma frase</p>
        <p className="js-frase-texto subtitulo text-[clamp(1.9rem,4.8vw,4.75rem)]">{frase}</p>
      </div>
    </section>
  )
}

export default FraseAcende
