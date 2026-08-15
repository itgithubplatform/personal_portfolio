import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020817',
        foreground: '#e2e8f0',
        surface: '#0f172a',
        panel: '#111827',
        accent: '#38bdf8',
        accent2: '#60a5fa',
        primary: '#0ea5e9',
        secondary: '#8b5cf6',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(to right, rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,165,233,0.12) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.35)',
        soft: '0 20px 45px rgba(15, 23, 42, 0.22)',
      },
    },
  },
  plugins: [],
}

export default config
