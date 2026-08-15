'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight, Copy, Check, Terminal, ChevronDown, Cpu } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'
import BlueprintGridCanvas from '@/components/ui/BlueprintGridCanvas'

const glyphs = '01#*><%{}[]/@&$!~?'

const nameCycleData = [
  { text: 'বেনু গোপাল কাঞ্জিলাল', lang: 'Bengali', fontFamily: "'Noto Sans Bengali', sans-serif" },
  { text: 'बेनु गोपाल कांजीलाल', lang: 'Hindi', fontFamily: "'Noto Sans Devanagari', sans-serif" },
  { text: 'பெனு கோபால் கஞ்சிலால்', lang: 'Tamil', fontFamily: "'Noto Sans Tamil', sans-serif" },
  { text: 'బేను గోపాల్ కాంజిలాల్', lang: 'Telugu', fontFamily: "'Noto Sans Telugu', sans-serif" },
  { text: 'BENU GOPAL KANJILAL', lang: 'English', isFinal: true }
]

const ScrambleText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text)
      return
    }

    const timer = setTimeout(() => {
      let iteration = 0
      const maxIterations = text.length * 3
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char: string, index: number) => {
              if (index < iteration / 3) return text[index]
              if (char === ' ') return ' '
              return glyphs[Math.floor(Math.random() * glyphs.length)]
            })
            .join('')
        )

        if (iteration >= maxIterations) {
          clearInterval(interval)
          setDisplayText(text)
        }
        iteration += 1
      }, 25)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return <span className={className}>{displayText}</span>
}

const CountUpStat = ({ targetNum, suffix = '', label, subtext, rawText }: { targetNum?: number; suffix?: string; label: string; subtext?: string; rawText?: string }) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (targetNum === null || targetNum === undefined) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(targetNum)
      return
    }

    let start = 0
    const duration = 1200
    const stepTime = 30
    const steps = duration / stepTime
    const increment = targetNum / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= targetNum) {
        setVal(targetNum)
        clearInterval(timer)
      } else {
        setVal(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [targetNum])

  const renderVal = () => {
    if (rawText) return rawText
    if (targetNum !== undefined && targetNum !== null) {
      return Number.isInteger(targetNum)
        ? `${Math.round(val)}${suffix}`
        : `${val.toFixed(2)}${suffix}`
    }
    return ''
  }

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="p-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl text-center flex flex-col items-center justify-center transition-all cursor-default relative overflow-hidden group shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="text-[10px] font-mono uppercase tracking-wider mb-1 text-slate-400">
        {label}
      </div>
      <div className="text-xl sm:text-2xl font-bold font-mono text-white">
        {renderVal()}
      </div>
      <div className="text-[11px] font-mono font-medium mt-0.5 text-cyan-400/90">
        {subtext}
      </div>
    </motion.div>
  )
}

