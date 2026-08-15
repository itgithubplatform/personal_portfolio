'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react'
import { experienceData } from '@/data/experience'

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(experienceData[0]?.id ?? null)

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
            <span>[03]</span>
            <span className="w-8 h-px bg-cyan-500" />
            <span>INDUSTRY INTERNSHIPS & RESEARCH LABS</span>
          </div>
          
          <h2 id="experience-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            EXPERIENCE & INTERNSHIPS.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Hands-on technical internships covering deep learning optimization, production backend engineering, and offensive/defensive cybersecurity.
          </p>
        </motion.div>

        {/* Accordion Cards */}
        <div className="space-y-5">
          {experienceData.map((exp, index) => {
            const isExpanded = expandedId === exp.id

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-lg ${
                  isExpanded
                    ? 'border-cyan-500/40 bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.12)]'
                    : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-6 sm:p-7 flex items-start justify-between text-left gap-4 focus:outline-none"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-[11px] font-semibold">
                        {exp.type}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">•</span>
                      <div className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                        <Calendar size={12} className="text-cyan-400" />
                        <span>{exp.duration} ({exp.period})</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 mt-1">
                      <MapPin size={12} className="text-slate-500" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                      {exp.description}
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
                      {/* Key Highlights */}
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                          <Award size={14} />
                          <span>KEY CONTRIBUTIONS & DELIVERABLES</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-800/60 bg-slate-900/40 text-xs text-slate-300">
                              <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech & Skills */}
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2.5">
                          SKILLS APPLIED
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-800/50 text-cyan-300 font-mono text-[11px]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
