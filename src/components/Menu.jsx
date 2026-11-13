import { useState } from "react"
import { Link } from "react-router"
import { PiList, PiX } from "react-icons/pi"
import Marca from "./Marca"
import { linksDoMenu, projeto } from "../data/conteudo"
import useMenuRetratil from "../hooks/useMenuRetratil"

const Menu = () => {
  const [aberto, setAberto] = useState(false)

  useMenuRetratil()

  return (
    <header className="js-menu fixed inset-x-3 top-3 z-50 md:inset-x-6 md:top-5">
      <nav aria-label="Principal" className="flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => setAberto(false)}
          className="flex min-h-11 items-center gap-2 rounded-full bg-white py-2 pl-3 pr-4 text-lg font-medium shadow-sm"
        >
          <Marca />
          {projeto.nome}
        </Link>

        <ul className="hidden items-center gap-1 rounded-full bg-white p-1 shadow-sm md:flex">
          {linksDoMenu.map((link) => (
            <li key={link.para}>
              <Link
                to={link.para}
                className="block rounded-full px-4 py-2 text-[0.95rem] transition-colors duration-200 hover:bg-tinta/10"
              >
                {link.rotulo}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/rede/novo" className="botao botao-tinta min-h-9 px-4 py-2">
              Cadastrar ponto
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          onClick={() => setAberto(!aberto)}
          className="grid size-11 cursor-pointer place-items-center rounded-full bg-white shadow-sm md:hidden"
        >
          {aberto ? <PiX size={22} aria-hidden="true" /> : <PiList size={22} aria-hidden="true" />}
          <span className="sr-only">{aberto ? "Fechar o menu" : "Abrir o menu"}</span>
        </button>
      </nav>

      {aberto && (
        <ul id="menu-celular" className="mt-2 grid gap-1 rounded-3xl bg-white p-3 shadow-sm md:hidden">
          {linksDoMenu.map((link) => (
            <li key={link.para}>
              <Link
                to={link.para}
                onClick={() => setAberto(false)}
                className="block rounded-2xl px-4 py-3 text-2xl font-medium hover:bg-tinta/10"
              >
                {link.rotulo}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/rede/novo" onClick={() => setAberto(false)} className="botao botao-tinta w-full">
              Cadastrar ponto
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Menu
