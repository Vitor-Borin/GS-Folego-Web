const tons = {
  papel: "bg-papel text-tinta",
  tinta: "bg-tinta text-papel",
  destaque: "bg-destaque text-tinta",
}

const PainelPilha = ({ tom = "papel", ancora, children }) => {
  return (
    <section id={ancora} className={`js-painel relative overflow-hidden md:sticky md:top-0 md:h-svh ${tons[tom]}`}>
      <div className="js-painel-conteudo flex h-full flex-col justify-between gap-12 px-4 py-20 md:px-8 md:py-24">
        {children}
      </div>
      <div aria-hidden="true" className="js-painel-sombra pointer-events-none absolute inset-0 bg-tinta opacity-0" />
    </section>
  )
}

export default PainelPilha
