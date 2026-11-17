import CabecalhoDeSecao from "./CabecalhoDeSecao"
import { bairro } from "../data/conteudo"

const maiorValor = bairro.regioes[0].horas

const Bairro = () => {
  return (
    <section className="bg-white px-4 pt-24 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
        <CabecalhoDeSecao etiqueta={bairro.etiqueta} linhas={bairro.linhas} texto={bairro.texto} />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <figure className="js-revelar grid content-start gap-8 rounded-3xl bg-papel p-5 md:p-8">
            <figcaption className="grid gap-1">
              <span className="text-lg font-medium">{bairro.tituloDoGrafico}</span>
              <span className="dado">{bairro.legendaDoGrafico}</span>
            </figcaption>

            <ul className="grid gap-6">
              {bairro.regioes.map((regiao) => (
                <li key={regiao.nome} className="grid gap-2.5">
                  <p className="flex items-end justify-between gap-4">
                    <span className={regiao.destaque ? "font-medium" : "text-tinta/70"}>{regiao.nome}</span>
                    <span className="titulo whitespace-nowrap text-3xl tabular-nums md:text-4xl">{regiao.texto}</span>
                  </p>
                  <span aria-hidden="true" className="block h-3 overflow-hidden rounded-full bg-tinta/10">
                    <span
                      className={`block h-full rounded-full ${regiao.destaque ? "bg-perigo" : "bg-tinta/40"}`}
                      style={{ width: `${(regiao.horas / maiorValor) * 100}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </figure>

          <ul className="content-start border-t border-tinta/15">
            {bairro.fatos.map((fato) => (
              <li
                key={fato.valor}
                className="js-revelar grid gap-1 border-b border-tinta/15 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center sm:gap-4"
              >
                <span className="titulo whitespace-nowrap text-4xl tabular-nums md:text-5xl">{fato.valor}</span>
                <span className="text-tinta/70">{fato.texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="js-revelar grid gap-4">
          <p className="max-w-2xl text-xl md:text-2xl">{bairro.nota}</p>
          <p className="dado max-w-2xl">{bairro.fonte}</p>
        </div>
      </div>
    </section>
  )
}

export default Bairro
