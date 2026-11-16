import { useEffect } from "react"
import { gsap } from "../gsap"

const usePassos = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px) and (min-height: 36rem) and (prefers-reduced-motion: no-preference)", () => {
      const itens = gsap.utils.toArray(".js-passo")
      const cartoes = gsap.utils.toArray(".js-passo-cartao")
      const ultimo = itens.length - 1

      cartoes.forEach((cartao, indice) => {
        if (indice === ultimo) {
          return
        }

        gsap.to(cartao, {
          scale: 1 - (ultimo - indice) * 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: itens[indice + 1],
            start: "top bottom",
            endTrigger: itens[ultimo],
            end: "top 20%",
            scrub: true,
          },
        })
      })
    })

    return () => mm.revert()
  }, [])
}

export default usePassos
