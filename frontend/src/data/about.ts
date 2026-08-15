import { AboutCard, AboutData } from '@/types'

export type { AboutCard, AboutData }

export const aboutData: AboutData = {
  intro: [
    "I'm a passionate Computer Science student specializing in AI/ML at The Neotia University, West Bengal. With hands-on experience in building production-grade web applications, I love solving real-world problems through code.",
    "My expertise spans across full-stack development, machine learning, deep learning, computer vision, and cloud deployment. I've completed 10+ production deployments and actively work on academic research projects.",
    "When I'm not coding, you'll find me playing badminton, exploring new technologies, or working on innovative ML projects that make a real-world impact."
  ],
  
  cards: [
    {
      id: 1,
      icon: 'GraduationCap',
      iconColor: 'text-blue-500',
      gradient: 'from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600',
      title: 'Education',
      primary: 'B.Tech in CSE (AIML)',
      secondary: 'The Neotia University',
      tertiary: 'CGPA: 9.42 / 10',
      duration: '2023 - 2027'
    },
    {
      id: 2,
      icon: 'MapPin',
      iconColor: 'text-purple-500',
      gradient: 'from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600',
      title: 'Location',
      primary: 'West Bengal, India',
      secondary: 'Kakdwip, South 24 Parganas',
      tertiary: 743347,
      duration: null
    },
    {
      id: 3,
      icon: 'Briefcase',
      iconColor: 'text-green-500',
      gradient: 'from-green-50 to-teal-50 dark:from-slate-700 dark:to-slate-600',
      title: 'Experience',
      primary: '10+ Production Deployments',
      secondary: 'Academic & Personal Projects',
      tertiary: '3 Internships Completed',
      duration: null
    },
    {
      id: 4,
      icon: 'Heart',
      iconColor: 'text-red-500',
      gradient: 'from-red-50 to-pink-50 dark:from-slate-700 dark:to-slate-600',
      title: 'Interests',
      primary: 'AI/ML & Deep Learning',
      secondary: 'Full-Stack Web Dev',
      tertiary: 'Badminton & Tech Research',
      duration: null
    }
  ],
  
  interests: [
    'Machine Learning & Deep Learning',
    'Full-Stack Web Development',
    'Computer Vision & Image Processing',
    'Open Source Contribution',
    'Cloud Architecture & DevOps',
    'Playing Badminton & Fitness'
  ]
}