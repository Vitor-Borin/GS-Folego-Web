import { useEffect } from "react"
import { gsap } from "../gsap"

const useTroca = (seletor, escolha) => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        seletor,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06 }
      )
    })

    return () => mm.revert()
  }, [seletor, escolha])
}

export default useTroca
