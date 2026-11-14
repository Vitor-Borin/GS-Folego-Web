const ControleDeslizante = ({ id, rotulo, valor, unidade, minimo, maximo, passo, aoMudar, exemplos }) => {
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
              aria-pressed={valor === exemplo.valor}
              onClick={() => aoMudar(exemplo.valor)}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                valor === exemplo.valor ? "border-tinta bg-tinta text-white" : "border-tinta/20 hover:border-tinta"
              }`}
            >
              {exemplo.rotulo} · {exemplo.valor.toLocaleString("pt-BR")} {unidade}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ControleDeslizante
