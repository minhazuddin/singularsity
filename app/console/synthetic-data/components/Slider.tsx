'use client'

import React, { useState, useRef, useCallback } from 'react'

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  className?: string
  thumbClassName?: string
  trackClassName?: string
}

export default function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className = '',
  thumbClassName = '',
  trackClassName = ''
}: SliderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updateValue(e)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      updateValue(e)
    }
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const updateValue = useCallback((e: MouseEvent | React.MouseEvent) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const rawValue = min + percentage * (max - min)
    const steppedValue = Math.round(rawValue / step) * step
    const clampedValue = Math.max(min, Math.min(max, steppedValue))
    
    onChange(clampedValue)
  }, [min, max, step, onChange])

  // Add global mouse event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div
      ref={sliderRef}
      className={`relative h-2 bg-gray-200 rounded-full cursor-pointer ${className}`}
      onMouseDown={handleMouseDown}
    >
      {/* Track */}
      <div
        className={`h-full bg-green-500 rounded-full ${trackClassName}`}
        style={{ width: `${percentage}%` }}
      />
      
      {/* Thumb */}
      <div
        className={`absolute w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-md cursor-pointer transform -translate-y-1/2 -translate-x-1/2 hover:bg-green-600 ${
          isDragging ? 'scale-110' : ''
        } transition-all duration-150 ${thumbClassName}`}
        style={{ 
          left: `${percentage}%`,
          top: '50%'
        }}
      />
    </div>
  )
} 