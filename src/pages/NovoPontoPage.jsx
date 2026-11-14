import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { PiArrowLeft } from "react-icons/pi"
import CabecalhoPagina from "../components/CabecalhoPagina"
import CartaoResumo from "../components/CartaoResumo"
import FormularioPonto from "../components/FormularioPonto"
import { pontoVazio } from "../data/opcoes"
import useFormularioPonto from "../hooks/useFormularioPonto"
import usePontos from "../hooks/usePontos"
import { pontoRepetido, rotuloDoTipo, textoDaOferta } from "../utils/regras"

const NovoPontoPage = () => {
  const navigate = useNavigate()
  const { pontos, ocupado, aviso, adicionarPonto } = usePontos()
  const formulario = useFormularioPonto(pontoVazio)
  const [repetido, setRepetido] = useState(false)

  const enviar = () => {
    setRepetido(false)

    if (!formulario.validar()) {
      return
    }

    if (pontoRepetido(pontos, formulario.nome, formulario.bairro)) {
      setRepetido(true)
      return
    }

    adicionarPonto(formulario.montarDados()).then((novo) => {
      if (novo !== null) {
        navigate(`/rede/${novo.id}`)
      }
    })
  }

  const tipoDaPrevia = formulario.tipo === "" ? "Tipo" : rotuloDoTipo(formulario.tipo)
  const bairroDaPrevia = formulario.bairro.trim() === "" ? "Bairro" : formulario.bairro
  const nomeDaPrevia = formulario.nome.trim() === "" ? "Nome do ponto" : formulario.nome

  return (
    <div className="pagina lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
      <div className="grid gap-10 lg:sticky lg:top-32">
        <CabecalhoPagina
          rotulo="Rede do bairro"
          titulo="Cadastrar um ponto"
          texto="Gerador, placa solar, nobreak ou bateria reserva. Cadastre agora, antes do apagão: é assim que o ponto entra no plano das famílias do bairro."
          compacto
        />

        <div className="grid max-w-sm gap-3">
          <p className="dado">Assim o ponto aparece na rede</p>
          <div className="md:-rotate-2">
            <CartaoResumo
              rotulo={`${tipoDaPrevia} · ${bairroDaPrevia}`}
              nome={nomeDaPrevia}
              situacao={formulario.ativo ? "Com energia, confirmado agora" : "Fora da rede no momento"}
              vagas={textoDaOferta({
                fonte: formulario.fonte,
                vagas: formulario.vagas === "" ? 0 : formulario.vagas,
                empresta: formulario.empresta,
              })}
              aceso={formulario.ativo}
            />
          </div>
        </div>

        <Link to="/rede" className="botao botao-linha justify-self-start">
          <PiArrowLeft size={18} aria-hidden="true" />
          Voltar para a rede
        </Link>
      </div>

      <section className="folha">
        <FormularioPonto
          formulario={formulario}
          ocupado={ocupado}
          textoDoBotao="Cadastrar ponto"
          aoEnviar={enviar}
        >
          {repetido && (
            <p role="alert" className="font-medium text-perigo">
              Já existe um ponto com esse nome nesse bairro.
            </p>
          )}
          {aviso !== "" && (
            <p role="alert" className="font-medium text-perigo">
              {aviso}
            </p>
          )}
        </FormularioPonto>
      </section>
    </div>
  )
}

export default NovoPontoPage
