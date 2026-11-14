import Campo from "./Campo"
import { fontesDeEnergia, tiposDePonto } from "../data/opcoes"

const FormularioPonto = ({ formulario, ocupado, textoDoBotao, aoEnviar, children }) => {
  const enviar = (evento) => {
    evento.preventDefault()
    aoEnviar()
  }

  return (
    <form onSubmit={enviar} noValidate className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Campo
          id="ponto-nome"
          rotulo="Nome do ponto"
          valor={formulario.nome}
          aoMudar={formulario.setNome}
          erro={formulario.erros.nome}
          dica="Como a vizinhança conhece o lugar."
        />
        <Campo
          id="ponto-tipo"
          rotulo="Tipo"
          tipo="lista"
          opcoes={tiposDePonto}
          valor={formulario.tipo}
          aoMudar={formulario.setTipo}
          erro={formulario.erros.tipo}
        />
        <Campo
          id="ponto-bairro"
          rotulo="Bairro"
          valor={formulario.bairro}
          aoMudar={formulario.setBairro}
          erro={formulario.erros.bairro}
        />
        <Campo
          id="ponto-endereco"
          rotulo="Endereço ou referência"
          valor={formulario.endereco}
          aoMudar={formulario.setEndereco}
          erro={formulario.erros.endereco}
        />
        <Campo
          id="ponto-telefone"
          rotulo="Telefone"
          valor={formulario.telefone}
          aoMudar={formulario.setTelefone}
          erro={formulario.erros.telefone}
          dica="Vai para o plano impresso das famílias."
        />
        <Campo
          id="ponto-fonte"
          rotulo="De onde vem a energia"
          tipo="lista"
          opcoes={fontesDeEnergia}
          valor={formulario.fonte}
          aoMudar={formulario.setFonte}
          erro={formulario.erros.fonte}
        />
      </div>

      <Campo
        id="ponto-descricao"
        rotulo="Descrição"
        tipo="area"
        valor={formulario.descricao}
        aoMudar={formulario.setDescricao}
        erro={formulario.erros.descricao}
        dica={`${formulario.descricao.length} de 200 letras`}
      />

      <div className="grid gap-4 md:grid-cols-2 md:items-start">
        <Campo
          id="ponto-vagas"
          rotulo="Tomadas livres"
          tipo="numero"
          valor={formulario.vagas}
          aoMudar={formulario.setVagas}
          erro={formulario.erros.vagas}
          dica="Quantos aparelhos dá para ligar ao mesmo tempo."
        />

        <div className="grid gap-1 md:mt-7">
          <label className="flex min-h-11 cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={formulario.empresta}
              onChange={(evento) => formulario.setEmpresta(evento.target.checked)}
              className="size-5 shrink-0 accent-tinta"
            />
            <span className="font-medium">Tem bateria reserva para emprestar</span>
          </label>
          <label className="flex min-h-11 cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={formulario.ativo}
              onChange={(evento) => formulario.setAtivo(evento.target.checked)}
              className="size-5 shrink-0 accent-tinta"
            />
            <span className="font-medium">O ponto está na rede agora</span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-tinta/10 pt-6">
        <button type="submit" disabled={ocupado} className="botao botao-tinta">
          {ocupado ? "Salvando" : textoDoBotao}
        </button>
        {children}
      </div>
    </form>
  )
}

export default FormularioPonto
