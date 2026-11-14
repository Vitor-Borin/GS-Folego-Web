import { Link } from "react-router"
import { PiArrowRight } from "react-icons/pi"
import CabecalhoDeSecao from "./CabecalhoDeSecao"
import ControleDeslizante from "./ControleDeslizante"
import { simulador } from "../data/conteudo"
import { aparelhosDeExemplo, bateriasDeExemplo, estadosDaBateria } from "../data/opcoes"
import useAutonomia from "../hooks/useAutonomia"
import { porCento, textoDaDuracao } from "../utils/autonomia"

const coresDoEstado = {
  reserva: "bg-calma text-white",
  alerta: "bg-destaque text-tinta",
  critico: "bg-perigo text-white",
}

const Simulador = () => {
  const { energia, setEnergia, consumo, setConsumo, minutos, estado, semLuz } = useAutonomia()

  return (
    <section className="px-3 pb-24 md:px-6 md:pb-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:gap-16">
        <CabecalhoDeSecao etiqueta={simulador.etiqueta} linhas={simulador.linhas} texto={simulador.texto} />

        <div className="js-revelar grid gap-3 rounded-[2rem] bg-white p-3 lg:grid-cols-2">
          <div className="grid content-between gap-10 p-4 md:p-8">
            <ControleDeslizante
              id="simulador-energia"
              rotulo="Bateria"
              valor={energia}
              unidade="Wh"
              minimo={20}
              maximo={2000}
              passo={4}
              aoMudar={setEnergia}
              exemplos={bateriasDeExemplo}
            />
            <ControleDeslizante
              id="simulador-consumo"
              rotulo="Consumo do aparelho"
              valor={consumo}
              unidade="W"
              minimo={20}
              maximo={600}
              passo={10}
              aoMudar={setConsumo}
              exemplos={aparelhosDeExemplo}
            />
            <div className="grid justify-items-start gap-4">
              <p className="dado">{simulador.nota}</p>
              <Link to="/plano" className="botao botao-linha">
                Montar meu plano de apagão
                <PiArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div
            aria-live="polite"
            className={`grid content-between gap-10 rounded-[1.5rem] p-6 transition-colors duration-500 md:p-10 ${coresDoEstado[estado]}`}
          >
            <ul className="grid grid-cols-3 gap-1.5 text-center text-sm">
              {estadosDaBateria.map((item) => (
                <li
                  key={item.valor}
                  className={`grid gap-0.5 rounded-2xl px-2 py-2 transition-colors duration-500 ${
                    item.valor === estado ? "bg-white text-tinta" : "bg-current/10"
                  }`}
                >
                  <span className="font-medium">{item.rotulo}</span>
                  <span className="whitespace-nowrap text-xs opacity-70">{item.faixa}</span>
                </li>
              ))}
            </ul>

            <p className="grid gap-2">
              <span className="text-lg">A bateria dura</span>
              <span className="titulo text-[clamp(4.5rem,10vw,9rem)] tabular-nums">{textoDaDuracao(minutos)}</span>
            </p>

            <div className="grid gap-4">
              <p className="max-w-sm text-lg">{simulador.mensagens[estado]}</p>
              <p className="border-t border-current/20 pt-4 text-sm opacity-80">
                Pelo modelo do apagão de dezembro de 2025, {porCento(semLuz)} dos imóveis ainda estariam sem luz
                quando essa bateria acabasse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Simulador
