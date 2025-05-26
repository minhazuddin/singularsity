'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface DataElement {
  id: number
  x: number
  y: number
  type: 'chart' | 'data' | 'ai' | 'node'
  content: string
  color: string
  size: number
  originalX: number
  originalY: number
}

const FloatingDataViz = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dataElements, setDataElements] = useState<DataElement[]>([])

  const syntheticDataElements = [
    { type: 'chart', content: '📊', color: '#238c44' },
    { type: 'chart', content: '📈', color: '#409A5D' },
    { type: 'chart', content: '📉', color: '#4CAF50' },
    { type: 'data', content: 'GAN', color: '#8BC34A' },
    { type: 'data', content: 'VAE', color: '#CDDC39' },
    { type: 'data', content: 'AI', color: '#FFC107' },
    { type: 'data', content: 'ML', color: '#FF9800' },
    { type: 'ai', content: '🤖', color: '#238c44' },
    { type: 'ai', content: '🧠', color: '#409A5D' },
    { type: 'ai', content: '⚡', color: '#4CAF50' },
    { type: 'node', content: '●', color: '#238c44' },
    { type: 'node', content: '◆', color: '#409A5D' },
    { type: 'node', content: '▲', color: '#4CAF50' },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements: DataElement[] = []
    for (let i = 0; i < 20; i++) {
      const element = syntheticDataElements[i % syntheticDataElements.length]
      const x = Math.random() * window.innerWidth
      const y = Math.random() * (window.innerHeight - 300) + 100 // Avoid footer area
      
      elements.push({
        id: i,
        x,
        y,
        originalX: x,
        originalY: y,
        type: element.type as any,
        content: element.content,
        color: element.color,
        size: 20 + Math.random() * 20
      })
    }
    setDataElements(elements)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      setDataElements(prev => prev.map(element => {
        const dx = e.clientX - element.x
        const dy = e.clientY - element.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          // Gentle attraction to mouse
          const force = (150 - distance) / 150 * 0.3
          const angle = Math.atan2(dy, dx)
          element.x += Math.cos(angle) * force * 20
          element.y += Math.sin(angle) * force * 20
        } else {
          // Slowly return to original position
          element.x += (element.originalX - element.x) * 0.02
          element.y += (element.originalY - element.y) * 0.02
        }

        // Keep elements in bounds (avoid footer area - bottom 200px)
        element.x = Math.max(50, Math.min(window.innerWidth - 50, element.x))
        element.y = Math.max(50, Math.min(window.innerHeight - 250, element.y))

        return element
      }))
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dataElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute select-none"
          style={{
            left: element.x,
            top: element.y,
            fontSize: element.size,
            color: element.color,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {element.type === 'data' ? (
            <span className="font-mono font-bold">{element.content}</span>
          ) : (
            <span>{element.content}</span>
          )}
        </motion.div>
      ))}

      {/* Connecting lines between nearby elements */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {dataElements.map((element, index) => 
          dataElements.slice(index + 1).map((otherElement, otherIndex) => {
            const dx = element.x - otherElement.x
            const dy = element.y - otherElement.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 200) {
              return (
                <motion.line
                  key={`${index}-${otherIndex}`}
                  x1={element.x}
                  y1={element.y}
                  x2={otherElement.x}
                  y2={otherElement.y}
                  stroke={element.color}
                  strokeWidth="1"
                  opacity={0.3 * (1 - distance / 200)}
                  animate={{
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              )
            }
            return null
          })
        )}
      </svg>
    </div>
  )
}

export default FloatingDataViz 