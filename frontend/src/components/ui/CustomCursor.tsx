'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (!target) return

      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsPointer(isClickable)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999]">
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer ? '#0ea5e9' : '#06b6d4',
        }}
        transition={{
          x: { type: 'spring', stiffness: 600, damping: 30 },
          y: { type: 'spring', stiffness: 600, damping: 30 },
          scale: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
        className="w-7 h-7 border border-cyan-400/80 rounded-full"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{
          x: { type: 'spring', stiffness: 900, damping: 35 },
          y: { type: 'spring', stiffness: 900, damping: 35 },
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
      />
    </div>
  )
}
