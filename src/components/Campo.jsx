const Campo = ({ id, rotulo, tipo = "texto", valor, aoMudar, erro, dica, opcoes = [] }) => {
  const idDaAjuda = `${id}-ajuda`

  return (
    <div className="grid content-start gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {rotulo}
      </label>

      {(tipo === "texto" || tipo === "numero") && (
        <input
          id={id}
          type={tipo === "numero" ? "number" : "text"}
          value={valor}
          onChange={(evento) => aoMudar(evento.target.value)}
          aria-invalid={erro ? "true" : "false"}
          aria-describedby={idDaAjuda}
          className="campo"
        />
      )}

      {tipo === "area" && (
        <textarea
          id={id}
          rows={3}
          value={valor}
          onChange={(evento) => aoMudar(evento.target.value)}
          aria-invalid={erro ? "true" : "false"}
          aria-describedby={idDaAjuda}
          className="campo resize-y"
        />
      )}

      {tipo === "lista" && (
        <select
          id={id}
          value={valor}
          onChange={(evento) => aoMudar(evento.target.value)}
          aria-invalid={erro ? "true" : "false"}
          aria-describedby={idDaAjuda}
          className="campo"
        >
          <option value="">Escolha uma opção</option>
          {opcoes.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>
              {opcao.rotulo}
            </option>
          ))}
        </select>
      )}

      <p id={idDaAjuda} className={`min-h-5 text-sm ${erro ? "font-medium text-perigo" : "text-tinta/60"}`}>
        {erro ? erro : dica}
      </p>
    </div>
  )
}

export default Campo
