'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Check, X, Code2 } from 'lucide-react'
import { projectsData, Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isFeatured = project.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top Meta & Badges */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-[10px] font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>{project.year}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-emerald-400">{project.status}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, isFeatured ? 8 : 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md border border-slate-800 bg-slate-800/60 text-slate-300 font-mono text-[10px]"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > (isFeatured ? 8 : 5) && (
            <span className="px-2 py-0.5 rounded-md border border-slate-800 bg-slate-800/40 text-cyan-400 font-mono text-[10px]">
              +{project.tech.length - (isFeatured ? 8 : 5)} more
            </span>
          )}
        </div>
      </div>

      {/* Action Links & Modal trigger */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
        >
          <span>View Details & Architecture</span>
          <ArrowUpRight size={14} />
        </button>

        <div className="flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
            >
              <ExternalLink size={13} />
              <span>Live</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="p-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <Github size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['All', 'AI / Machine Learning', 'Web Development']

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-3.5 text-cyan-400">
              <span>[04]</span>
              <span className="w-8 h-px bg-cyan-500" />
              <span>PRODUCTION PLATFORMS & MACHINE LEARNING ARTIFACTS</span>
            </div>
            
            <h2 id="projects-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              FEATURED PROJECTS.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-semibold shadow-sm'
                    : 'border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Modal Detail */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 shadow-2xl space-y-6"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1">
                      <span>{selectedProject.category}</span>
                      <span>•</span>
                      <span>{selectedProject.year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl border border-slate-800 bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Full Description */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                    ARCHITECTURE OVERVIEW
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">
                      KEY CAPABILITIES & DELIVERABLES
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl border border-slate-800/60 bg-slate-800/30">
                          <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Full */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                    TECHNOLOGIES & PROTOCOLS
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-800/60 text-cyan-300 font-mono text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                  >
                    <Github size={15} />
                    <span>View GitHub Repo</span>
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors"
                    >
                      <ExternalLink size={15} />
                      <span>Launch Live App</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
