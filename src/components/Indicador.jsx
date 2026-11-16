const Indicador = ({ valor, rotulo, destaque }) => {
  return (
    <div
      className={`js-entrada flex flex-col-reverse justify-between gap-6 rounded-3xl p-4 sm:p-5 md:p-6 ${destaque ? "bg-destaque" : "bg-white"}`}
    >
      <dt className="text-sm text-tinta/70">{rotulo}</dt>
      <dd className="titulo text-4xl tabular-nums lg:text-5xl">{valor}</dd>
    </div>
  )
}

export default Indicador
