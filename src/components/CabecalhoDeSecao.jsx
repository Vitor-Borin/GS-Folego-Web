const CabecalhoDeSecao = ({ etiqueta, linhas, texto }) => {
  return (
    <header
      className={`js-revelar grid gap-6 xl:items-end xl:gap-10 ${
        texto ? "xl:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]" : ""
      }`}
    >
      <div className="grid justify-items-start gap-5">
        <p className="etiqueta">{etiqueta}</p>
        <h2 className="titulo text-balance text-[clamp(2.4rem,5.4vw,5.25rem)]">
          {linhas.map((linha) => (
            <span key={linha} className="md:block">
              {`${linha} `}
            </span>
          ))}
        </h2>
      </div>
      {texto && <p className="max-w-xl text-lg opacity-70">{texto}</p>}
    </header>
  )
}

export default CabecalhoDeSecao
