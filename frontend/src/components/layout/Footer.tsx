'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
              BG
            </div>
            <span className="text-white font-bold text-base font-mono tracking-tight">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white transition-all text-slate-400"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white transition-all text-slate-400"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={personalInfo.social.email}
            aria-label="Email Contact"
            className="p-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:text-white transition-all text-slate-400"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all ml-2"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
