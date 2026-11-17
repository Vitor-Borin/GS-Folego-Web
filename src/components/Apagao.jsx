import CabecalhoDeSecao from "./CabecalhoDeSecao"
import { apagao } from "../data/conteudo"
import useApagao from "../hooks/useApagao"
import { DIAS_DO_MODELO, fracaoSemLuz, porCento } from "../utils/autonomia"
import { montarCurva } from "../utils/desenho"

const linhaDaCurva = montarCurva(false)
const areaDaCurva = montarCurva(true)

const larguraDaFaixa = (720 / (DIAS_DO_MODELO * 1440)) * 100

const Apagao = () => {
  useApagao()

  return (
    <section className="bg-white px-2 md:px-5">
      <div className="mx-auto max-w-[96rem] rounded-[2rem] bg-noite px-5 py-16 text-white md:rounded-[3rem] md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
          <CabecalhoDeSecao etiqueta={apagao.etiqueta} linhas={apagao.linhas} texto={apagao.texto} />

          <figure className="js-revelar grid gap-8 rounded-3xl bg-white/[0.06] p-5 md:p-8">
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="text-lg font-medium">{apagao.tituloDoGrafico}</span>
              <span className="text-sm text-white/60">Dezembro de 2025 · estimativa do modelo</span>
            </figcaption>

            <div className="js-grafico grid gap-3">
              <div className="relative mt-6 h-64 md:h-80 lg:h-[22rem]">
                <div aria-hidden="true" className="absolute inset-0 grid grid-rows-4">
                  <span className="border-t border-white/10" />
                  <span className="border-t border-white/10" />
                  <span className="border-t border-white/10" />
                  <span className="border-y border-white/10" />
                </div>

                <div
                  aria-hidden="true"
                  className="js-faixa absolute inset-y-0 left-0 origin-left border-r border-dashed border-destaque/70 bg-destaque/10"
                  style={{ width: `${larguraDaFaixa}%` }}
                />

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Curva que cai de 2,2 milhões de imóveis sem luz no pico para 158 mil no quinto dia"
                  className="js-curva absolute inset-0 size-full overflow-visible"
                >
                  <path d={areaDaCurva} className="fill-destaque/15" />
                  <path d={linhaDaCurva} vectorEffect="non-scaling-stroke" className="fill-none stroke-destaque stroke-[3]" />
                </svg>

                <p className="absolute -top-6 left-0 text-sm text-white/70">2,2 milhões</p>
                <p className="absolute bottom-[9%] right-0 text-sm text-white/70">158 mil</p>

                <p
                  className="js-marco absolute top-2 ml-3 max-w-[70%] rounded-xl bg-white px-2.5 py-1.5 text-xs leading-tight text-tinta sm:ml-4 sm:px-3 sm:py-2 sm:text-sm"
                  style={{ left: `${larguraDaFaixa}%` }}
                >
                  <strong className="block font-medium">{apagao.faixa.titulo}</strong>
                  {apagao.faixa.texto}
                </p>
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

          <div className="grid gap-5 md:gap-6">
            <h3 className="js-revelar subtitulo text-2xl md:text-3xl">{apagao.tituloDasBaterias}</h3>

            <ul className="js-baterias grid gap-4 md:grid-cols-3">
              {apagao.baterias.map((bateria) => (
                <li key={bateria.nome} className="js-revelar grid gap-5 rounded-3xl bg-white/[0.06] p-5 md:p-7">
                  <p className="grid">
                    <span className="text-sm text-white/60">{bateria.nome}</span>
                    <span className="text-xl font-medium">{bateria.duracao}</span>
                  </p>
                  <p className="titulo text-6xl tabular-nums lg:text-[5rem]">
                    {porCento(fracaoSemLuz(bateria.minutos))}
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

          <p className="js-revelar max-w-2xl text-sm text-white/55">{apagao.nota}</p>
        </div>
      </div>
    </section>
  )
}

export default Apagao
