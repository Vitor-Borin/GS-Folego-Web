import { useEffect } from "react"
import { gsap } from "../gsap"

const useEntradaDaLista = (pronta) => {
  useEffect(() => {
    if (!pronta) {
      return
    }

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".js-entrada", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.06,
        clearProps: "transform,opacity,visibility",
      })
    })

    return () => mm.revert()
  }, [pronta])
}

export default useEntradaDaLista
