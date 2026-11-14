import { useEffect } from "react"
import { gsap, ScrollTrigger } from "../gsap"

const useRevelar = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(".js-revelar", { autoAlpha: 0, y: 48 })

      ScrollTrigger.batch(".js-revelar", {
        start: "top 90%",
        once: true,
        onEnter: (elementos) => {
          gsap.to(elementos, {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.08,
            overwrite: true,
          })
        },
      })
    })

    return () => mm.revert()
  }, [])
}

export default useRevelar
