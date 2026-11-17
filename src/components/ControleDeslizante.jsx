const ControleDeslizante = ({ id, rotulo, valor, unidade, minimo, maximo, passo, aoMudar, exemplos, tipo, aoEscolher }) => {
  const marcado = (exemplo) => {
    return valor === exemplo.valor && (exemplo.tipo === undefined || exemplo.tipo === tipo)
  }

  const escolher = (exemplo) => {
    if (aoEscolher) {
      aoEscolher(exemplo)
    } else {
      aoMudar(exemplo.valor)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-end justify-between gap-4">
        <label htmlFor={id} className="text-lg font-medium">
          {rotulo}
        </label>
        <p className="titulo text-4xl tabular-nums md:text-5xl">
          {valor.toLocaleString("pt-BR")}
          <span className="ml-1.5 text-lg text-tinta/60">{unidade}</span>
        </p>
      </div>

      <input
        id={id}
        type="range"
        min={minimo}
        max={maximo}
        step={passo}
        value={valor}
        onChange={(evento) => aoMudar(Number(evento.target.value))}
        className="deslizante"
      />

      <ul className="flex flex-wrap gap-2">
        {exemplos.map((exemplo) => (
          <li key={exemplo.rotulo}>
            <button
              type="button"
              aria-pressed={marcado(exemplo)}
              onClick={() => escolher(exemplo)}
              className={`min-h-11 cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                marcado(exemplo) ? "border-tinta bg-tinta text-white" : "border-tinta/20 hover:border-tinta"
              }`}
            >
              {exemplo.rotulo} ·{" "}
              <span className="whitespace-nowrap">
                {exemplo.valor.toLocaleString("pt-BR")} {unidade}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ControleDeslizante
