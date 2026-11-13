import { useEffect } from "react"
import { gsap } from "../gsap"

const usePilha = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const conteudos = gsap.utils.toArray(".js-painel-conteudo")
      const sombras = gsap.utils.toArray(".js-painel-sombra")

      conteudos.forEach((conteudo, indice) => {
        if (indice === conteudos.length - 1) {
          return
        }

        const linhaDoTempo = gsap.timeline({
          scrollTrigger: {
            trigger: ".js-pilha",
            start: () => `top+=${indice * window.innerHeight} top`,
            end: () => `top+=${(indice + 1) * window.innerHeight} top`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        linhaDoTempo
          .to(conteudo, { scale: 0.92, ease: "none" }, 0)
          .to(sombras[indice], { opacity: 0.65, ease: "none" }, 0)
      })
    })

    return () => mm.revert()
  }, [])
}

export default usePilha
