'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, User, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      // Simulate submission or connect to email provider
      await new Promise((resolve) => setTimeout(resolve, 1200))

      setStatus({
        type: 'success',
        message: 'Message dispatched successfully! I will get back to you shortly.',
      })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

      setTimeout(() => setStatus({ type: 'idle' }), 6000)
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: personalInfo.social.email,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: `${personalInfo.contact.location}, ${personalInfo.contact.state}`,
      href: '#',
    },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-3.5 text-cyan-400">
            <span>[07]</span>
            <span className="w-8 h-px bg-cyan-500" />
            <span>INITIATE COMMUNICATION</span>
          </div>
          
          <h2 id="contact-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            LET&apos;S BUILD SOMETHING INTELLIGENT.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Whether you are looking to collaborate on machine learning projects, build high-scale full-stack applications, or explore research ideas, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <div
                  key={contact.label}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl hover:border-cyan-500/40 transition-all shadow-md group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-slate-800 bg-slate-800/60 text-cyan-400 shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/10 transition-all">
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-wider">{contact.label}</p>
                    {contact.href && contact.href !== '#' ? (
                      <a
                        href={contact.href}
                        className="text-white font-semibold text-sm sm:text-base hover:text-cyan-300 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm sm:text-base">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl">
              <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-4">
                DIRECT CHANNELS
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.social.email}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold"
                >
                  <Mail size={16} />
                  <span>Email Direct</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 text-slate-500" size={17} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 text-slate-500" size={17} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                  placeholder="Project inquiry, research, opportunity..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 text-slate-500" size={17} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition resize-none"
                    placeholder="Describe your vision or inquiry..."
                  />
                </div>
              </div>

              {/* Status Banner */}
              {status.type !== 'idle' && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : status.type === 'error'
                        ? 'bg-red-500/10 border border-red-500/30 text-red-300'
                        : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300'
                  }`}
                >
                  {status.type === 'loading' && <span>Transmitting message...</span>}
                  {status.type === 'success' && <span>{status.message}</span>}
                  {status.type === 'error' && <span>{status.message}</span>}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-70 flex items-center justify-center gap-2 text-sm"
              >
                <Send size={16} />
                <span>{status.type === 'loading' ? 'Transmitting...' : 'Send Transmission'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
