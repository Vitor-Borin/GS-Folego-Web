import { Link } from "react-router"
import { assinatura, equipe, linksDoMenu, projeto } from "../data/conteudo"
import { fotos } from "../data/fotos"
import { logo } from "../data/logo"
import { montarCelulas } from "../utils/desenho"

const celulas = montarCelulas(logo)

const Rodape = () => {
  return (
    <footer className="px-2 pb-2 md:px-5 md:pb-5 print:hidden">
      <div className="mx-auto grid max-w-[96rem] gap-10 rounded-[2rem] bg-tinta px-5 py-12 text-white md:rounded-[3rem] md:p-12 lg:gap-14 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-20">
          <div className="grid content-between gap-10">
            <div
              aria-hidden="true"
              className="grid w-max auto-rows-[min(2.1rem,7vw)] grid-cols-[repeat(9,min(2.1rem,7vw))] gap-[3px]"
            >
              {celulas.map((celula) =>
                celula.cheia ? (
                  <span key={celula.id} className={`rounded-[3px] ${celula.acesa ? "bg-destaque" : "bg-white/15"}`} />
                ) : (
                  <span key={celula.id} />
                )
              )}
            </div>

            <div className="grid gap-2">
              <p className="titulo text-5xl md:text-6xl">{projeto.nome}</p>
              <p className="text-white/60">{assinatura.frase}</p>
            </div>
          </div>

          <div className="grid content-between gap-12">
            <div className="grid gap-10 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-12">
              <nav aria-label="Rodapé" className="grid content-start gap-3">
                <h2 className="text-sm text-white/60">Navegação</h2>
                <ul className="grid gap-2">
                  {linksDoMenu.map((link) => (
                    <li key={link.para}>
                      <Link to={link.para} className="text-xl font-medium hover:text-destaque">
                        {link.rotulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="grid content-start gap-3">
                <h2 className="text-sm text-white/60">Equipe</h2>
                <ul className="grid gap-3">
                  {equipe.map((pessoa) => (
                    <li key={pessoa.nome} className="grid gap-0.5 border-t border-white/15 pt-3">
                      <span className="font-medium">
                        {pessoa.nome}
                        {pessoa.rm !== "" && <span className="ml-2 text-sm font-normal text-white/60">{pessoa.rm}</span>}
                      </span>
                      {pessoa.parte !== "" && <span className="text-sm text-white/60">{pessoa.parte}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <p className="max-w-md text-sm text-white/60">
                Projeto acadêmico da {projeto.edicao}, FIAP, Engenharia de Software, 1º ano. Os dados da rede são
                simulados.
              </p>
              <p className="grid w-max rounded-3xl bg-destaque px-7 py-5 text-tinta">
                <span className="text-sm font-medium">Em emergência, ligue</span>
                <span className="titulo text-7xl">192</span>
              </p>
            </div>
          </div>
        </div>

        <details className="border-t border-white/15 pt-3 text-sm text-white/60">
          <summary className="cursor-pointer py-2.5">Créditos das fotos (Wikimedia Commons, licenças livres)</summary>
          <ul className="mt-2 grid gap-1.5 md:grid-cols-2">
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
      </div>
    </footer>
  )
}

export default Rodape
