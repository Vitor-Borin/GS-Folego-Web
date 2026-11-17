import { tiposDeBateria } from "../data/opcoes"

const SeletorDeTipo = ({ valor, aoMudar, dica }) => {
  return (
    <div className="grid gap-3">
      <p className="text-lg font-medium">Tipo de bateria</p>

      <ul className="flex flex-wrap gap-2">
        {tiposDeBateria.map((tipo) => (
          <li key={tipo.valor}>
            <button
              type="button"
              aria-pressed={valor === tipo.valor}
              onClick={() => aoMudar(tipo.valor)}
              className={`min-h-11 cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                valor === tipo.valor ? "border-tinta bg-tinta text-white" : "border-tinta/20 hover:border-tinta"
              }`}
            >
              {tipo.rotulo}
            </button>
          </li>
        ))}
      </ul>

      <p className="dado">{dica}</p>
    </div>
  )
}

export default SeletorDeTipo
