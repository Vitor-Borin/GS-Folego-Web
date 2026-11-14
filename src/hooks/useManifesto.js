import { useEffect } from "react"
import { gsap } from "../gsap"

const useManifesto = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
          trigger: ".js-manifesto",
          start: "top 80%",
          end: "bottom 55%",
          scrub: 0.4,
        },
      })

      linhaDoTempo
        .fromTo(".js-palavra", { opacity: 0.14 }, { opacity: 1, ease: "none", duration: 0.2, stagger: 0.1 }, 0)
        .from(
          ".js-manifesto-foto",
          { scaleX: 0, opacity: 0, ease: "power2.out", duration: 0.8, stagger: 1.4 },
          0.6
        )
    })

    return () => mm.revert()
  }, [])
}

export default useManifesto
