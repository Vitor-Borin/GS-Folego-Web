import { useEffect } from "react"
import { gsap } from "../gsap"
import { pseudoAleatorio } from "../utils/desenho"

const useLogoDeFotos = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
          trigger: ".js-logo",
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      linhaDoTempo
        .from(".js-peca", {
          x: (indice) => (pseudoAleatorio(indice + 1) - 0.5) * window.innerWidth * 0.95,
          y: (indice) => (pseudoAleatorio(indice + 51) - 0.5) * window.innerHeight * 0.9,
          rotation: (indice) => (pseudoAleatorio(indice + 101) - 0.5) * 50,
          scale: (indice) => 1.6 + pseudoAleatorio(indice + 151) * 2.4,
          duration: 1,
          ease: "power2.inOut",
          stagger: { each: 0.008, from: "edges" },
        })
        .addLabel("montado")
        .to(".js-peca-tinta", { opacity: 0.94, duration: 0.25, stagger: { each: 0.004, from: "center" } }, "montado")
        .from(".js-logo-nome", { autoAlpha: 0, y: 30, duration: 0.3 }, "montado+=0.15")
        .to({}, { duration: 0.35 })
    })

    return () => mm.revert()
  }, [])
}

export default useLogoDeFotos
