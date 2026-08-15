'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  Navbar,
  Footer,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Research,
  Certificates,
  Contact,
  CustomCursor,
  StaticBackground,
  SmoothScroll,
  IntroPreloader,
} from '@/components'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function ClientAppShell() {
  const [isIntroComplete, setIsIntroComplete] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsIntroComplete(true)
    }
  }, [])

  useEffect(() => {
    if (!isIntroComplete) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isIntroComplete])

  return (
    <ThemeProvider>
      {/* Intro Preloader */}
      <AnimatePresence mode="wait">
        {!isIntroComplete && (
          <IntroPreloader onComplete={() => setIsIntroComplete(true)} />
        )}
      </AnimatePresence>

      {/* Smooth Scroll Container */}
      <SmoothScroll>
        <div
          className={`relative min-h-screen transition-colors duration-500 ${
            !isIntroComplete ? 'pointer-events-none' : ''
          }`}
          style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
          <StaticBackground />
          <CustomCursor />

          {/* Navigation */}
          <Navbar />

          {/* Main Content Sections */}
          <main id="main-content" className="relative z-10 flex flex-col gap-12">
            <Hero isIntroComplete={isIntroComplete} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Research />
            <Certificates />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  )
}
