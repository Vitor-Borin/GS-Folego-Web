import { useEffect } from "react"
import { Flip, gsap } from "../gsap"

let posicoesGuardadas = null

export const guardarPosicoes = () => {
  posicoesGuardadas = Flip.getState(".js-cartao")
}

export const esquecerPosicoes = () => {
  posicoesGuardadas = null
}

const useListaAnimada = (assinatura) => {
  useEffect(() => {
    if (posicoesGuardadas === null) {
      return
    }

    const posicoes = posicoesGuardadas
    posicoesGuardadas = null

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      Flip.from(posicoes, {
        targets: ".js-cartao",
        duration: 0.55,
        ease: "power3.inOut",
        onEnter: (elementos) => {
          gsap.fromTo(
            elementos,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
          )
        },
      })
    })

    return () => mm.revert()
  }, [assinatura])

  useEffect(() => {
    return () => {
      posicoesGuardadas = null
    }
  }, [])
}

export default useListaAnimada
