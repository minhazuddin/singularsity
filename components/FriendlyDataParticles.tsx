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
  color: string
  targetX: number
  targetY: number
  type: 'data' | 'emoji' | 'symbol'
}

const FriendlyDataParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<DataParticle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size (constrained to avoid footer)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight - 200 // Leave space for footer
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Friendly synthetic data characters
    const dataChars = ['📊', '📈', '🔢', '💾', '🤖', '✨', '🎯', '🔮', '💡', '🌟']
    const syntheticTerms = ['AI', 'ML', 'GAN', 'VAE', 'DATA', 'SYNC', 'GEN', 'SIM', 'BOT', 'NET']
    const symbols = ['◆', '◇', '○', '●', '△', '▲', '□', '■', '♦', '♢']
    
    const colors = ['#238c44', '#409A5D', '#4CAF50', '#8BC34A', '#CDDC39', '#FFC107', '#FF9800', '#FF5722']

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }

      // Create new particles at mouse position
      for (let i = 0; i < 2; i++) {
        if (particlesRef.current.length < 150) {
          const types = ['data', 'emoji', 'symbol'] as const
          const type = types[Math.floor(Math.random() * types.length)]
          
          let char = ''
          if (type === 'emoji') {
            char = dataChars[Math.floor(Math.random() * dataChars.length)]
          } else if (type === 'data') {
            char = syntheticTerms[Math.floor(Math.random() * syntheticTerms.length)]
          } else {
            char = symbols[Math.floor(Math.random() * symbols.length)]
          }

          particlesRef.current.push({
            x: mouseRef.current.x + (Math.random() - 0.5) * 30,
            y: mouseRef.current.y + (Math.random() - 0.5) * 30,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 0,
            maxLife: 120 + Math.random() * 60,
            size: type === 'emoji' ? 16 + Math.random() * 8 : 12 + Math.random() * 6,
            char,
            color: colors[Math.floor(Math.random() * colors.length)],
            targetX: mouseRef.current.x,
            targetY: mouseRef.current.y,
            type
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
        // Gentle attraction to mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = 0.0005
          particle.vx += dx * force
          particle.vy += dy * force
        }

        // Update position with gentle movement
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.98 // Gentle damping
        particle.vy *= 0.98
        particle.life++

        // Keep particles away from footer area
        if (particle.y > window.innerHeight - 250) {
          particle.vy -= 0.5 // Push particles up if they get too close to footer
        }

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife
        const opacity = Math.sin(lifeRatio * Math.PI) * 0.8 + 0.2

        // Draw particle
        if (particle.life < particle.maxLife) {
          ctx.save()
          ctx.globalAlpha = opacity
          
          if (particle.type === 'emoji') {
            ctx.font = `${particle.size}px Arial`
            ctx.textAlign = 'center'
            ctx.fillText(particle.char, particle.x, particle.y)
          } else {
            ctx.font = `${particle.size}px monospace`
            ctx.fillStyle = particle.color
            ctx.textAlign = 'center'
            
            // Add gentle glow
            ctx.shadowColor = particle.color
            ctx.shadowBlur = 10
            ctx.fillText(particle.char, particle.x, particle.y)
          }
          
          ctx.restore()
          return true
        }
        return false
      })

      // Draw friendly mouse trail
      ctx.save()
      ctx.globalAlpha = 0.6
      ctx.strokeStyle = '#238c44'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 8, 0, Math.PI * 2)
      ctx.stroke()
      
      // Pulsing outer circle
      const pulseRadius = 20 + Math.sin(Date.now() * 0.005) * 8
      ctx.globalAlpha = 0.3
      ctx.strokeStyle = '#409A5D'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, pulseRadius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

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
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export default FriendlyDataParticles 