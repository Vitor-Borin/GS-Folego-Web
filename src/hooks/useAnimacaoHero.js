import { useEffect } from "react"
import { gsap, SplitText } from "../gsap"

const useAnimacaoHero = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const letras = SplitText.create(".js-hero-linha", {
        type: "chars",
        mask: "chars",
        charsClass: "letra",
      })

      const entrada = gsap.timeline({ defaults: { ease: "expo.out" } })

      entrada
        .from(".js-hero-titulo", { fontStretch: "150%", duration: 1.8 })
        .from(letras.chars, { yPercent: 120, duration: 1.2, stagger: 0.04 }, 0)
        .from(".js-hero-apoio", { autoAlpha: 0, y: 20, duration: 0.9, stagger: 0.12 }, 0.5)

      gsap.utils.toArray(".js-hero-linha").forEach((linha, indice) => {
        gsap.to(linha, {
          xPercent: indice % 2 === 0 ? -14 : 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".js-hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        })
      })
    })

    return () => mm.revert()
  }, [])
}

export default useAnimacaoHero
