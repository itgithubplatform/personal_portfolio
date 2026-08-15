import { ExperienceItem } from '@/types'

export type { ExperienceItem }

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'AI Research Intern',
    company: 'National Institute of Technology (NIT) Durgapur',
    location: 'Durgapur, West Bengal',
    duration: 'June 2026',
    period: '4 Weeks',
    type: 'Summer Research Internship',
    description: 'Conducted research on lightweight deep learning architectures by optimizing EfficientNet variants for image classification tasks with a focus on model efficiency and inference speed.',
    highlights: [
      'Evaluated architectural variants across the EfficientNet family',
      'Benchmarked performance on open-source image datasets',
      'Analyzed trade-offs between accuracy, parameter efficiency, and FLOPs',
      'Optimized deep learning models for efficient execution'
    ],
    skills: ['Python', 'PyTorch', 'TensorFlow', 'EfficientNet', 'Deep Learning', 'Computer Vision', 'Model Optimization']
  },
  {
    id: 2,
    title: 'Backend Development Intern',
    company: 'Xetalabs',
    location: 'Guwahati, Assam',
    duration: 'July 2025',
    period: '4 Weeks',
    type: 'Summer Training & Internship',
    description: 'Built production-grade RESTful APIs and full-stack web applications using Flask. Designed database schemas, implemented JWT-based authentication, and deployed services on cloud infrastructure.',
    highlights: [
      'Developed 5+ RESTful API endpoints with proper error handling & validation',
      'Implemented JWT authentication and role-based access control',
      'Built admin dashboard with Flask-Admin and Jinja2 templates',
      'Deployed applications on Railway with CI/CD pipeline'
    ],
    skills: ['Python', 'Flask', 'REST APIs', 'SQLAlchemy', 'PostgreSQL', 'JWT Auth', 'Jinja2', 'Railway', 'Git', 'Postman']
  },
  {
    id: 3,
    title: 'Cyber Security Intern',
    company: 'Webel PVT. LTD & The Neotia University',
    location: 'West Bengal, India',
    duration: 'June 2025',
    period: '6 Weeks',
    type: 'Summer Training & Internship',
    description: 'Intensive hands-on training program covering offensive and defensive cybersecurity. Gained practical experience in penetration testing, vulnerability assessment, and incident response using industry-standard tools.',
    highlights: [
      'Performed penetration testing on simulated enterprise networks',
      'Conducted vulnerability scanning using Nmap, Burp Suite & Wireshark',
      'Analyzed security logs to detect intrusion attempts and anomalies',
      'Presented findings and mitigation strategies in technical reports'
    ],
    skills: ['Cybersecurity', 'Penetration Testing', 'Nmap', 'Burp Suite', 'Wireshark', 'Network Security', 'Vulnerability Assessment']
  }
]

export const experiences = experienceData