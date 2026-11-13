import { numeros, titulos } from "../data/conteudo"
import useNumerosVivos from "../hooks/useNumerosVivos"

const Numeros = () => {
  useNumerosVivos()

  return (
    <section className="bg-papel px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <h2 className="titulo max-w-5xl text-[clamp(2.75rem,8.5vw,8.5rem)]">{titulos.numeros}</h2>

        <ul className="mt-14 border-t border-tinta">
          {numeros.map((numero) => (
            <li
              key={numero.descricao}
              className="grid gap-x-10 gap-y-2 border-b border-tinta/20 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-baseline"
            >
              <p className="js-numero font-dado text-[clamp(3.5rem,9vw,8rem)] leading-none tabular-nums">
                {numero.valor}
              </p>
              <p className="text-xl md:text-2xl">{numero.descricao}</p>
              <p className="dado text-tinta/60">Fonte: {numero.fonte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Numeros
