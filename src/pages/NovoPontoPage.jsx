import { useState } from "react"
import { Link, useNavigate } from "react-router"
import CabecalhoPagina from "../components/CabecalhoPagina"
import FormularioPonto from "../components/FormularioPonto"
import { pontoVazio } from "../data/opcoes"
import useFormularioPonto from "../hooks/useFormularioPonto"
import usePontos from "../hooks/usePontos"
import { pontoRepetido } from "../utils/regras"

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

  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-8 md:pt-40">
      <CabecalhoPagina rotulo="Rede do bairro" titulo="Novo ponto">
        <Link to="/rede" className="botao botao-linha">
          Voltar para a rede
        </Link>
      </CabecalhoPagina>

      <div className="pt-10">
        <FormularioPonto
          formulario={formulario}
          ocupado={ocupado}
          textoDoBotao="Cadastrar ponto"
          aoEnviar={enviar}
        >
          {repetido && (
            <p role="alert" className="font-semibold text-perigo">
              Já existe um ponto com esse nome nesse bairro.
            </p>
          )}
          {aviso !== "" && (
            <p role="alert" className="font-semibold text-perigo">
              {aviso}
            </p>
          )}
        </FormularioPonto>
      </div>
    </div>
  )
}

export default NovoPontoPage
