import { Outlet } from "react-router"
import Menu from "./components/Menu"
import Rodape from "./components/Rodape"

const App = () => {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-3 top-3 z-[60] -translate-y-[300%] bg-destaque px-4 py-3 text-sm font-bold text-tinta focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Menu />
      <main id="conteudo">
        <Outlet />
      </main>
      <Rodape />
    </>
  )
}

export default App
