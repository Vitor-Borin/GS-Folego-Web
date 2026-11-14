import { Outlet } from "react-router"
import Menu from "./components/Menu"
import Rodape from "./components/Rodape"

const App = () => {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-3 top-3 z-[60] -translate-y-[300%] rounded-full bg-destaque px-4 py-3 text-sm font-medium text-tinta focus:translate-y-0 print:hidden"
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
