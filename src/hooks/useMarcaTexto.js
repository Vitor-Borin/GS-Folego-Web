import { useEffect } from "react"
import { gsap } from "../gsap"

const useMarcaTexto = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(".js-marca-texto", {
        backgroundSize: "100% 40%",
        ease: "none",
        scrollTrigger: {
          trigger: ".js-marca-texto",
          start: "top 78%",
          end: "top 42%",
          scrub: 0.5,
        },
      })
    })

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".js-marca-texto", { backgroundSize: "100% 40%" })
    })

    return () => mm.revert()
  }, [])
}

export default useMarcaTexto
