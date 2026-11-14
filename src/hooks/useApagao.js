import { useEffect } from "react"
import { gsap } from "../gsap"

const useApagao = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
          trigger: ".js-grafico",
          start: "top 78%",
          end: "bottom 50%",
          scrub: 0.6,
        },
      })

      linhaDoTempo
        .fromTo(
          ".js-curva",
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 1 },
          0
        )
        .from(".js-marco", { autoAlpha: 0, x: -16, ease: "power2.out", duration: 0.2 }, 0.12)

      gsap.from(".js-barra", {
        scaleX: 0,
        duration: 1.6,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".js-baterias", start: "top 82%" },
      })
    })

    return () => mm.revert()
  }, [])
}

export default useApagao
