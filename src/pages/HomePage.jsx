import ChamadaRede from "../components/ChamadaRede"
import FraseAcende from "../components/FraseAcende"
import GaleriaLogo from "../components/GaleriaLogo"
import Hero from "../components/Hero"
import Numeros from "../components/Numeros"
import Pilha from "../components/Pilha"
import usePontos from "../hooks/usePontos"
import useTopoDaPagina from "../hooks/useTopoDaPagina"

const HomePage = () => {
  const { pontos, carregando, erro, agora } = usePontos()

  useTopoDaPagina()

  return (
    <>
      <Hero totalDePontos={pontos.length} carregando={carregando} erro={erro} />
      <FraseAcende />
      <Pilha />
      <GaleriaLogo />
      <Numeros />
      <ChamadaRede pontos={pontos} carregando={carregando} erro={erro} agora={agora} />
    </>
  )
}

export default HomePage
