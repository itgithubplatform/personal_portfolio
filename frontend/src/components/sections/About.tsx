'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, MapPin, Download, ArrowUpRight, Cpu, Code, Brain, ShieldCheck, Sparkles } from 'lucide-react'
import { aboutData } from '@/data/about'
import { personalInfo } from '@/data/personalInfo'

export default function About() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 92%', 'end start']
  })

  const headerY = useTransform(scrollYProgress, [0.05, 0.38], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1])

  const leftColY = useTransform(scrollYProgress, [0.1, 0.4], [30, 0])
  const rightColY = useTransform(scrollYProgress, [0.1, 0.45], [45, 0])

  const pillars = [
    {
      num: '01',
      title: 'Full-Stack Web Systems',
      desc: 'Architecting end-to-end applications using React, Next.js, FastAPI, Node.js, and PostgreSQL with robust auth & state management.',
      icon: Code
    },
    {
      num: '02',
      title: 'Grounded AI & RAG',
      desc: 'Building intelligent copilots (PaperLens AI) using hybrid retrieval (FAISS + BM25), Groq LLM API, and structured markdown outputs.',
      icon: Brain
    },
    {
      num: '03',
      title: 'Computer Vision & Deep Learning',
      desc: 'Developing multi-headed CNNs, Grad-CAM visual explainability maps, and real-time inference engines.',
      icon: Cpu
    },
    {
      num: '04',
      title: 'Academic Excellence',
      desc: 'Maintaining a 9.42 / 10 CGPA in B.Tech CSE (AI & ML) at The Neotia University while shipping production deployments.',
      icon: GraduationCap
    }
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background ambient spotlight */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 pointer-events-none opacity-20 blur-3xl rounded-full bg-cyan-500/10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-3.5 text-cyan-400">
            <span>[01]</span>
            <span className="w-8 h-px bg-cyan-500" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          
          <h2
            id="about-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl leading-[1.15] text-white"
          >
            ENGINEERING WITH RIGOR, GROUNDED AI & INTENTIONAL ARCHITECTURE.
          </h2>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <motion.div
            style={{ y: leftColY }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Bio Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-300"
            >
              <p>
                I am <strong className="text-white font-semibold">{personalInfo.name}</strong>, a Computer Science Undergraduate specializing in AI/ML at{' '}
                <strong className="text-white font-semibold">{personalInfo.education.college}</strong> ({personalInfo.education.cgpa} CGPA). My focus centers on building reliable web platforms, intelligent retrieval systems, and machine learning models that bridge scientific research with real-world utility.
              </p>
              <p>
                From authoring <strong className="text-white font-semibold">PaperLens AI</strong> (an academic research co-pilot with hybrid FAISS + BM25 retrieval) to deploying full-stack web platforms and explainable deep learning pipelines, I emphasize clean architecture, high performance, and visual polish.
              </p>
            </motion.div>

            {/* Core Engineering Pillars */}
            <div className="pt-2">
              <div className="font-mono text-xs uppercase tracking-wider mb-6 flex items-center gap-2 text-slate-400">
                <span>CORE ENGINEERING PILLARS</span>
                <span className="flex-1 h-px bg-slate-800" />
              </div>

              <div className="space-y-4">
                {pillars.map((p) => {
                  const Icon = p.icon
                  return (
                    <motion.div
                      key={p.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.5 }}
                      className="p-5 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl relative group transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80 shadow-lg cursor-default"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-800 bg-slate-800/60 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10">
                          <Icon size={20} className="text-slate-200 group-hover:text-cyan-300 transition-colors" />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                              {p.title}
                            </h3>
                            <span className="font-mono text-xs font-bold text-cyan-400 shrink-0">
                              [{p.num}]
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Dossier Card */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Engineer ID Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              {/* Header: Photo + Verified Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pb-6 border-b border-slate-800">
                <div className="w-28 sm:w-32 aspect-[530/690] rounded-xl overflow-hidden border border-cyan-500/40 shrink-0 shadow-lg relative group bg-slate-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Full-Stack Developer & AI/ML Engineer`}
                    width="530"
                    height="690"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement
                      target.onerror = null
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='530' height='690' viewBox='0 0 530 690'%3E%3Crect width='100%25' height='100%25' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2338bdf8' font-family='sans-serif' font-size='26'%3EBenu Gopal Kanjilal%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>

                <div className="space-y-2 flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-sm">
                    <ShieldCheck size={13} className="text-cyan-400" />
                    <span className="font-bold">VERIFIED ENGINEER</span>
                  </div>

                  <h3 className="font-black text-xl tracking-tight text-white">
                    {personalInfo.name}
                  </h3>

                  <div className="font-mono text-xs font-semibold text-cyan-400">
                    B.Tech CSE (AI & ML) • 2023–2027
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 pt-0.5">
                    <MapPin size={13} className="shrink-0 text-cyan-400" />
                    <span>West Bengal, India</span>
                  </div>
                </div>
              </div>

              {/* Spec Rows */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-500">INSTITUTION</span>
                  <span className="font-semibold text-white">{personalInfo.education.college}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-500">ACADEMIC SCORE</span>
                  <span className="font-bold px-2.5 py-0.5 rounded border border-cyan-500/40 bg-cyan-500/10 text-cyan-300">
                    {personalInfo.education.cgpa}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-500">DEPLOYMENTS</span>
                  <span className="font-semibold text-white">10+ Production Live</span>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-500">RESEARCH FIELD</span>
                  <span className="font-semibold text-white">RAG & Vision AI</span>
                </div>
              </div>

              {/* Download Action */}
              <div className="pt-6">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white transition-all shadow-md group"
                >
                  <Download size={14} className="text-cyan-400" />
                  <span>Download Curriculum Vitae (PDF)</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Interests & Domains */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl shadow-lg"
            >
              <div className="font-mono text-xs uppercase tracking-wider mb-4 flex items-center gap-2 text-slate-400">
                <Sparkles size={13} className="text-cyan-400" />
                <span>INTERESTS & EXPLORATION</span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {aboutData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-800/50 text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors cursor-default"
                  >
                    #{interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
