import { ResearchItem } from '@/types'

export type { ResearchItem }

export const researchItems: ResearchItem[] = [
  {
    id: 1,
    title: 'Benchmarking & Optimization of Lightweight EfficientNet Architectures for Edge Vision Systems',
    authors: 'Benu Gopal Kanjilal, et al.',
    journal: 'NIT Durgapur Research Internship Work',
    year: 2026,
    abstract:
      'Investigation and comparative analysis of lightweight convolutional backbones (EfficientNet variants) targeting edge-device inference. Explores parameter pruning, quantized activation functions, and latency-accuracy Pareto frontiers across standard vision benchmarks.',
    keywords: ['EfficientNet', 'Model Optimization', 'Computer Vision', 'Edge AI', 'Deep Learning'],
    link: 'https://github.com/benugopalkanjilal',
    type: 'paper',
  },
  {
    id: 2,
    title: 'Hybrid Retrieval-Augmented Generation for Explainable Scientific Literature Exploration',
    authors: 'Benu Gopal Kanjilal',
    journal: 'Academic Pre-print & Technical Whitepaper',
    year: 2026,
    abstract:
      'Introduces a dual-stage retrieval pipeline combining dense vector embeddings (FAISS) and sparse lexical indexing (BM25) with cross-encoder re-ranking for verifiable question-answering over unstructured research papers and PDF/DOCX documents.',
    keywords: ['RAG', 'Hybrid Search', 'FAISS', 'BM25', 'NLP', 'Groq API'],
    link: 'https://paperlens.benugopalkanjilal.dev/',
    type: 'publication',
  },
  {
    id: 3,
    title: 'Automated Multi-Class Crop Pathology Diagnosis using Transfer Learning and Grad-CAM',
    authors: 'Benu Gopal Kanjilal',
    journal: 'Applied Deep Learning Report',
    year: 2025,
    abstract:
      'A deep convolutional neural network pipeline for automated disease recognition in agricultural crops. Incorporates visual interpretability maps using Gradient-weighted Class Activation Mapping (Grad-CAM) to foster trust in automated agricultural diagnostic tools.',
    keywords: ['Plant Pathology', 'Grad-CAM', 'Transfer Learning', 'CNN', 'Healthcare AI'],
    link: 'https://github.com/benugopalkanjilal/Plant-Disease-Detection',
    type: 'paper',
  }
]
