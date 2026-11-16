import { useEffect } from "react"
import { gsap } from "../gsap"
import { pseudoAleatorio } from "../utils/desenho"

const useConstelacao = (estrelas) => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const fotos = gsap.utils.toArray(".js-foto")
      const imagens = gsap.utils.toArray(".js-foto-imagem")

      const entrada = gsap.timeline({ defaults: { ease: "expo.out" } })

      entrada
        .from(imagens, { scale: 0.2, autoAlpha: 0, duration: 1.8, stagger: { each: 0.035, from: "random" } }, 0)
        .from(".js-ceu-linha", { yPercent: 110, duration: 1.3, stagger: 0.12 }, 0.3)
        .from(".js-ceu-apoio", { autoAlpha: 0, y: 16, duration: 1, stagger: 0.1 }, 0.8)

      imagens.forEach((imagem, indice) => {
        gsap.to(imagem, {
          y: 8 + pseudoAleatorio(indice + 31) * 12,
          duration: 3 + pseudoAleatorio(indice + 41) * 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.8 + pseudoAleatorio(indice + 51) * 2,
        })
      })

      const voo = gsap.timeline({
        scrollTrigger: {
          trigger: ".js-ceu",
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      })

      fotos.forEach((foto, indice) => {
        const estrela = estrelas[indice]
        const profundidade = estrela.profundidade

        const direcao = () => {
          const noCelular = window.innerWidth < 768
          const esquerda = noCelular ? estrela.esquerdaNoCelular : estrela.esquerda
          const topo = noCelular ? estrela.topoNoCelular : estrela.topo
          const distanciaX = ((esquerda - 50) / 100) * window.innerWidth
          const distanciaY = ((topo - 50) / 100) * window.innerHeight
          const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY) || 1

          return { x: distanciaX / distancia, y: distanciaY / distancia }
        }

        voo.to(
          foto,
          {
            x: () => direcao().x * window.innerWidth * (0.5 + profundidade * 0.45),
            y: () => direcao().y * window.innerHeight * (0.6 + profundidade * 0.5),
            scale: 1.8 + profundidade * 2.4,
            opacity: 1,
            ease: "power2.in",
            duration: 0.7,
          },
          (1 - profundidade) * 0.3
        )
      })

      voo.to(".js-ceu-conteudo", { scale: 0.94, autoAlpha: 0, ease: "power1.in", duration: 0.5 }, 0.3)
    })

    mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const camadas = gsap.utils.toArray(".js-foto-paralaxe")
      const moverNaHorizontal = camadas.map((camada) => gsap.quickTo(camada, "x", { duration: 0.9, ease: "power3.out" }))
      const moverNaVertical = camadas.map((camada) => gsap.quickTo(camada, "y", { duration: 0.9, ease: "power3.out" }))

      const aoMoverOMouse = (evento) => {
        const horizontal = evento.clientX / window.innerWidth - 0.5
        const vertical = evento.clientY / window.innerHeight - 0.5

        camadas.forEach((camada, indice) => {
          const forca = 10 + estrelas[indice].profundidade * 44

          moverNaHorizontal[indice](-horizontal * forca)
          moverNaVertical[indice](-vertical * forca)
        })
      }

      window.addEventListener("mousemove", aoMoverOMouse)

      return () => {
        window.removeEventListener("mousemove", aoMoverOMouse)
      }
    })

    return () => mm.revert()
  }, [estrelas])
}

export default useConstelacao
