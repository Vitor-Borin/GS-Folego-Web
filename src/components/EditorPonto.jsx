import { useState } from "react"
import FormularioPonto from "./FormularioPonto"
import useFormularioPonto from "../hooks/useFormularioPonto"

const EditorPonto = ({ ponto, ocupado, aoSalvar }) => {
  const formulario = useFormularioPonto(ponto)
  const [salvo, setSalvo] = useState(false)

  const enviar = () => {
    setSalvo(false)

    if (!formulario.validar()) {
      return
    }

    aoSalvar(formulario.montarDados()).then((deuCerto) => {
      setSalvo(deuCerto)
    })
  }

  return (
    <FormularioPonto
      formulario={formulario}
      ocupado={ocupado}
      textoDoBotao="Salvar alterações"
      aoEnviar={enviar}
    >
      {salvo && (
        <p role="status" className="etiqueta">
          Alterações salvas.
        </p>
      )}
    </FormularioPonto>
  )
}

export default EditorPonto
