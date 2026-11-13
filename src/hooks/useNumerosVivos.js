import { useEffect } from "react"
import { gsap } from "../gsap"

const useNumerosVivos = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray(".js-numero").forEach((numero) => {
        gsap.to(numero, {
          duration: 1.4,
          ease: "none",
          scrambleText: { text: "{original}", chars: "0123456789", speed: 0.5 },
          scrollTrigger: { trigger: numero, start: "top 85%", once: true },
        })
      })
    })

    return () => mm.revert()
  }, [])
}

export default useNumerosVivos
