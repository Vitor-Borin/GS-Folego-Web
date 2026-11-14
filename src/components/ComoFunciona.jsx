import CabecalhoDeSecao from "./CabecalhoDeSecao"
import PassoVisual from "./PassoVisual"
import { comoFunciona } from "../data/conteudo"
import usePassos from "../hooks/usePassos"

const cores = ["bg-white text-tinta", "bg-destaque text-tinta", "bg-tinta text-white", "bg-white text-tinta"]

const paradas = ["md:top-24", "md:top-28", "md:top-32", "md:top-36"]

const ComoFunciona = () => {
  usePassos()

  return (
    <section className="px-3 py-24 md:px-6 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
        <CabecalhoDeSecao etiqueta={comoFunciona.etiqueta} linhas={comoFunciona.linhas} />

        <ol className="grid gap-4">
          {comoFunciona.passos.map((passo, indice) => (
            <li key={passo.titulo} className={`js-passo md:sticky ${paradas[indice]}`}>
              <article
                className={`js-passo-cartao grid origin-top gap-10 overflow-hidden rounded-[2rem] p-6 md:h-[min(32rem,calc(100svh-11rem))] md:grid-cols-2 md:gap-12 md:p-10 ${cores[indice]}`}
              >
                <div className="grid content-between gap-10">
                  <p className="flex items-center gap-3 text-sm">
                    <span className="grid size-9 place-items-center rounded-full border border-current/25 font-medium">
                      {indice + 1}
                    </span>
                    <span className="opacity-60">de {comoFunciona.passos.length}</span>
                  </p>
                  <div className="grid gap-4">
                    <h3 className="titulo text-[clamp(2rem,4vw,3.75rem)]">{passo.titulo}</h3>
                    <p className="max-w-md text-lg opacity-75">{passo.texto}</p>
                  </div>
                </div>

                <PassoVisual tipo={passo.visual} />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ComoFunciona
