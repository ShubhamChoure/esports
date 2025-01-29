"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Gaming-style color palette
    const COLORS = [
      "#4A90E2", // Neon Blue
      "#7C4DFF", // Electric Purple
      "#00F0FF", // Cyan
      "#FF4081", // Neon Pink
      "#76FF03"  // Lime Green
    ]

    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width - width/2
        this.y = Math.random() * height - height/2
        this.z = Math.random() * 1500 + 500
        this.radius = Math.random() * 2 + 1
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.velocity = Math.random() * 0.02 + 0.005
      }

      update() {
        this.z -= this.velocity * 100
        if (this.z < 1) {
          this.z = Math.random() * 1500 + 500
          this.x = Math.random() * canvas.width - canvas.width/2
          this.y = Math.random() * canvas.height - canvas.height/2
        }
      }

      draw() {
        const perspective = 500 / (500 + this.z)
        const x = this.x * perspective + canvas.width/2
        const y = this.y * perspective + canvas.height/2

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius * 2)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(0,0,0,0)")

        ctx.beginPath()
        ctx.arc(x, y, this.radius * perspective * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    let particles = []
    const initParticles = () => {
      particles = Array.from({ length: 100 }, () => new Particle(canvas.width, canvas.height))
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 20, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      const time = Date.now() * 0.001
      ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2)
      ctx.rotate(time * 0.5)
      
      const hexGradient = ctx.createLinearGradient(-50, -50, 50, 50)
      hexGradient.addColorStop(0, "#7C4DFF")
      hexGradient.addColorStop(1, "#00F0FF")
      
      ctx.strokeStyle = hexGradient
      ctx.lineWidth = 2
      ctx.beginPath()
      for(let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        ctx.lineTo(Math.cos(angle) * 50, Math.sin(angle) * 50)
      }
      ctx.closePath()
      ctx.stroke()
      ctx.restore()

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}