'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface DataFragment {
  x: number
  y: number
  targetX: number
  targetY: number
  text: string
  opacity: number
  size: number
  distanceFromMouse: number
}

const Interactive404Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dataFragments, setDataFragments] = useState<DataFragment[]>([])

  const corruptedDataTexts = [
    'DATA_LOST', 'NULL_REFERENCE', 'MEMORY_LEAK', 'STACK_OVERFLOW',
    'SEGMENTATION_FAULT', 'BUFFER_OVERFLOW', 'ACCESS_DENIED',
    'FILE_NOT_FOUND', 'CONNECTION_TIMEOUT', 'SYNTAX_ERROR',
    '0x00000000', '0xDEADBEEF', 'CORRUPTED', 'UNDEFINED',
    'NaN', 'VOID', 'EXCEPTION', 'FATAL_ERROR', 'ABORT',
    '404', 'MISSING', 'BROKEN', 'FRAGMENT', 'LOST_DATA'
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const fragments: DataFragment[] = []
    for (let i = 0; i < 30; i++) {
      fragments.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * window.innerHeight,
        text: corruptedDataTexts[Math.floor(Math.random() * corruptedDataTexts.length)],
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 12 + 8,
        distanceFromMouse: 0
      })
    }
    setDataFragments(fragments)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      setDataFragments(prev => prev.map(fragment => {
        const dx = e.clientX - fragment.x
        const dy = e.clientY - fragment.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 200) {
          const force = (200 - distance) / 200
          const angle = Math.atan2(dy, dx)
          fragment.targetX = fragment.x - Math.cos(angle) * force * 100
          fragment.targetY = fragment.y - Math.sin(angle) * force * 100
          fragment.opacity = Math.min(0.8, fragment.opacity + force * 0.5)
        } else {
          fragment.targetX += (fragment.x - fragment.targetX) * 0.02
          fragment.targetY += (fragment.y - fragment.targetY) * 0.02
          fragment.opacity = Math.max(0.1, fragment.opacity - 0.01)
        }

        fragment.targetX = Math.max(0, Math.min(window.innerWidth, fragment.targetX))
        fragment.targetY = Math.max(0, Math.min(window.innerHeight, fragment.targetY))
        fragment.distanceFromMouse = distance

        return fragment
      }))
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {dataFragments.map((fragment, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-red-500 select-none"
          style={{
            left: fragment.x,
            top: fragment.y,
            fontSize: fragment.size,
            opacity: fragment.opacity,
            transform: 'translate(-50%, -50%)',
            filter: fragment.distanceFromMouse < 100 ? 'blur(1px)' : 'none',
            textShadow: fragment.distanceFromMouse < 150 
              ? '0 0 10px #ff6b6b, 0 0 20px #ff6b6b' 
              : 'none'
          }}
          animate={{
            x: fragment.targetX,
            y: fragment.targetY,
            rotate: fragment.distanceFromMouse < 100 ? [0, 5, -5, 0] : 0,
            scale: fragment.distanceFromMouse < 100 ? [1, 1.2, 1] : 1
          }}
          transition={{
            duration: 0.3,
            repeat: fragment.distanceFromMouse < 100 ? Infinity : 0
          }}
        >
          {fragment.text}
        </motion.div>
      ))}

      <motion.div
        className="absolute w-6 h-6 border-2 border-red-500 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
      />
    </div>
  )
}

export default Interactive404Background 