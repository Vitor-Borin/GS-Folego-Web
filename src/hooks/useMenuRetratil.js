import { useEffect } from "react"
import { gsap } from "../gsap"

const useMenuRetratil = () => {
  useEffect(() => {
    let ultimaPosicao = window.scrollY
    let escondido = false

    const aoRolar = () => {
      const posicao = window.scrollY
      const diferenca = posicao - ultimaPosicao

      if (Math.abs(diferenca) < 6) {
        return
      }

      const esconder = diferenca > 0 && posicao > 200

      if (esconder !== escondido) {
        escondido = esconder
        gsap.to(".js-menu", {
          yPercent: esconder ? -170 : 0,
          duration: 0.45,
          ease: "power3.out",
          overwrite: true,
        })
      }

      ultimaPosicao = posicao
    }

    window.addEventListener("scroll", aoRolar)

    return () => {
      window.removeEventListener("scroll", aoRolar)
    }
  }, [])
}

export default useMenuRetratil
