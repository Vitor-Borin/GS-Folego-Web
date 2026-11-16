import { useEffect } from "react"
import { gsap, SplitText } from "../gsap"

const useEntradaPagina = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const letras = SplitText.create(".js-titulo-pagina", {
        type: "chars",
        mask: "chars",
        smartWrap: true,
        aria: "none",
      })

      gsap.from(letras.chars, {
        yPercent: 120,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.02,
        onComplete: () => letras.revert(),
      })
    })

    return () => mm.revert()
  }, [])
}

export default useEntradaPagina
