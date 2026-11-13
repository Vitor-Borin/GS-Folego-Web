import { Link } from "react-router"
import { equipe, linksDoMenu, ods, projeto } from "../data/conteudo"

const Rodape = () => {
  return (
    <footer className="border-t border-tinta bg-papel px-4 pb-10 pt-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="grid content-start gap-4">
          <p className="titulo text-5xl md:text-6xl">{projeto.nome}</p>
          <p className="max-w-sm text-tinta/70">
            Projeto acadêmico da {projeto.edicao}, FIAP, Engenharia de Software, 1º ano.
          </p>
        </div>

        <div className="grid content-start gap-3">
          <h2 className="dado text-tinta/60">Equipe</h2>
          <ul className="grid gap-2">
            {equipe.map((pessoa) => (
              <li key={pessoa.nome} className="grid gap-0.5 border-t border-tinta/15 pt-2">
                <span className="font-semibold">
                  {pessoa.nome}
                  {pessoa.rm !== "" && <span className="dado ml-2 text-tinta/60">{pessoa.rm}</span>}
                </span>
                <span className="text-sm text-tinta/70">{pessoa.parte}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-3">
          <h2 className="dado text-tinta/60">Navegação</h2>
          <ul className="grid gap-2">
            {linksDoMenu.map((link) => (
              <li key={link.para} className="border-t border-tinta/15 pt-2">
                <Link to={link.para} className="font-semibold hover:underline">
                  {link.rotulo}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2">
            {ods.map((item) => (
              <li key={item} className="dado border border-tinta/30 px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
