import { useEffect } from "react"
import { gsap, SplitText } from "../gsap"

const useFraseAcende = () => {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const palavras = SplitText.create(".js-frase-texto", { type: "words" })

      gsap.fromTo(
        palavras.words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".js-frase",
            start: "top 70%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      )
    })

    return () => mm.revert()
  }, [])
}

export default useFraseAcende
