import { useEffect } from "react"
import { gsap } from "../gsap"

const useCamadas = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const imagens = gsap.utils.toArray(".js-camada-imagem")
      const textos = gsap.utils.toArray(".js-camada-texto")

      const posicao = (deslocamento) => {
        return deslocamento < 0 ? `top-=${-deslocamento} top` : `top+=${deslocamento} top`
      }

      imagens.forEach((imagem, indice) => {
        const ultima = indice === imagens.length - 1

        const linhaDoTempo = gsap.timeline({
          scrollTrigger: {
            trigger: ".js-camadas",
            start: () => posicao((indice - 1) * window.innerHeight),
            end: () => posicao((ultima ? indice : indice + 1) * window.innerHeight),
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        linhaDoTempo
          .fromTo(imagem, { scale: 1.3 }, { scale: 1, ease: "none", duration: 1 }, 0)
          .from(textos[indice], { y: 90, autoAlpha: 0, ease: "power1.out", duration: 0.5 }, 0.5)

        if (!ultima) {
          linhaDoTempo
            .to(imagem, { scale: 1.12, ease: "none", duration: 1 }, 1)
            .to(textos[indice], { y: -70, autoAlpha: 0, ease: "power1.in", duration: 0.6 }, 1.1)
        }
      })
    })

    return () => mm.revert()
  }, [])
}

export default useCamadas
