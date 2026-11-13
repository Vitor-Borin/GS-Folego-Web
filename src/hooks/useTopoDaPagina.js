import { useEffect } from "react"

const useTopoDaPagina = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export default useTopoDaPagina
