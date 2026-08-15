import { PersonalInfo } from '@/types'

export type { PersonalInfo }

export const personalInfo: PersonalInfo = {
  name: 'Benu Gopal Kanjilal',
  firstName: 'Benu',
  title: 'Full-Stack Developer | AI/ML Enthusiast | CSE Student',
  tagline: 'Building intelligent web applications with React, Node.js, and Machine Learning.',
  description: 'Passionate about creating impactful solutions with AI, Deep Learning, and modern web architectures.',
  
  contact: {
    email: 'benugopalkanjilal@gmail.com',
    phone: '+91 8509187746',
    location: 'Kakdwip, South 24 Parganas',
    state: 'West Bengal',
    country: 'India'
  },
  
  social: {
    github: 'https://github.com/benugopalkanjilal',
    linkedin: 'https://www.linkedin.com/in/benu-gopal-kanjilal',
    email: 'mailto:benugopalkanjilal@gmail.com'
  },
  
  education: {
    college: 'The Neotia University',
    degree: 'B.Tech (CSE - AI & ML)',
    duration: '2023 - 2027',
    cgpa: '9.42 / 10',
    location: 'West Bengal, India'
  },
  
  resume: '/resume.pdf',
  profileImage: '/profile.webp'
}