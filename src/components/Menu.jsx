import { useState } from "react"
import { Link } from "react-router"
import { PiList, PiX } from "react-icons/pi"
import { linksDoMenu, projeto } from "../data/conteudo"
import useMenuRetratil from "../hooks/useMenuRetratil"

const Menu = () => {
  const [aberto, setAberto] = useState(false)

  useMenuRetratil()

  return (
    <header className="js-menu fixed inset-x-3 top-3 z-50 md:inset-x-6 md:top-5">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between border border-papel/15 bg-tinta px-4 py-2 text-papel md:px-5"
      >
        <Link
          to="/"
          onClick={() => setAberto(false)}
          className="flex items-center gap-3 font-titulo text-xl font-black uppercase [font-stretch:70%]"
        >
          <span aria-hidden="true" className="block size-3 bg-destaque" />
          {projeto.nome}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {linksDoMenu.map((link) => (
            <li key={link.para}>
              <Link
                to={link.para}
                className="dado py-2 text-papel/80 transition-colors duration-200 hover:text-destaque"
              >
                {link.rotulo}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/rede/novo" className="botao botao-destaque min-h-9 px-4 py-1.5">
              Cadastrar ponto
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          onClick={() => setAberto(!aberto)}
          className="grid size-10 cursor-pointer place-items-center md:hidden"
        >
          {aberto ? <PiX size={22} aria-hidden="true" /> : <PiList size={22} aria-hidden="true" />}
          <span className="sr-only">{aberto ? "Fechar o menu" : "Abrir o menu"}</span>
        </button>
      </nav>

      {aberto && (
        <ul
          id="menu-celular"
          className="grid border border-t-0 border-papel/15 bg-tinta px-4 pb-4 pt-1 text-papel md:hidden"
        >
          {linksDoMenu.map((link) => (
            <li key={link.para} className="border-b border-papel/15">
              <Link
                to={link.para}
                onClick={() => setAberto(false)}
                className="block py-4 font-titulo text-3xl font-black uppercase [font-stretch:70%]"
              >
                {link.rotulo}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link to="/rede/novo" onClick={() => setAberto(false)} className="botao botao-destaque w-full">
              Cadastrar ponto
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Menu
