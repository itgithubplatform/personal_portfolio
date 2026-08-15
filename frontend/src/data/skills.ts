import { DomainEcosystemCategory, SkillCluster, SkillItem } from '@/types'

export type { DomainEcosystemCategory, SkillCluster, SkillItem }

const devicon = (name: string, variant = 'original'): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

export const domainEcosystem: DomainEcosystemCategory[] = [
  {
    id: 'languages',
    index: '01',
    category: 'Languages',
    tagline: 'RUNTIME EXECUTION & CORE LOGIC',
    description: 'Formulating efficient algorithms, concurrent data processing, and type-safe backend abstractions across low-level and high-level execution runtimes.',
    clusters: [
      {
        name: 'High-Level & AI Execution',
        skills: [
          { name: 'Python', role: 'AI & Data Engine', logo: devicon('python') },
          { name: 'JavaScript', role: 'Reactive Systems', logo: devicon('javascript') },
          { name: 'TypeScript', role: 'Type Safety', logo: devicon('typescript') },
          { name: 'Java', role: 'OOP & Enterprise', logo: devicon('java') }
        ]
      },
      {
        name: 'Systems & Query Engines',
        skills: [
          { name: 'C', role: 'Systems & Memory', logo: devicon('c') },
          { name: 'C++', role: 'Performance & Algo', logo: devicon('cplusplus') },
          { name: 'SQL', role: 'Relational Queries', logo: devicon('postgresql') },
          { name: 'R', role: 'Statistical Computing', logo: devicon('r') }
        ]
      }
    ]
  },
  {
    id: 'ai-engineering',
    index: '02',
    category: 'AI & Intelligent Systems',
    tagline: 'NEURAL NETWORKS, VISION & RAG',
    description: 'Architecting deep learning pipelines, training computer vision models, building explainable AI with Grad-CAM, and deploying RAG architectures.',
    clusters: [
      {
        name: 'Deep Learning & Vision Frameworks',
        skills: [
          { name: 'PyTorch', role: 'Deep Learning', logo: devicon('pytorch') },
          { name: 'TensorFlow', role: 'Model Training', logo: devicon('tensorflow') },
          { name: 'Keras', role: 'High-level DL', logo: devicon('keras') },
          { name: 'OpenCV', role: 'Computer Vision', logo: devicon('opencv') }
        ]
      },
      {
        name: 'Scientific & Data Stack',
        skills: [
          { name: 'NumPy', role: 'Tensor Ops', logo: devicon('numpy') },
          { name: 'Pandas', role: 'Data Manipulation', logo: devicon('pandas') },
          { name: 'Scikit-Learn', role: 'ML Algorithms', logo: devicon('scikitlearn') },
          { name: 'FAISS / BM25', role: 'Vector & Hybrid Search', logo: null }
        ]
      }
    ]
  },
  {
    id: 'fullstack-web',
    index: '03',
    category: 'Full-Stack Engineering',
    tagline: 'SCALABLE CLIENT & SERVER ARCHITECTURES',
    description: 'Developing high-throughput asynchronous backends and responsive reactive web applications with state-of-the-art UX.',
    clusters: [
      {
        name: 'Frontend Frameworks & UI',
        skills: [
          { name: 'React', role: 'UI Components', logo: devicon('react') },
          { name: 'Next.js', role: 'Full-Stack SSR/SSG', logo: devicon('nextjs') },
          { name: 'Tailwind CSS', role: 'Utility Styling', logo: devicon('tailwindcss') },
          { name: 'Framer Motion', role: 'Micro-Animations', logo: null }
        ]
      },
      {
        name: 'Backend & Data Persistence',
        skills: [
          { name: 'FastAPI', role: 'Async Python Backend', logo: devicon('fastapi') },
          { name: 'Flask', role: 'REST Microservices', logo: devicon('flask') },
          { name: 'Node.js', role: 'JavaScript Runtime', logo: devicon('nodejs') },
          { name: 'Express', role: 'Routing & Middleware', logo: devicon('express') },
          { name: 'PostgreSQL', role: 'Relational DB', logo: devicon('postgresql') },
          { name: 'MongoDB', role: 'Document Store', logo: devicon('mongodb') }
        ]
      }
    ]
  },
  {
    id: 'devops-tools',
    index: '04',
    category: 'DevOps & Tooling',
    tagline: 'INFRASTRUCTURE, CI/CD & SECURITY',
    description: 'Containerizing services, automating delivery pipelines, testing web applications, and performing vulnerability assessment.',
    clusters: [
      {
        name: 'Cloud & Containerization',
        skills: [
          { name: 'Docker', role: 'Container Engine', logo: devicon('docker') },
          { name: 'AWS', role: 'Cloud Infrastructure', logo: devicon('amazonwebservices', 'original-wordmark') },
          { name: 'Git & GitHub', role: 'Version Control', logo: devicon('git') },
          { name: 'Vercel / Railway', role: 'Production PaaS', logo: null }
        ]
      },
      {
        name: 'Security & QA Tools',
        skills: [
          { name: 'Burp Suite', role: 'Sec Testing', logo: null },
          { name: 'Wireshark', role: 'Packet Analysis', logo: null },
          { name: 'Nmap', role: 'Network Discovery', logo: null },
          { name: 'Postman', role: 'API Testing', logo: devicon('postman') }
        ]
      }
    ]
  }
]