const CartaoResumo = ({ rotulo, nome, situacao, vagas, aceso }) => {
  return (
    <article className="cartao grid gap-8 p-6">
      <p className="flex items-center justify-between gap-3">
        <span className="dado wrap-anywhere">{rotulo}</span>
        <span
          aria-hidden="true"
          className={`block size-2.5 shrink-0 rounded-full ${aceso ? "bg-destaque" : "bg-tinta/20"}`}
        />
      </p>
      <p className="subtitulo text-2xl wrap-anywhere md:text-3xl">{nome}</p>
      <p className="grid gap-1 border-t border-tinta/10 pt-4">
        <span className="font-medium">{situacao}</span>
        <span className="dado">{vagas}</span>
      </p>
    </article>
  )
}

export default CartaoResumo
