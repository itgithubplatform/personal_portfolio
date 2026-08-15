'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'

interface CodeSnippet {
  text: string
  lang: string
  comment: string
}

interface Particle {
  char: string
  left: string
  duration: number
  delay: number
  fontSize: number
}

interface CharState {
  char: string
  locked: boolean
}

interface IntroPreloaderProps {
  onComplete: () => void
}

const codeSnippets: CodeSnippet[] = [
  { text: `print("${personalInfo.name}")`, lang: 'Python', comment: '# Python 3.12' },
  { text: `console.log("${personalInfo.name}");`, lang: 'JavaScript', comment: '// ES2026' },
  { text: `std::cout << "${personalInfo.name}";`, lang: 'C++', comment: '// ISO C++20' },
  { text: `System.out.println("${personalInfo.name}");`, lang: 'Java', comment: '// OpenJDK 21' }
]

const glyphs = '01#*><{}[]/@&$!~?=+'
const particleChars = ['0', '1', '{', '}', '<', '>', '/', '*', '#', '&']

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    char: particleChars[i % particleChars.length],
    left: `${(i * 7.3 + 13) % 100}%`,
    duration: 5 + (i % 4) * 2,
    delay: (i * 0.8) % 5,
    fontSize: 10 + (i % 3) * 2
  }))

export default function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [charStates, setCharStates] = useState<CharState[]>([])
  const [isFinished, setIsFinished] = useState<boolean>(false)
  
  const rafRef = useRef<number | null>(null)
  const timerRef = useRef<any>(null)
  const particles = useMemo(() => generateParticles(14), [])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleSkip = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSkip()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleSkip])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return
    }

    if (stepIndex < codeSnippets.length) {
      const targetText = codeSnippets[stepIndex].text
      const totalChars = targetText.length
      const scrambleWindow = Math.min(5, totalChars)
      let lockedCount = 0
      let lastFrameTime = 0

      const getFrameInterval = () => {
        const progress = lockedCount / totalChars
        return 24 - progress * 10
      }

      const animate = (timestamp: number) => {
        if (!lastFrameTime) lastFrameTime = timestamp
        const elapsed = timestamp - lastFrameTime

        if (elapsed >= getFrameInterval()) {
          lastFrameTime = timestamp

          if (lockedCount <= totalChars) {
            const states: CharState[] = []
            for (let i = 0; i < totalChars; i++) {
              if (i < lockedCount) {
                states.push({ char: targetText[i], locked: true })
              } else if (i < lockedCount + scrambleWindow) {
                states.push({
                  char: glyphs[Math.floor(Math.random() * glyphs.length)],
                  locked: false
                })
              }
            }
            setCharStates(states)
            lockedCount++
          } else {
            timerRef.current = setTimeout(() => {
              setStepIndex((prev) => prev + 1)
            }, 140)
            return
          }
        }

        rafRef.current = requestAnimationFrame(animate)
      }

      rafRef.current = requestAnimationFrame(animate)

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    } else if (stepIndex === codeSnippets.length) {
      setIsFinished(true)

      timerRef.current = setTimeout(() => {
        onComplete()
      }, 700)

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }
  }, [stepIndex, onComplete])

  return (
    <motion.div
      key="intro-preloader"
      id="intro-preloader"
      role="dialog"
      aria-label="Compiling identity intro sequence"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-slate-950 text-cyan-400 font-mono select-none overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.85)_100%)] pointer-events-none" aria-hidden="true" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute text-cyan-500/20 animate-pulse"
            style={{
              left: p.left,
              top: '-10%',
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              fontSize: `${p.fontSize}px`
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-900/50 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs text-cyan-400/80 tracking-widest">
          <Terminal size={14} className="text-cyan-400" />
          <span>COMPILING IDENTITY v2.6</span>
        </div>
        <button
          onClick={handleSkip}
          className="text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          [ESC / Skip Intro]
        </button>
      </div>

      {/* Center Stage */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 my-auto w-full">
        {/* Status Row */}
        <div className="w-full max-w-xl flex justify-between text-xs tracking-wider text-slate-400 mb-3">
          <span className="text-cyan-400 font-semibold">TARGET: {personalInfo.name.toUpperCase()}</span>
          <span>
            {isFinished
              ? 'STATUS: ONLINE [0.00ms]'
              : `STEP 0${Math.min(stepIndex + 1, 4)} / 04`}
          </span>
        </div>

        {/* Terminal Box */}
        <div className={`relative w-full max-w-xl p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-300 ${
          isFinished ? 'border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.25)]' : ''
        }`}>
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 font-semibold">
              {isFinished ? 'EXECUTION_COMPLETE' : codeSnippets[stepIndex]?.lang}
            </span>
            <span className="text-slate-500 italic">
              {isFinished ? '// ZERO_ERRORS' : codeSnippets[stepIndex]?.comment}
            </span>
          </div>

          {/* Code Display */}
          <div className="min-h-[52px] flex items-center text-sm md:text-base font-mono">
            {isFinished ? (
              <div className="flex items-center gap-3 w-full justify-center text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="tracking-wider font-bold">SYSTEM_READY</span>
                <span className="text-slate-600">{"//"}</span>
                <span className="text-white font-bold tracking-wide">{personalInfo.name.toUpperCase()}</span>
              </div>
            ) : (
              <div className="flex items-center w-full">
                <span className="text-cyan-500 mr-2">$</span>
                <span className="break-all">
                  {charStates.map((s, i) => (
                    <span
                      key={i}
                      className={
                        s.locked ? 'text-slate-100 font-medium' : 'text-cyan-400/60 font-light'
                      }
                    >
                      {s.char}
                    </span>
                  ))}
                </span>
                <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xl grid grid-cols-4 gap-2 mt-6">
          {codeSnippets.map((_, i) => (
            <div key={i} className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-cyan-500 transition-all duration-300 ${
                  isFinished
                    ? 'w-full bg-cyan-400'
                    : i <= stepIndex
                    ? 'w-full opacity-100'
                    : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-md text-xs text-slate-400">
        <span>{personalInfo.title.toUpperCase()}</span>
        <span>PRESS ESC TO BYPASS</span>
      </div>
    </motion.div>
  )
}