export default function Hero({ isIntroComplete = true }: { isIntroComplete?: boolean }) {
  const [copiedCommand, setCopiedCommand] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [cycleIndex, setCycleIndex] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!isIntroComplete) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCycleIndex(nameCycleData.length - 1)
      return
    }

    if (cycleIndex < nameCycleData.length - 1) {
      const timer = setTimeout(() => {
        setCycleIndex((prev) => prev + 1)
      }, 450)
      return () => clearTimeout(timer)
    }
  }, [isIntroComplete, cycleIndex])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.85, 0])
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const copyCommand = () => {
    navigator.clipboard.writeText('npx benu-gopal-kanjilal')
    setCopiedCommand(true)
    setShowToast(true)
    setTimeout(() => {
      setCopiedCommand(false)
      setShowToast(false)
    }, 2200)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const stats = [
    { label: 'AIML Specialization', targetNum: 9.42, suffix: ' CGPA', subtext: 'The Neotia University' },
    { label: 'Agentic Systems', targetNum: 15, suffix: '+ Built', subtext: 'Full-Stack & RAG' },
    { label: 'Hackathons & R&D', targetNum: 5, suffix: '+ Events', subtext: 'Bharatiya Antariksh' },
    { label: 'Core Focus', rawText: 'Neural Architect', subtext: 'AI & Full-Stack' }
  ]

  const currentLangObj = nameCycleData[cycleIndex]
  const isFinalEnglish = currentLangObj.isFinal

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <BlueprintGridCanvas />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center my-auto"
      >
        {/* Top Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-slate-900/70 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-cyan-300 shadow-sm">
            <Cpu size={14} className="text-cyan-400 animate-pulse" />
            <span className="font-semibold">AI/ML ENGINEER & FULL-STACK SYSTEM DEVELOPER</span>
          </div>
        </motion.div>

        {/* Multilingual Name Cycle */}
        <div className="mt-2 mb-6 sm:mb-8 w-full flex justify-center items-center min-h-[110px] sm:min-h-[160px] overflow-hidden select-none">
          <AnimatePresence mode="wait">
            {!isFinalEnglish ? (
              <motion.div
                key={currentLangObj.lang}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="text-center px-2"
              >
                <h1
                  className="font-black text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-white via-cyan-200 to-slate-400 bg-clip-text text-transparent"
                  style={{ fontFamily: currentLangObj.fontFamily }}
                >
                  {currentLangObj.text}
                </h1>
              </motion.div>
            ) : (
              <motion.h1
                key="english-final"
                id="hero-title"
                initial={{ y: -40, opacity: 0, scale: 0.94 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 140,
                  damping: 16
                }}
                className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-tighter uppercase text-center flex flex-col items-center justify-center gap-1 sm:gap-2 leading-none"
              >
                <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                  <span className="inline-block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                    <ScrambleText text="BENU" delay={50} />
                  </span>
                  <span className="inline-block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    <ScrambleText text="GOPAL" delay={150} />
                  </span>
                </div>
                <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
                  <ScrambleText text="KANJILAL" delay={250} />
                </span>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Action Bar & Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntroComplete ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center w-full"
        >
          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 w-full">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <span>Explore AI & Web Work</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 border border-slate-700 bg-slate-900/70 hover:bg-slate-800 text-slate-200 hover:text-white backdrop-blur-md transition-all shadow-sm"
            >
              <Download size={16} className="text-cyan-400" />
              <span>Curriculum Vitae</span>
            </a>

            {/* Social Channels */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all shadow-sm"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.email}
                title="Email"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all shadow-sm"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* NPX Command Snippet */}
          <motion.div variants={itemVariants} className="w-full max-w-md mb-10 relative">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs shadow-inner backdrop-blur-xl">
              <div className="flex items-center gap-2 overflow-x-auto py-0.5">
                <Terminal size={14} className="shrink-0 text-cyan-400" />
                <span className="text-slate-500">$</span>
                <span className="font-semibold shrink-0 text-slate-200">npx benu-gopal-kanjilal</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block shrink-0" />
              </div>
              <button
                onClick={copyCommand}
                aria-label="Copy terminal command"
                className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer shrink-0 ml-2"
              >
                {copiedCommand ? (
                  <>
                    <Check size={12} className="text-cyan-400" />
                    <span className="text-cyan-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Toast Tooltip */}
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -38 }}
                  exit={{ opacity: 0, y: -46 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg border border-cyan-400/40 bg-slate-900 text-cyan-300 font-mono text-xs font-semibold shadow-xl pointer-events-none"
                >
                  ✓ Copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Metric Cards Grid */}
          <motion.div variants={itemVariants} className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s) => (
              <CountUpStat
                key={s.label}
                targetNum={s.targetNum}
                suffix={s.suffix}
                rawText={s.rawText}
                label={s.label}
                subtext={s.subtext}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Cue Indicator */}
      <motion.div
        style={{ opacity: scrollCueOpacity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <a href="#about" className="pointer-events-auto cursor-pointer">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 backdrop-blur-md text-[11px] font-mono tracking-wider uppercase text-slate-400 hover:text-cyan-300 transition-colors shadow-sm">
            <ChevronDown size={14} className="text-cyan-400 animate-bounce" />
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
          </div>
        </a>
      </motion.div>
    </section>
  )
}
