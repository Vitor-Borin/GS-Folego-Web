import CamadasDeFotos from "../components/CamadasDeFotos"
import Constelacao from "../components/Constelacao"
import LogoDeFotos from "../components/LogoDeFotos"
import RedeAgora from "../components/RedeAgora"
import usePontos from "../hooks/usePontos"
import useTopoDaPagina from "../hooks/useTopoDaPagina"
import { contarConfirmados } from "../utils/regras"

const HomePage = () => {
  const { pontos, carregando, erro, agora } = usePontos()

  useTopoDaPagina()

  return (
    <>
      <Constelacao pontosComEnergia={contarConfirmados(pontos, agora)} carregando={carregando} erro={erro} />
      <CamadasDeFotos />
      <LogoDeFotos />
      <RedeAgora pontos={pontos} carregando={carregando} erro={erro} agora={agora} />
    </>
  )
}

export default HomePage
