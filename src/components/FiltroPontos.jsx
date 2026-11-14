import { tiposDePonto } from "../data/opcoes"

const todosOsTipos = [{ valor: "todos", rotulo: "Todos" }].concat(tiposDePonto)

const FiltroPontos = ({ busca, aoBuscar, tipo, aoEscolherTipo }) => {
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:items-center">
      <div>
        <label htmlFor="busca-pontos" className="sr-only">
          Buscar por nome, bairro ou endereço
        </label>
        <input
          id="busca-pontos"
          type="search"
          value={busca}
          onChange={(evento) => aoBuscar(evento.target.value)}
          placeholder="Buscar ponto, bairro ou rua"
          className="campo rounded-full bg-white px-5"
        />
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Filtrar por tipo">
        {todosOsTipos.map((item) => (
          <li key={item.valor}>
            <button
              type="button"
              aria-pressed={tipo === item.valor}
              onClick={() => aoEscolherTipo(item.valor)}
              className={`min-h-11 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                tipo === item.valor ? "bg-tinta text-white" : "bg-white hover:bg-tinta/10"
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
