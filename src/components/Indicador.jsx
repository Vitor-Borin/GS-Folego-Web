const Indicador = ({ valor, rotulo, destaque }) => {
  return (
    <div
      className={`js-entrada grid content-between gap-6 rounded-3xl p-5 md:p-6 ${destaque ? "bg-destaque" : "bg-white"}`}
    >
      <dd className="titulo text-4xl tabular-nums lg:text-5xl">{valor}</dd>
      <dt className="text-sm text-tinta/70">{rotulo}</dt>
    </div>
  )
}

export default Indicador
