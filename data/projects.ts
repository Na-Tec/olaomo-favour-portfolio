export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'featured' | 'other';
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'tts-voice-cloning',
    title: 'TTS Voice Cloning',
    description:
      'End-to-end custom voice cloning Text-to-Speech project with dataset preparation, LoRA fine-tuning, and Hugging Face dataset integration.',
    tags: ['Jupyter Notebook', 'Python', 'Deep Learning'],
    category: 'featured',
    githubUrl: 'https://github.com/Na-Tec/olaomo-favour-portfolio',
  },
  {
    id: 'healthpaddie',
    title: 'HealthPaddie — Multilingual AI Health Assistant',
    description:
      'A multilingual AI health assistant that pushed the boundaries of innovation, showing what accessible, inclusive healthcare can look like. 1st Place Winner, DataHer Africa Datathon 2025.',
    tags: ['AI', 'Healthcare', 'Multilingual', 'NLP'],
    category: 'featured',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ecx-backend',
    title: 'ECX Backend Class',
    description:
      'This repository hosts all task submissions during training with the ECX engineering program.',
    tags: ['JavaScript', 'Backend'],
    category: 'other',
    githubUrl: 'https://github.com',
  },
  {
    id: 'nlp-deeptech',
    title: 'Natural Language Processing DeepTech Ready',
    description:
      'This repository documents the journey as a beginner in Natural Language Processing (NLP) through the DeepTech_Ready program.',
    tags: ['NLP', 'Python', 'Machine Learning'],
    category: 'featured',
    githubUrl: 'https://github.com',
  },
  {
    id: 'cleansight',
    title: 'CleanSight — Environmental Waste Monitoring System',
    description:
      'Developed a platform for reporting and monitoring environmental waste hotspots using AI and community data.',
    tags: ['AI', 'Environment', 'Computer Vision'],
    category: 'featured',
    githubUrl: 'https://github.com',
  },
  {
    id: 'insurlink',
    title: 'InsurLink — AI Insurance Platform for SMEs',
    description:
      'Led development and built an AI chatbot to help SMEs navigate insurance options with ease.',
    tags: ['AI', 'Insurance', 'Chatbot', 'NLP'],
    category: 'featured',
    githubUrl: 'https://github.com',
  },
];
