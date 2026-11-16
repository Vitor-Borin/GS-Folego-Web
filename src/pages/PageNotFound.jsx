import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import useEntradaPagina from "../hooks/useEntradaPagina"

const PageNotFound = ({ quebrou }) => {
  useEntradaPagina()

  return (
    <section className="px-2 pb-2 pt-24 md:px-5 md:pb-5 md:pt-28">
      <div className="mx-auto grid min-h-[76svh] max-w-[96rem] content-center justify-items-center gap-8 rounded-[2rem] bg-destaque px-5 py-20 text-center md:rounded-[3rem]">
        <p className="rounded-full bg-tinta px-3 py-1 text-sm font-medium text-white">
          {quebrou ? "Erro" : "Erro 404"}
        </p>
        <h1 className="js-titulo-pagina titulo text-[clamp(3rem,10vw,9rem)]">
          {quebrou ? "Algo deu errado." : "Rua sem saída."}
        </h1>
        <p className="max-w-md text-lg">
          {quebrou
            ? "Esta página não abriu como devia. Recarregue ou volte para o início."
            : "Essa página não existe ou mudou de endereço. A rede continua no mesmo lugar."}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="botao botao-tinta">
            Voltar para o início
            <PiArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/rede" className="botao botao-claro">
            Abrir a rede
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
