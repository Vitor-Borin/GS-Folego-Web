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
        charsClass: "letra",
        smartWrap: true,
      })

      gsap.from(letras.chars, { yPercent: 120, duration: 0.9, ease: "expo.out", stagger: 0.025 })
      gsap.from(".js-titulo-pagina", { fontStretch: "110%", duration: 1.3, ease: "expo.out" })
    })

    return () => mm.revert()
  }, [])
}

export default useEntradaPagina
