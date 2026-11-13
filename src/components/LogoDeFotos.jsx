import { assinatura, projeto } from "../data/conteudo"
import { fotos } from "../data/fotos"
import { classeDasColunas, logo } from "../data/logo"
import useLogoDeFotos from "../hooks/useLogoDeFotos"
import { montarCelulas } from "../utils/desenho"

const celulas = montarCelulas(logo)

const LogoDeFotos = () => {
  useLogoDeFotos()

  return (
    <section className="js-logo relative grid h-svh place-items-center overflow-hidden bg-papel px-4">
      <div className="grid justify-items-center gap-10">
        <div
          role="img"
          aria-label={`Fotos do bairro formando o logo do ${projeto.nome}: uma casa com uma janela acesa`}
          className={`logo-grade grid auto-rows-[var(--celula)] gap-[calc(var(--celula)*0.09)] ${classeDasColunas}`}
        >
          {celulas.map((celula) =>
            celula.cheia ? (
              <div key={celula.id} className="js-peca relative overflow-hidden rounded-[3px]">
                <img
                  src={fotos[(celula.numero - 1) % fotos.length].src}
                  alt=""
                  className="size-full object-cover"
                />
                <span
                  className={`js-peca-tinta absolute inset-0 opacity-0 ${celula.acesa ? "bg-destaque" : "bg-tinta"}`}
                />
              </div>
            ) : (
              <span key={celula.id} />
            )
          )}
        </div>

        <div className="js-logo-nome grid justify-items-center gap-3 text-center">
          <p className="titulo text-[clamp(3rem,7vw,6rem)]">{projeto.nome}</p>
          <p className="max-w-md text-lg text-tinta/70">{assinatura.frase}</p>
        </div>
      </div>
    </section>
  )
}

export default LogoDeFotos
