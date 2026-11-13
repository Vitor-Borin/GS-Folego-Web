import { Link } from "react-router"

const PageNotFound = () => {
  return (
    <div className="grid min-h-svh content-center gap-8 bg-tinta px-4 py-32 text-papel md:px-8">
      <p className="dado text-papel/60">Erro 404</p>
      <h1 className="titulo text-[clamp(4rem,18vw,16rem)]">Rua sem saída</h1>
      <p className="max-w-md text-lg text-papel/80">
        Essa página não existe ou mudou de endereço. A rede continua no mesmo lugar.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link to="/" className="botao botao-destaque">
          Voltar para o início
        </Link>
        <Link to="/rede" className="botao border border-papel/40 hover:bg-papel hover:text-tinta">
          Abrir a rede
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
