import CartaoPonto from "./CartaoPonto"
import Estado from "./Estado"

const ListaPontos = ({ pontos, agora, ocupado, aoConfirmar, aoApagar }) => {
  if (pontos.length === 0) {
    return (
      <Estado
        tipo="vazio"
        titulo="Nenhum ponto com esse filtro"
        texto="Tente outra busca, outro tipo, ou cadastre o primeiro ponto do bairro."
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
