import CabecalhoDeSecao from "./CabecalhoDeSecao"
import { apagao } from "../data/conteudo"
import useApagao from "../hooks/useApagao"
import { fracaoSemLuz, porCento } from "../utils/autonomia"
import { montarCurva } from "../utils/desenho"

const linhaDaCurva = montarCurva(false)
const areaDaCurva = montarCurva(true)

const semLuzEm12Horas = fracaoSemLuz(720)

const Apagao = () => {
  useApagao()

  return (
    <section className="bg-white px-2 md:px-5">
      <div className="mx-auto max-w-[96rem] rounded-[2rem] bg-noite px-5 py-16 text-white md:rounded-[3rem] md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
          <CabecalhoDeSecao etiqueta={apagao.etiqueta} linhas={apagao.linhas} texto={apagao.texto} />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <figure className="js-revelar grid content-between gap-8 rounded-3xl bg-white/[0.06] p-5 md:p-8">
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="text-lg font-medium">{apagao.tituloDoGrafico}</span>
                <span className="text-sm text-white/60">Dezembro de 2025</span>
              </figcaption>

              <div className="js-grafico grid gap-3">
                <div className="relative h-56 md:h-72">
                  <div aria-hidden="true" className="absolute inset-0 grid grid-rows-4">
                    <span className="border-t border-white/10" />
                    <span className="border-t border-white/10" />
                    <span className="border-t border-white/10" />
                    <span className="border-y border-white/10" />
                  </div>

                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Curva que cai de 2,2 milhões de imóveis sem luz no pico para 158 mil no quinto dia"
                    className="js-curva absolute inset-0 size-full overflow-visible"
                  >
                    <path d={areaDaCurva} className="fill-destaque/15" />
                    <path
                      d={linhaDaCurva}
                      vectorEffect="non-scaling-stroke"
                      className="fill-none stroke-destaque stroke-[3]"
                    />
                  </svg>

                  <p className="absolute left-3 top-2 text-sm text-white/70">2,2 milhões</p>
                  <p className="absolute bottom-[9%] right-0 text-sm text-white/70">158 mil</p>

                  <div
                    className="js-marco absolute left-[10%] grid -translate-y-1/2 justify-items-start"
                    style={{ top: `${(1 - semLuzEm12Horas) * 100}%` }}
                  >
                    <span className="-ml-1.5 block size-3 rounded-full bg-white ring-4 ring-white/25" />
                    <span className="ml-4 -mt-3 rounded-xl bg-white px-3 py-2 text-sm leading-tight text-tinta">
                      <strong className="block font-medium">12 horas: a bateria acabou</strong>
                      {porCento(semLuzEm12Horas)} ainda sem luz
                    </span>
                  </div>
                </div>

                <ol aria-hidden="true" className="grid grid-cols-6 text-xs text-white/50 md:text-sm">
                  {apagao.dias.map((dia) => (
                    <li key={dia} className="last:text-right">
                      {dia}
                    </li>
                  ))}
                </ol>
              </div>
            </figure>

            <div className="js-revelar grid content-between gap-10 rounded-3xl bg-white/[0.06] p-5 md:p-8">
              <h3 className="subtitulo text-2xl md:text-3xl">{apagao.tituloDasBaterias}</h3>

              <ul className="js-baterias grid gap-7">
                {apagao.baterias.map((bateria) => (
                  <li key={bateria.nome} className="grid gap-2.5">
                    <p className="flex items-end justify-between gap-4">
                      <span className="grid">
                        <span className="text-sm text-white/60">{bateria.nome}</span>
                        <span className="text-lg font-medium">{bateria.duracao}</span>
                      </span>
                      <span className="titulo text-4xl tabular-nums md:text-5xl">
                        {porCento(fracaoSemLuz(bateria.minutos))}
                      </span>
                    </p>
                    <span aria-hidden="true" className="block h-2 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="js-barra block h-full origin-left rounded-full bg-destaque"
                        style={{ width: `${fracaoSemLuz(bateria.minutos) * 100}%` }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="js-revelar max-w-2xl text-sm text-white/55">{apagao.nota}</p>
        </div>
      </div>
    </section>
  )
}

export default Apagao
