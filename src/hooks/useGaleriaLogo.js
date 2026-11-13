import { useEffect } from "react"
import { gsap } from "../gsap"
import { pseudoAleatorio } from "../utils/desenho"

const useGaleriaLogo = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
          trigger: ".js-galeria",
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      linhaDoTempo
        .from(".js-peca", {
          x: (indice) => (pseudoAleatorio(indice + 1) - 0.5) * window.innerWidth * 0.92,
          y: (indice) => (pseudoAleatorio(indice + 51) - 0.5) * window.innerHeight * 0.85,
          rotation: (indice) => (pseudoAleatorio(indice + 101) - 0.5) * 56,
          scale: (indice) => 1.5 + pseudoAleatorio(indice + 151) * 2.3,
          duration: 1,
          ease: "power2.inOut",
          stagger: { each: 0.012, from: "edges" },
        })
        .to(".js-galeria-legenda", { autoAlpha: 0, duration: 0.2 }, 0.75)
        .to(".js-peca-cor", { opacity: 0.88, duration: 0.25 }, ">")
        .from(".js-galeria-fecho", { autoAlpha: 0, y: 30, duration: 0.25 }, "<")
        .to({}, { duration: 0.3 })
    })

    return () => mm.revert()
  }, [])
}

export default useGaleriaLogo
