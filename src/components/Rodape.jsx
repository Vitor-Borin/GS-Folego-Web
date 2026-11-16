import { Link } from "react-router"
import Marca from "./Marca"
import { equipe, linksDoMenu, projeto } from "../data/conteudo"
import { fotos } from "../data/fotos"

const Rodape = () => {
  return (
    <footer className="bg-tinta px-4 pb-10 pt-16 text-white md:px-10 print:hidden">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,0.7fr)]">
        <div className="grid content-start gap-4">
          <p className="flex items-center gap-3 text-3xl font-medium">
            <Marca />
            {projeto.nome}
          </p>
          <p className="max-w-sm text-white/60">
            Projeto acadêmico da {projeto.edicao}, FIAP, Engenharia de Software, 1º ano. Os dados da rede são
            simulados.
          </p>
          <p className="max-w-sm font-medium">Em emergência, ligue 192.</p>
        </div>

        <div className="grid content-start gap-3">
          <h2 className="text-sm text-white/60">Equipe</h2>
          <ul className="grid gap-3">
            {equipe.map((pessoa) => (
              <li key={pessoa.nome} className="grid gap-0.5 border-t border-white/15 pt-3">
                <span className="font-medium">
                  {pessoa.nome}
                  {pessoa.rm !== "" && <span className="ml-2 text-sm text-white/60">{pessoa.rm}</span>}
                </span>
                <span className="text-sm text-white/60">{pessoa.parte}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-3">
          <h2 className="text-sm text-white/60">Navegação</h2>
          <ul className="grid gap-3">
            {linksDoMenu.map((link) => (
              <li key={link.para} className="border-t border-white/15 pt-3">
                <Link to={link.para} className="font-medium hover:text-destaque">
                  {link.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <details className="mx-auto mt-14 max-w-6xl border-t border-white/15 pt-5 text-sm text-white/60">
        <summary className="cursor-pointer">Créditos das fotos (Wikimedia Commons, licenças livres)</summary>
        <ul className="mt-4 grid gap-1.5 md:grid-cols-2">
          {fotos.map((foto) => (
            <li key={foto.src}>
              <a href={foto.pagina} className="underline hover:text-white">
                {foto.autor}
              </a>
              {" · "}
              {foto.licenca} · Wikimedia Commons
            </li>
          ))}
        </ul>
      </details>
    </footer>
  )
}

export default Rodape
