'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import StatusToggle from '@/components/ui/StatusToggle'
import { personalInfo } from '@/data/personalInfo'

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 sm:mt-4 transition-all duration-300`}
      >
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-950/80 border-cyan-500/20 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
              : 'bg-slate-900/40 border-slate-800/60 backdrop-blur-md'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all group-hover:scale-105">
              BG
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-mono tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 font-semibold shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          {/* Action CTAs: Status Toggle, Theme Toggle, Resume & Connect */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5">
            {/* Status bar toggle */}
            <StatusToggle />

            <ThemeToggle />

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-700/80 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
            >
              <FileText size={14} className="text-cyan-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-semibold text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <Send size={13} />
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <StatusToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 p-4 rounded-2xl border border-cyan-500/20 bg-slate-950/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex gap-2">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-center text-xs font-medium text-slate-200"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500 text-center text-xs font-semibold text-slate-950"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
