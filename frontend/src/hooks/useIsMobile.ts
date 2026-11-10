'use client'

import { useEffect, useState } from 'react'

/**
 * Detects mobile viewports and reduced-motion preferences for animation tuning.
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const viewportQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    setIsMobile(viewportQuery.matches)
    setPrefersReducedMotion(motionQuery.matches)

    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }
    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    viewportQuery.addEventListener('change', handleViewportChange)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      viewportQuery.removeEventListener('change', handleViewportChange)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [breakpoint])

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceMotion: isMobile || prefersReducedMotion,
  }
}

export default useIsMobile
