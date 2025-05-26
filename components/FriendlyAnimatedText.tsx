'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FriendlyAnimatedTextProps {
  texts: string[]
  className?: string
  speed?: number
}

const FriendlyAnimatedText = ({ texts, className = '', speed = 100 }: FriendlyAnimatedTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      const targetText = texts[currentTextIndex]
      if (currentText.length < targetText.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, speed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause before erasing
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, speed / 2)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, texts, speed])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  )
}

export default FriendlyAnimatedText 