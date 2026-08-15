'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Briefcase, Code, Rocket } from 'lucide-react'

export interface StatusOption {
  id: string
  label: string
  shortLabel: string
  color: string
  bgColor: string
  borderColor: string
  dotColor: string
  icon: React.ElementType
}

const STATUS_OPTIONS: StatusOption[] = [
  {
    id: 'available',
    label: 'AVAILABLE FOR HIRE',
    shortLabel: 'AVAILABLE',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
    dotColor: 'bg-emerald-400',
    icon: Briefcase,
  },
  {
    id: 'building',
    label: 'BUILDING AI SYSTEMS',
    shortLabel: 'BUILDING',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
    dotColor: 'bg-cyan-400',
    icon: Code,
  },
  {
    id: 'collab',
    label: 'OPEN TO COLLABORATE',
    shortLabel: 'COLLAB',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30 hover:border-purple-400/60',
    dotColor: 'bg-purple-400',
    icon: Rocket,
  },
]

export default function StatusToggle() {
  const [statusIndex, setStatusIndex] = useState<number>(0)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('portfolio_status_index')
    if (saved !== null) {
      const idx = parseInt(saved, 10)
      if (!isNaN(idx) && idx >= 0 && idx < STATUS_OPTIONS.length) {
        setStatusIndex(idx)
      }
    }
  }, [])

  const toggleNextStatus = () => {
    setStatusIndex((prev) => {
      const next = (prev + 1) % STATUS_OPTIONS.length
      localStorage.setItem('portfolio_status_index', next.toString())
      return next
    })
  }

  const current = STATUS_OPTIONS[statusIndex]
  const Icon = current.icon

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/60 text-[11px] font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-300">AVAILABLE FOR HIRE</span>
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={toggleNextStatus}
      title="Click to toggle engineering status"
      aria-label={`Current status: ${current.label}. Click to toggle.`}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border ${current.borderColor} ${current.bgColor} backdrop-blur-md transition-all duration-300 shadow-sm cursor-pointer select-none group focus:outline-none`}
    >
      {/* Pulsing indicator dot */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.dotColor} opacity-75`}
        />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dotColor}`} />
      </span>

      {/* Status text with morph animation */}
      <div className="overflow-hidden font-mono text-[11px] font-semibold tracking-wider flex items-center gap-1.5">
        <AnimatePresence mode="wait">
          <motion.span
            key={current.id}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`flex items-center gap-1.5 ${current.color}`}
          >
            <Icon size={12} className="shrink-0" />
            <span className="hidden xl:inline">{current.label}</span>
            <span className="xl:hidden">{current.shortLabel}</span>
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Subtle indicator hint */}
      <span className="text-[9px] font-mono text-slate-500 opacity-60 group-hover:opacity-100 transition-opacity">
        ⟲
      </span>
    </motion.button>
  )
}
