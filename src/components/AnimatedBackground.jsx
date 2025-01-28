"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (t) => {
      const gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0)
      // Using darker shades of red and green for better contrast
      gradient.addColorStop(0, `rgba(139, 0, 0, ${Math.sin(t / 2000) * 0.3 + 0.7})`)
      gradient.addColorStop(0.5, `rgba(0, 100, 0, ${Math.cos(t / 2000) * 0.3 + 0.7})`)
      gradient.addColorStop(1, `rgba(139, 0, 0, ${Math.sin(t / 2000) * 0.3 + 0.7})`)
      return gradient
    }

    const animate = (t) => {
      ctx.fillStyle = createGradient(t)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

