import { manifesto } from "../data/conteudo"
import { fotos } from "../data/fotos"
import useManifesto from "../hooks/useManifesto"

const Manifesto = () => {
  useManifesto()

  return (
    <section className="relative z-10 -mt-[100svh] rounded-t-[2rem] bg-white px-4 pb-20 pt-20 md:rounded-t-[3rem] md:px-10 md:pb-32 md:pt-32">
      <div className="mx-auto grid max-w-6xl justify-items-start gap-10">
        <p className="etiqueta">{manifesto.etiqueta}</p>

        <p className="js-manifesto titulo text-[clamp(1.9rem,4.7vw,4.6rem)] leading-[1.14]">
          {manifesto.pedacos.map((pedaco) =>
            pedaco.foto !== undefined ? (
              <span
                key={pedaco.id}
                aria-hidden="true"
                className="js-manifesto-foto mx-[0.12em] inline-block h-[0.82em] w-[1.75em] overflow-hidden rounded-full align-[-0.08em]"
              >
                <img src={fotos[pedaco.foto].src} alt="" className="size-full object-cover" />
              </span>
            ) : (
              pedaco.texto.split(" ").map((palavra, indice) => (
                <span key={`${pedaco.id}-${indice}`} className="js-palavra">
                  {`${palavra} `}
                </span>
              ))
            )
          )}
        </p>

        <p className="dado max-w-md">{manifesto.fonte}</p>
      </div>
    </section>
  )
}

export default Manifesto
