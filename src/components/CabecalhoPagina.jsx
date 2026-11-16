import useEntradaPagina from "../hooks/useEntradaPagina"

const CabecalhoPagina = ({ rotulo, titulo, texto, compacto, children }) => {
  useEntradaPagina()

  return (
    <header className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div className="grid min-w-0 justify-items-start gap-5 wrap-anywhere">
        <p className="etiqueta">{rotulo}</p>
        <h1
          className={`js-titulo-pagina titulo ${
            compacto ? "text-[clamp(2.4rem,4.4vw,4rem)]" : "text-[clamp(2.6rem,6vw,5.5rem)]"
          }`}
        >
          {titulo}
        </h1>
        {texto && <p className="max-w-xl text-lg text-tinta/70">{texto}</p>}
      </div>
      {children && <div className="flex flex-wrap gap-3">{children}</div>}
    </header>
  )
}

export default CabecalhoPagina
