'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Award, Calendar, Building, Eye, X, ShieldCheck } from 'lucide-react'
import { certificatesData } from '@/data/certificates'
import { Certificate } from '@/types'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!selectedCert) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCert])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 92%', 'end start']
  })

  const headerY = useTransform(scrollYProgress, [0.05, 0.38], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1])

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-3 text-cyan-400">
            <span>[06]</span>
            <span className="w-8 h-px bg-cyan-500" />
            <span>ACCREDITATIONS & CERTIFICATIONS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              id="certificates-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl"
            >
              VERIFIED CREDENTIALS.
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 font-mono text-xs text-cyan-300">
              <ShieldCheck size={15} className="text-cyan-400" />
              <span className="font-semibold">{certificatesData.length} Verified Accreditations</span>
            </div>
          </div>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl group h-full"
            >
              <div className="space-y-3">
                {/* Meta Row */}
                <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <span>[CRED // 0{idx + 1}]</span>
                    <ShieldCheck size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="px-2 py-0.5 rounded border border-slate-800 bg-slate-800/50 text-[11px] text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-base sm:text-lg leading-snug mb-1 text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-cyan-400">
                    {cert.type}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Issuer & Action */}
              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-1.5 truncate max-w-[65%] text-slate-400">
                  <Building size={13} className="shrink-0 text-cyan-400" />
                  <span className="truncate">{cert.issuer}</span>
                </div>

                {cert.file && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Eye size={13} />
                    <span>View</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl border border-cyan-500/30 bg-slate-900 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div>
                  <div className="font-mono text-xs uppercase text-cyan-400">
                    [VERIFIED CERTIFICATE // {selectedCert.date}]
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 bg-slate-950 flex items-center justify-center overflow-auto max-h-[70vh]">
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  width="800"
                  height="600"
                  className="max-w-full max-h-[65vh] object-contain rounded-xl border border-slate-800"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.onerror = null
                    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='100%25' height='100%25' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2338bdf8' font-family='sans-serif' font-size='24'%3E${encodeURIComponent(selectedCert.title)}%3C/text%3E%3C/svg%3E`
                  }}
                />
              </div>

              <div className="p-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400 bg-slate-950">
                <span>ISSUED BY: {selectedCert.issuer}</span>
                <button onClick={() => setSelectedCert(null)} className="hover:text-white transition-colors">
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
