const Estado = ({ tipo, titulo, texto, children }) => {
  return (
    <div
      role={tipo === "erro" ? "alert" : "status"}
      className={`grid justify-items-start gap-3 rounded-3xl px-6 py-10 md:px-8 ${
        tipo === "erro" ? "bg-perigo/10" : "bg-white"
      }`}
    >
      {tipo === "carregando" && (
        <span aria-hidden="true" className="block h-1.5 w-24 animate-pulse rounded-full bg-destaque" />
      )}
      <p className="subtitulo text-2xl md:text-3xl">{titulo}</p>
      {texto && <p className="max-w-prose text-tinta/70">{texto}</p>}
      {children}
    </div>
  )
}

export default Estado
