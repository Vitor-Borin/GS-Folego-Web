import CabecalhoDeSecao from "./CabecalhoDeSecao"
import { porDentro } from "../data/conteudo"

const PorDentro = () => {
  return (
    <section className="rounded-[2rem] bg-white px-4 py-24 md:rounded-[3rem] md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
        <CabecalhoDeSecao etiqueta={porDentro.etiqueta} linhas={porDentro.linhas} texto={porDentro.texto} />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="grid content-start gap-5">
            <h3 className="dado">O que cada parte faz</h3>
            <ul className="border-t border-tinta/15">
              {porDentro.partes.map((parte) => (
                <li
                  key={parte.nome}
                  className="js-revelar grid gap-1 border-b border-tinta/15 py-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6"
                >
                  <span className="text-lg font-medium">{parte.nome}</span>
                  <span className="text-tinta/70">{parte.faz}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid content-start gap-5">
            <h3 className="dado">Objetivos de Desenvolvimento Sustentável</h3>
            <ul className="border-t border-tinta/15">
              {porDentro.ods.map((item) => (
                <li
                  key={item.numero}
                  className="js-revelar grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-4 border-b border-tinta/15 py-4"
                >
                  <span className="titulo text-5xl tabular-nums">{item.numero}</span>
                  <span className="grid gap-0.5">
                    <span className="text-lg font-medium">{item.nome}</span>
                    <span className="text-tinta/70">{item.faz}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PorDentro
