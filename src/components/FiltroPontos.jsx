import { tiposDePonto } from "../data/opcoes"

const FiltroPontos = ({ busca, aoBuscar, tipo, aoEscolherTipo }) => {
  return (
    <div className="grid gap-4 py-6 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] md:items-center">
      <div>
        <label htmlFor="busca-pontos" className="sr-only">
          Buscar por nome, bairro ou endereço
        </label>
        <input
          id="busca-pontos"
          type="search"
          value={busca}
          onChange={(evento) => aoBuscar(evento.target.value)}
          placeholder="Buscar por nome, bairro ou endereço"
          className="campo"
        />
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Filtrar por tipo">
        <li>
          <button
            type="button"
            aria-pressed={tipo === "todos"}
            onClick={() => aoEscolherTipo("todos")}
            className={`dado cursor-pointer border border-tinta px-3 py-2 transition-colors duration-200 ${
              tipo === "todos" ? "bg-tinta text-papel" : "hover:bg-tinta/10"
            }`}
          >
            Todos
          </button>
        </li>
        {tiposDePonto.map((item) => (
          <li key={item.valor}>
            <button
              type="button"
              aria-pressed={tipo === item.valor}
              onClick={() => aoEscolherTipo(item.valor)}
              className={`dado cursor-pointer border border-tinta px-3 py-2 transition-colors duration-200 ${
                tipo === item.valor ? "bg-tinta text-papel" : "hover:bg-tinta/10"
              }`}
            >
              {item.rotulo}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltroPontos
