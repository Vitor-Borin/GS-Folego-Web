const Estado = ({ tipo, titulo, texto, children }) => {
  return (
    <div
      role={tipo === "erro" ? "alert" : "status"}
      className="grid justify-items-start gap-3 border border-dashed border-current/30 px-6 py-10"
    >
      {tipo === "carregando" && (
        <span aria-hidden="true" className="block h-1 w-24 animate-pulse bg-destaque" />
      )}
      <p className="subtitulo text-2xl md:text-3xl">{titulo}</p>
      {texto && <p className="max-w-prose opacity-70">{texto}</p>}
      {children}
    </div>
  )
}

export default Estado
