import { galeria, projeto } from "../data/conteudo"
import { fotos } from "../data/fotos"
import { classeDasColunas, logo } from "../data/logo"
import useGaleriaLogo from "../hooks/useGaleriaLogo"
import { montarCelulas } from "../utils/desenho"

const celulas = montarCelulas(logo)

const tonsDeEspera = ["bg-papel", "bg-papel/70", "bg-destaque", "bg-papel/40"]

const GaleriaLogo = () => {
  useGaleriaLogo()

  return (
    <section className="js-galeria relative grid h-svh place-items-center overflow-hidden bg-tinta px-4 text-papel">
      <p className="js-galeria-legenda dado absolute left-4 top-24 max-w-64 text-papel/70 md:left-8 md:top-28">
        {galeria.legenda}
      </p>

      <div
        role="img"
        aria-label={`Fotos do território formando o logo do projeto ${projeto.nome}`}
        className={`galeria-grade grid auto-rows-[var(--celula)] gap-[calc(var(--celula)*0.1)] ${classeDasColunas}`}
      >
        {celulas.map((celula) =>
          celula.cheia ? (
            <div key={celula.id} className="js-peca relative overflow-hidden">
              {fotos.length > 0 ? (
                <img
                  src={fotos[(celula.numero - 1) % fotos.length].src}
                  alt=""
                  className="size-full object-cover"
                />
              ) : (
                <span className={`block size-full ${tonsDeEspera[celula.numero % tonsDeEspera.length]}`} />
              )}
              <span className="js-peca-cor absolute inset-0 bg-destaque opacity-0" />
            </div>
          ) : (
            <span key={celula.id} />
          )
        )}
      </div>

      <p className="js-galeria-fecho subtitulo absolute inset-x-4 bottom-10 mx-auto max-w-3xl text-center text-2xl md:bottom-14 md:text-4xl">
        {galeria.fecho}
      </p>
    </section>
  )
}

export default GaleriaLogo
