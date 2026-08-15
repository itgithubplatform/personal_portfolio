'use client'

import React, { useEffect, useRef } from 'react'

export default function StaticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number | null = null

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    const draw = () => {
      if (!ctx || !canvas) return

      // Base gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#020817')
      gradient.addColorStop(0.5, '#070f24')
      gradient.addColorStop(1, '#020817')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Radial top glow
      const radial1 = ctx.createRadialGradient(
        canvas.width * 0.25,
        canvas.height * 0.15,
        0,
        canvas.width * 0.25,
        canvas.height * 0.15,
        canvas.width * 0.45
      )
      radial1.addColorStop(0, 'rgba(6, 182, 212, 0.07)')
      radial1.addColorStop(1, 'transparent')
      ctx.fillStyle = radial1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Radial bottom right glow
      const radial2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        canvas.width * 0.5
      )
      radial2.addColorStop(0, 'rgba(59, 130, 246, 0.06)')
      radial2.addColorStop(1, 'transparent')
      ctx.fillStyle = radial2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#020817' }}
    />
  )
}
