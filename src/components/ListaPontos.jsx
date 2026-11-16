import CartaoPonto from "./CartaoPonto"
import Estado from "./Estado"

const ListaPontos = ({ pontos, redeVazia, agora, ocupado, aoConfirmar, aoApagar }) => {
  if (redeVazia) {
    return (
      <Estado
        tipo="vazio"
        titulo="Nenhum ponto cadastrado ainda"
        texto="A rede começa com o primeiro ponto. Use o botão Cadastrar ponto, no alto da página."
      />
    )
  }

  if (pontos.length === 0) {
    return (
      <Estado
        tipo="vazio"
        titulo="Nenhum ponto com esse filtro"
        texto="Tente outra busca ou outro tipo de ponto."
      />
    )
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {pontos.map((ponto) => (
        <CartaoPonto
          key={ponto.id}
          ponto={ponto}
          agora={agora}
          ocupado={ocupado}
          aoConfirmar={aoConfirmar}
          aoApagar={aoApagar}
        />
      ))}
    </ul>
  )
}

export default ListaPontos
