import { useEffect, useState } from "react"

const useMenuRetratil = () => {
  const [escondido, setEscondido] = useState(false)

  useEffect(() => {
    let ultimaPosicao = window.scrollY

    const aoRolar = () => {
      const posicao = window.scrollY
      const diferenca = posicao - ultimaPosicao

      if (diferenca > -6 && diferenca < 6) {
        return
      }

      setEscondido(diferenca > 0 && posicao > 200)
      ultimaPosicao = posicao
    }

    window.addEventListener("scroll", aoRolar)

    return () => {
      window.removeEventListener("scroll", aoRolar)
    }
  }, [])

  return escondido
}

export default useMenuRetratil
