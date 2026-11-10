import type { Metadata, Viewport } from 'next'
import '@/index.css'
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  ...(siteUrl ? {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: siteUrl },
  } : {}),
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.name} — ${personalInfo.title}. ${personalInfo.tagline}`,
  keywords: [
    personalInfo.name,
    'CSE Student',
    'Full-Stack Development',
    'AI and Machine Learning',
    'Deep Learning',
    'Portfolio',
  ],
  authors: [{ name: personalInfo.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    ...(siteUrl ? { url: siteUrl } : {}),
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.profileImage,
        alt: `${personalInfo.name} - AI/ML and Full-Stack Developer`,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: [personalInfo.profileImage],
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
        '@type': 'Person',
        '@id': `${personalInfo.social.github}#person`,
        name: personalInfo.name,
        url: personalInfo.social.github,
        image: personalInfo.profileImage,
        jobTitle: personalInfo.title,
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
