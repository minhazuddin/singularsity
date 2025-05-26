'use client'

import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  glitchIntensity?: number
}

const GlitchText = ({ text, className = '', glitchIntensity = 0.1 }: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '`', '?', '<', '>', '|', '\\', '/', '0', '1', 'X', 'Z', 'A', 'B']

  const glitchText = (originalText: string) => {
    return originalText
      .split('')
      .map(char => {
        if (Math.random() < glitchIntensity) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)]
        }
        return char
      })
      .join('')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance to glitch
        setIsGlitching(true)
        setGlitchedText(glitchText(text))
        
        setTimeout(() => {
          setGlitchedText(text)
          setIsGlitching(false)
        }, 100 + Math.random() * 200)
      }
    }, 500 + Math.random() * 1500)

    return () => clearInterval(interval)
  }, [text, glitchIntensity])

  return (
    <span
      className={`${className} ${isGlitching ? 'text-red-500' : ''} transition-colors duration-100`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ff00, 0 2px #0000ff' 
          : 'none',
        transform: isGlitching 
          ? `translate(${(Math.random() - 0.5) * 4}px, ${(Math.random() - 0.5) * 2}px)` 
          : 'none'
      }}
    >
      {glitchedText}
    </span>
  )
}

export default GlitchText 