import { Project } from '@/types'

export type { Project }

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'PaperLens AI',
    category: 'Web Development',
    image: '/project-images/paperlens.webp',
    featured: true,
    description: 'AI research co-pilot for paper analysis, gap discovery, experiment planning, problem ideation, and dataset/benchmark recommendation.',
    fullDescription: 'PaperLens AI is a full-stack research intelligence platform built with React + Vite frontend and FastAPI backend. It now includes end-to-end academic workflow support: paper analysis (PDF/DOCX), grounded follow-up Q&A, gap detection, experiment planning, research-problem generation, and the new Dataset & Benchmark Finder that maps project title/plan to relevant datasets, benchmark suites, and domain technologies with card-wise explainable details. The system uses Groq-powered structured generation, Clerk JWT authentication, SQLAlchemy + PostgreSQL persistence, and a hybrid retrieval layer (FAISS + BM25) for grounded responses.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Clerk', 'Groq API', 'FAISS', 'BM25', 'sentence-transformers', 'pdfplumber'],
    features: [
      'Paper Analyzer with PDF/DOCX upload and structured markdown output',
      'Grounded follow-up Q&A using document-aware hybrid retrieval',
      'Gap Detection from uploaded papers or direct project-plan text',
      'Experiment Planner that generates step-wise technical execution plans',
      'Problem Generator for domain/subdomain-based research idea creation',
      'Dataset & Benchmark Finder from project title or full project plan',
      'Card-wise recommendation UI with click-to-expand dataset/benchmark details',
      'Domain technology stack suggestions for faster implementation decisions',
      'Advanced landing page with interactive “Why PaperLens AI?” showcase',
      'Dashboard analytics for user activity and recently analyzed papers',
      'Hybrid RAG pipeline with FAISS + BM25 and optional CrossEncoder reranking',
      'Clerk-authenticated API with PostgreSQL-backed activity/document tracking'
    ],
    github: 'https://github.com/benugopalkanjilal/PaperLens-AI.git',
    live: 'https://paperlens.benugopalkanjilal.dev/',
    status: 'Completed',
    year: '2026'
  },
  {
    id: 2,
    title: 'SSH-V2',
    category: 'Web Development',
    image: '/project-images/ssh.webp',
    featured: false,
    description: 'Full-stack student management platform with authentication, portfolios, file uploads, and admin dashboard.',
    fullDescription: 'Comprehensive student management application with React frontend and Node.js backend. Features include JWT authentication, student portfolio management, file upload with Multer, PDF portfolio generation, and admin dashboards for CRUD operations. Built with PostgreSQL for data persistence and responsive design for all devices.',
    tech: ['Next.js', 'React', 'Node.js', 'Tailwind', 'Express', 'Supabase', 'JWT', 'Multer', 'REST API', 'EmailJS'],
    features: [
      'User authentication with JWT tokens',
      'Student portfolio creation and management',
      'File upload functionality with Multer',
      'Admin dashboard for CRUD operations',
      'PDF portfolio generation from student data',
      'Responsive design with Tailwind CSS',
      'Email notifications with EmailJS',
      'Role-based access control (Admin/Student)'
    ],
    github: 'https://github.com/benugopalkanjilal/SSH-V2.git',
    live: 'https://ssh.benugopalkanjilal.dev/',
    status: 'Completed',
    year: '2025'
  },
  {
    id: 3,
    title: 'Plant Disease Detection using CNN',
    category: 'AI / Machine Learning',
    image: '/project-images/cnn.webp',
    featured: true,
    description: 'Deep learning application for plant leaf disease detection using Convolutional Neural Networks and Transfer Learning.',
    fullDescription: 'Developed an end-to-end deep learning system for automated plant disease diagnosis from leaf images. The model classifies multiple crop diseases across diverse species with high accuracy. Implemented data augmentation, transfer learning with fine-tuning, and Grad-CAM for visual explanations of model predictions.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Transfer Learning', 'Flask', 'NumPy', 'Matplotlib'],
    features: [
      'Multi-class plant disease classification across multiple crops',
      'Transfer learning using state-of-the-art architectures (ResNet, MobileNet)',
      'Data augmentation pipeline for robust generalization',
      'Grad-CAM heatmaps for visual interpretability of model decisions',
      'Web-based prediction interface for real-time image uploads',
      'Trained on PlantVillage dataset with 95%+ validation accuracy'
    ],
    github: 'https://github.com/benugopalkanjilal/Plant-Disease-Detection.git',
    live: null,
    status: 'Completed',
    year: '2025'
  },
  {
    id: 4,
    title: 'Chest X-Ray Disease Classification',
    category: 'AI / Machine Learning',
    image: '/project-images/xray.webp',
    featured: false,
    description: 'Deep learning pipeline for multi-label thoracic disease classification from chest radiographs with Grad-CAM visualization.',
    fullDescription: 'A medical imaging AI solution utilizing deep convolutional neural networks to classify multiple thoracic pathologies (Pneumonia, Cardiomegaly, Effusion, etc.) from chest X-ray scans. Incorporates class-imbalance mitigation, AUC-ROC evaluation metrics, and class activation mapping for clinical interpretability.',
    tech: ['Python', 'PyTorch', 'Torchvision', 'EfficientNet', 'Grad-CAM', 'Scikit-learn', 'Pandas', 'Albumentations'],
    features: [
      'Multi-label classification of 14 common thoracic diseases',
      'EfficientNet backbone optimized for medical radiograph features',
      'Focal loss and weighted cross-entropy to handle severe class imbalance',
      'Grad-CAM localization of pathological regions for radiologists',
      'Comprehensive performance evaluation with ROC-AUC curves',
      'Benchmarked on NIH ChestX-ray14 dataset'
    ],
    github: 'https://github.com/benugopalkanjilal/Chest-XRay-Classification.git',
    live: null,
    status: 'Completed',
    year: '2025'
  },
  {
    id: 5,
    title: 'Brain Tumor Segmentation using UNet',
    category: 'AI / Machine Learning',
    image: '/project-images/tumor.webp',
    featured: true,
    description: 'Semantic segmentation of brain tumors from multi-modal MRI scans using U-Net architecture.',
    fullDescription: 'An automated medical image segmentation pipeline leveraging a modified U-Net architecture to delineate brain tumor sub-regions (edema, enhancing tumor, necrotic core) from multi-modal MRI (T1, T1ce, T2, FLAIR) volumes.',
    tech: ['Python', 'PyTorch', 'U-Net', 'Nibabel', 'SimpleITK', 'Medical Imaging', 'Docker', 'CUDA'],
    features: [
      'End-to-end 3D volumetric preprocessing and intensity normalization',
      'U-Net with residual connections and attention gates for fine boundary delineation',
      'Dice loss and Generalized Dice Loss optimization',
      'Multi-class tumor sub-region segmentation (WT, TC, ET)',
      'Evaluated on BraTS benchmark dataset with high Dice score'
    ],
    github: 'https://github.com/benugopalkanjilal/Brain-Tumor-Segmentation.git',
    live: null,
    status: 'Completed',
    year: '2025'
  }
]

export const projects = projectsData