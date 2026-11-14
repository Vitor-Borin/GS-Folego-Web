const CabecalhoDeSecao = ({ etiqueta, linhas, texto }) => {
  return (
    <header className="js-revelar grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-end md:gap-10">
      <div className="grid justify-items-start gap-5">
        <p className="etiqueta">{etiqueta}</p>
        <h2 className="titulo text-[clamp(2.4rem,5.4vw,5.25rem)]">
          {linhas.map((linha) => (
            <span key={linha} className="md:block">
              {`${linha} `}
            </span>
          ))}
        </h2>
      </div>
      {texto && <p className="text-lg opacity-70">{texto}</p>}
    </header>
  )
}

export default CabecalhoDeSecao
