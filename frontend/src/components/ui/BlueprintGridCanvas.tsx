'use client'

import React, { useEffect, useRef } from 'react'

export default function BlueprintGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let frame = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()

    const gridSize = 48
    const lineColor = 'rgba(6, 182, 212, 0.08)'
    const dotColor = 'rgba(6, 182, 212, 0.25)'

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw Grid Lines
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw Intersection Accent Dots
      ctx.fillStyle = dotColor
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.fillRect(x - 1, y - 1, 2, 2)
        }
      }

      // Subtle slow diagonal light lines
      frame += 0.4
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)'
      ctx.lineWidth = 1.5
      for (let i = 0; i < 6; i++) {
        const offset = (frame * 0.8 + i * 160) % (canvas.width + canvas.height)
        ctx.beginPath()
        ctx.moveTo(offset, 0)
        ctx.lineTo(offset - canvas.height, canvas.height)
        ctx.stroke()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-80"
      style={{ background: 'transparent' }}
    />
  )
}
