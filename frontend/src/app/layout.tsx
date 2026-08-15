import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { Plus_Jakarta_Sans, Space_Grotesk, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { personalInfo } from '@/data/personalInfo'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://benugopalkanjilal.dev'),
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.name} — ${personalInfo.title}. ${personalInfo.tagline}`,
  keywords: [
    personalInfo.name,
    'Full-Stack Developer',
    'AI/ML Engineer',
    'Deep Learning',
    'Computer Vision',
    'React',
    'Next.js',
    'FastAPI',
    'Python',
    'PyTorch',
    'TensorFlow',
    'Portfolio',
  ],
  authors: [{ name: personalInfo.name }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://benugopalkanjilal.dev',
  },
  openGraph: {
    type: 'website',
    url: 'https://benugopalkanjilal.dev',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/profile.webp',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Full-Stack & AI/ML Developer Portfolio`,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: ['/profile.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020817',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://benugopalkanjilal.dev/#profilepage',
        url: 'https://benugopalkanjilal.dev',
        name: `${personalInfo.name} Portfolio`,
        mainEntity: {
          '@id': 'https://benugopalkanjilal.dev/#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://benugopalkanjilal.dev/#person',
        name: personalInfo.name,
        url: 'https://benugopalkanjilal.dev',
        image: 'https://benugopalkanjilal.dev/profile.webp',
        jobTitle: 'Full-Stack & AI/ML Developer',
        description: personalInfo.description,
        sameAs: [
          personalInfo.social.github,
          personalInfo.social.linkedin,
        ],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: personalInfo.education.college,
        },
        knowsAbout: [
          'Full-Stack Development',
          'Artificial Intelligence',
          'Machine Learning',
          'Deep Learning',
          'Computer Vision',
          'React.js',
          'Next.js',
          'Python',
          'FastAPI',
          'PyTorch',
          'TensorFlow',
        ],
      },
    ],
  }

  const fontVariables = [
    plusJakartaSans.variable,
    spaceGrotesk.variable,
    syne.variable,
  ].join(' ')

  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
