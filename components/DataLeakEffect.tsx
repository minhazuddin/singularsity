'use client'

import { useEffect, useRef, useState } from 'react'

interface DataParticle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  char: string
  opacity: number
  color: string
}

const DataLeakEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<DataParticle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Data characters that "leak"
    const dataChars = ['0', '1', '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\', '|', '-', '_', '?', '!', '@', '#', '$', '%', '^', '&', '*', '~', '`', 'A', 'B', 'C', 'D', 'E', 'F', 'null', 'undefined', 'error', '404', 'lost', 'data', 'leak']
    const colors = ['#238c44', '#409A5D', '#ff6b6b', '#ffd93d', '#6bcf7f', '#ff8e53']

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }

      // Create new particles at mouse position
      for (let i = 0; i < 3; i++) {
        if (particlesRef.current.length < 200) { // Limit particles
          particlesRef.current.push({
            x: mouseRef.current.x + (Math.random() - 0.5) * 20,
            y: mouseRef.current.y + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 2 + 1,
            life: 0,
            maxLife: 60 + Math.random() * 60,
            size: Math.random() * 8 + 4,
            char: dataChars[Math.floor(Math.random() * dataChars.length)],
            opacity: 1,
            color: colors[Math.floor(Math.random() * colors.length)]
          })
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update particle
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.1 // Gravity
        particle.vx *= 0.99 // Air resistance
        particle.life++

        // Calculate opacity based on life
        particle.opacity = 1 - (particle.life / particle.maxLife)

        // Draw particle
        if (particle.opacity > 0) {
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.font = `${particle.size}px monospace`
          ctx.fillStyle = particle.color
          ctx.textAlign = 'center'
          
          // Add glitch effect
          if (Math.random() < 0.1) {
            ctx.fillStyle = '#ff0000'
            ctx.shadowColor = '#ff0000'
            ctx.shadowBlur = 5
          }
          
          ctx.fillText(particle.char, particle.x, particle.y)
          ctx.restore()
          
          return true
        }
        return false
      })

      // Draw mouse trail effect
      ctx.save()
      ctx.globalAlpha = 0.3
      ctx.strokeStyle = '#238c44'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 10, 0, Math.PI * 2)
      ctx.stroke()
      
      // Pulsing circle
      const pulseRadius = 15 + Math.sin(Date.now() * 0.01) * 5
      ctx.globalAlpha = 0.1
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, pulseRadius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // Add corrupted data effect occasionally
      if (Math.random() < 0.02) {
        ctx.save()
        ctx.font = '10px monospace'
        ctx.fillStyle = '#ff6b6b'
        ctx.globalAlpha = 0.6
        const corruptText = 'ERROR_DATA_CORRUPTED_' + Math.random().toString(36).substring(7)
        ctx.fillText(
          corruptText,
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
        ctx.restore()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}

export default DataLeakEffect 