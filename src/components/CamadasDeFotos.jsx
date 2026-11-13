import { camadas } from "../data/conteudo"
import { fotosGrandes } from "../data/fotos"
import useCamadas from "../hooks/useCamadas"

const CamadasDeFotos = () => {
  useCamadas()

  return (
    <section className="js-camadas relative z-10 -mt-[100svh]">
      {camadas.map((camada, indice) => (
        <article key={camada.etiqueta} className="sticky top-0 h-svh overflow-hidden bg-noite text-white">
          <img
            src={fotosGrandes[indice].src}
            alt=""
            className="js-camada-imagem absolute inset-0 size-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-noite/90 via-noite/40 to-noite/45" />

          <div className="js-camada-texto relative flex h-full flex-col justify-end px-4 pb-10 md:px-10 md:pb-14">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div className="grid justify-items-start gap-5">
                <p className="flex items-center gap-4 text-sm text-white/70">
                  <span>{`0${indice + 1}`}</span>
                  <span aria-hidden="true" className="block h-px w-16 bg-white/40" />
                  <span>{`0${camadas.length}`}</span>
                </p>
                <p className="etiqueta">{camada.etiqueta}</p>
                <h2 className="titulo max-w-4xl text-[clamp(2rem,4.6vw,4.5rem)]">
                  {camada.linhas.map((linha) => (
                    <span key={linha} className="block">
                      {linha}
                    </span>
                  ))}
                </h2>
                <p className="max-w-xl text-lg text-white/80">{camada.texto}</p>
              </div>

              <aside className="cartao max-w-64 text-tinta">
                <p className="dado">De onde vem</p>
                <p className="mt-1 font-medium leading-snug">{camada.fonte}</p>
              </aside>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default CamadasDeFotos
