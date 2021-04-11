import { useRef, useEffect } from "react"

import p5 from "p5"

export type p5State = InstanceType<typeof p5> & {
  state: {
    radius: number,
  }
}

export const useP5 = <T extends HTMLElement>(sketch: (p5: p5) => void, radius: number) => {
  const canvasRef = useRef<T>(null)

  useEffect(() => {
    const canvas = new p5(sketch, canvasRef.current) as p5State
    canvas.state = { radius: radius }
    return () => {
      canvas.remove()
    }
  }, [sketch, radius])

  return { canvasRef }
}
