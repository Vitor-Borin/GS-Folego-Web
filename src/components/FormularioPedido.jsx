import Campo from "./Campo"
import { tiposDeAjuda } from "../data/opcoes"

const FormularioPedido = ({ formulario, ocupado, travado, aoEnviar }) => {
  const enviar = (evento) => {
    evento.preventDefault()
    aoEnviar()
  }

  return (
    <form onSubmit={enviar} noValidate className="grid gap-3">
      <Campo
        id="pedido-ajuda"
        rotulo="Que ajuda você precisa?"
        tipo="lista"
        opcoes={tiposDeAjuda}
        valor={formulario.ajuda}
        aoMudar={formulario.setAjuda}
        erro={formulario.erros.ajuda}
      />
      <Campo
        id="pedido-minutos"
        rotulo="Minutos de bateria que sobram"
        tipo="numero"
        valor={formulario.minutos}
        aoMudar={formulario.setMinutos}
        erro={formulario.erros.minutos}
        dica="É o que define o lugar na fila."
      />
      <Campo
        id="pedido-titulo"
        rotulo="Resumo do pedido"
        valor={formulario.titulo}
        aoMudar={formulario.setTitulo}
        erro={formulario.erros.titulo}
        dica="Em poucas palavras. Não escreva doença nem diagnóstico."
      />
      <Campo
        id="pedido-bairro"
        rotulo="Bairro"
        valor={formulario.bairro}
        aoMudar={formulario.setBairro}
        erro={formulario.erros.bairro}
      />
      <Campo
        id="pedido-detalhe"
        rotulo="Detalhe"
        tipo="area"
        valor={formulario.detalhe}
        aoMudar={formulario.setDetalhe}
        erro={formulario.erros.detalhe}
        dica={`${formulario.detalhe.length} de 200 letras`}
      />
      <button type="submit" disabled={ocupado || travado} className="botao botao-tinta justify-self-start">
        {ocupado ? "Enviando" : "Abrir pedido"}
      </button>
    </form>
  )
}

export default FormularioPedido
