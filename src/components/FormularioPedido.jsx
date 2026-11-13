import Campo from "./Campo"
import { prioridades } from "../data/opcoes"

const FormularioPedido = ({ formulario, ocupado, aoEnviar }) => {
  const enviar = (evento) => {
    evento.preventDefault()
    aoEnviar()
  }

  return (
    <form onSubmit={enviar} noValidate className="grid gap-3">
      <Campo
        id="pedido-titulo"
        rotulo="Do que você precisa?"
        valor={formulario.titulo}
        aoMudar={formulario.setTitulo}
        erro={formulario.erros.titulo}
        dica="Em poucas palavras."
      />
      <Campo
        id="pedido-bairro"
        rotulo="Bairro"
        valor={formulario.bairro}
        aoMudar={formulario.setBairro}
        erro={formulario.erros.bairro}
      />
      <Campo
        id="pedido-prioridade"
        rotulo="Prioridade"
        tipo="lista"
        opcoes={prioridades}
        valor={formulario.prioridade}
        aoMudar={formulario.setPrioridade}
        erro={formulario.erros.prioridade}
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
      <button type="submit" disabled={ocupado} className="botao botao-tinta justify-self-start">
        {ocupado ? "Enviando" : "Abrir pedido"}
      </button>
    </form>
  )
}

export default FormularioPedido
