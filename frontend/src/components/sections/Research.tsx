'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, BookOpen, Sparkles, FileText, CheckCircle2 } from 'lucide-react'
import { researchItems, ResearchItem } from '@/data/research'

interface ResearchCardProps {
  research: ResearchItem
  isExpanded: boolean
  onToggle: () => void
}

function ResearchCard({ research, isExpanded, onToggle }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-lg ${
        isExpanded
          ? 'border-cyan-500/40 bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.12)]'
          : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/70'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 sm:p-7 flex items-start justify-between text-left gap-4 focus:outline-none"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} className="text-cyan-400 shrink-0" />
            <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
              {research.type === 'publication' ? 'Publication' : 'Technical Paper'}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
            {research.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm font-medium mb-1">
            {research.authors}
          </p>

          <p className="text-slate-500 text-xs font-mono">
            {research.journal} • {research.year}
          </p>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="p-2 rounded-xl border border-slate-800 bg-slate-800/60 text-cyan-400 shrink-0 mt-1"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-slate-800/80 px-6 sm:px-7 py-6 bg-slate-950/40 space-y-5"
          >
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
                ABSTRACT
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {research.abstract}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                INDEXED KEYWORDS
              </h4>
              <div className="flex flex-wrap gap-2">
                {research.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-800/60 text-cyan-300 font-mono text-[11px]"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            {research.link && research.link !== '#' && (
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end">
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all"
                >
                  <ExternalLink size={14} />
                  <span>Access Paper / Project</span>
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Research() {
  const [expandedId, setExpandedId] = useState<number | null>(researchItems[0]?.id ?? null)

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-3.5 text-cyan-400">
            <span>[05]</span>
            <span className="w-8 h-px bg-cyan-500" />
            <span>SCIENTIFIC LITERATURE & PREPRINTS</span>
          </div>
          
          <h2 id="research-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            RESEARCH & WHITE PAPERS.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Explorations in lightweight neural backbones, hybrid RAG pipelines, and explainable AI for medical/crop pathology detection.
          </p>
        </motion.div>

        {/* List of Research Items */}
        <div className="space-y-5">
          {researchItems.map((research) => (
            <ResearchCard
              key={research.id}
              research={research}
              isExpanded={expandedId === research.id}
              onToggle={() => setExpandedId(expandedId === research.id ? null : research.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
