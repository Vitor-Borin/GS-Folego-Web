import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Flip } from "gsap/Flip"

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)

gsap.ticker.lagSmoothing(0)

document.fonts.ready.then(() => {
  ScrollTrigger.refresh()
})

export { gsap, ScrollTrigger, SplitText, Flip }
