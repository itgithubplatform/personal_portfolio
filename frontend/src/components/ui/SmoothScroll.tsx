'use client'

import React, { useEffect } from 'react'

interface SmoothScrollProps {
  children?: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    let lenisInstance: any = null
    let rafId: number | null = null

    const initSmoothScroll = async () => {
      try {
        const { default: Lenis } = await import('lenis')

        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
          touchMultiplier: 1.5,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
        })

        function raf(time: number) {
          lenisInstance?.raf(time)
          rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)
      } catch (error) {
        console.warn('Lenis smooth scroll initialization skipped', error)
      }
    }

    initSmoothScroll()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])

  return <>{children}</>
}
