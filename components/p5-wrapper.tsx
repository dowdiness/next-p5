import p5 from "p5"
import React, { useState } from "react"
import { useP5 } from '../hooks/useP5'

const P5Canvas = (props: {sketch: (p5: p5) => void}) => {
  const [radius, setRadius] = useState(0)
  const { canvasRef } = useP5<HTMLDivElement>(props.sketch, radius)
  return (
    <div className="flex flex-col space-y-8 my-8">
      <input
        type="range"
        defaultValue={radius}
        min="2"
        max="60"
        step="1"
        onChange={(event) =>
          setRadius(parseInt(event.target.value))
        }
      />
      <div ref={canvasRef} />
    </div>
  )
}

export default P5Canvas
