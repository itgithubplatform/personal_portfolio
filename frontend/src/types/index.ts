export interface PersonalInfo {
  name: string
  firstName: string
  title: string
  tagline: string
  description: string
  contact: {
    email: string
    phone: string
    location: string
    state: string
    country: string
  }
  social: {
    github: string
    linkedin: string
    email: string
  }
  education: {
    college: string
    degree: string
    duration: string
    cgpa: string
    location: string
  }
  resume: string
  profileImage: string
}

export interface Project {
  id: number
  title: string
  category: string
  image: string
  featured: boolean
  description: string
  fullDescription: string
  tech: string[]
  features: string[]
  github: string
  live: string | null
  status: string
  year: string
}

export interface SkillItem {
  name: string
  role: string
  logo: string | null
  tag?: string
}

export interface SkillCluster {
  name: string
  skills: SkillItem[]
}

export interface DomainEcosystemCategory {
  id: string
  index: string
  category: string
  tagline: string
  description: string
  clusters: SkillCluster[]
}

export interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  duration: string
  period: string
  type: string
  description: string
  highlights: string[]
  skills: string[]
}

export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  type: string
  description: string
  icon: string
  file: string
}

export interface ResearchItem {
  id: number
  title: string
  authors: string
  journal: string
  year: number
  abstract: string
  keywords: string[]
  link: string
  type: 'publication' | 'paper'
}

export interface AboutCard {
  id: number
  icon: string
  iconColor: string
  gradient: string
  title: string
  primary: string
  secondary: string
  tertiary: string | number
  duration: string | null
}

export interface AboutData {
  intro: string[]
  cards: AboutCard[]
  interests: string[]
}
