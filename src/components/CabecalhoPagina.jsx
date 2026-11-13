import useEntradaPagina from "../hooks/useEntradaPagina"

const CabecalhoPagina = ({ rotulo, titulo, children }) => {
  useEntradaPagina()

  return (
    <header className="grid gap-6 border-b border-tinta pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div className="grid gap-3">
        <p className="dado text-tinta/60">{rotulo}</p>
        <h1 className="js-titulo-pagina titulo text-[clamp(2.75rem,9vw,7.5rem)]">{titulo}</h1>
      </div>
      {children && <div className="flex flex-wrap gap-3">{children}</div>}
    </header>
  )
}

export default CabecalhoPagina
