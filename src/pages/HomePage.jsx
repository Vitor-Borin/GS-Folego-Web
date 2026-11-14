import Apagao from "../components/Apagao"
import ChamadaFinal from "../components/ChamadaFinal"
import Citacao from "../components/Citacao"
import ComoFunciona from "../components/ComoFunciona"
import Constelacao from "../components/Constelacao"
import LogoDeFotos from "../components/LogoDeFotos"
import Manifesto from "../components/Manifesto"
import Perguntas from "../components/Perguntas"
import PorDentro from "../components/PorDentro"
import QuemFaz from "../components/QuemFaz"
import RedeAgora from "../components/RedeAgora"
import Simulador from "../components/Simulador"
import usePontos from "../hooks/usePontos"
import useRevelar from "../hooks/useRevelar"
import useTopoDaPagina from "../hooks/useTopoDaPagina"
import { contarConfirmados } from "../utils/regras"

const HomePage = () => {
  const { pontos, carregando, erro, agora } = usePontos()

  useTopoDaPagina()
  useRevelar()

  return (
    <>
      <Constelacao pontosComEnergia={contarConfirmados(pontos, agora)} carregando={carregando} erro={erro} />
      <Manifesto />
      <Apagao />
      <Citacao />
      <ComoFunciona />
      <Simulador />
      <LogoDeFotos />
      <QuemFaz />
      <RedeAgora pontos={pontos} carregando={carregando} erro={erro} agora={agora} />
      <PorDentro />
      <Perguntas />
      <ChamadaFinal />
    </>
  )
}

export default HomePage
