export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'featured' | 'other';
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  mediumUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'Cloud Engineering',
    title: 'Product-Demand-Inventory-Analytics-Dashboard',
    description:
      'An interactive, multi-view Power BI analytics report designed to evaluate product demand, inventory value, and warehouse performance. The project focuses on delivering dynamic user interactivity, comparative KPI tracking, and advanced visual filtering architecture.',
    tags: ['Jupyter Notebook', 'Python', 'Power BI', 'Data Analytics','Excel'],
    category: 'featured',
    image: '/projects/Dashboard_Display.png',
    githubUrl: 'https://github.com/olaomofavour/Product-Demand-Inventory-Analytics-Dashboard',
    mediumUrl: 'https://medium.com/@olaomofavour/product-demand-inventory-analytics-27497883edc3',
  },
  {
    id: 'healthpaddie',
    title: 'HealthPaddie — Multilingual AI Health Assistant',
    description:
      'A multilingual AI health assistant that pushed the boundaries of innovation, showing what accessible, inclusive healthcare can look like. 1st Place Winner, DataHer Africa Datathon 2025.',
    tags: ['AI', 'Healthcare', 'Multilingual', 'NLP'],
    category: 'featured',
    image: '/projects/healthpaddie.png',
    githubUrl: 'https://github.com',
    // mediumUrl: 'https://medium.com/...',
  },
  {
    id: 'ecx-backend',
    title: 'ECX Backend Class',
    description:
      'This repository hosts all task submissions during training with the ECX engineering program.',
    tags: ['JavaScript', 'Backend'],
    category: 'other',
    image: '/projects/ecx-backend.png',
    githubUrl: 'https://github.com',
  },
  {
    id: 'nlp-deeptech',
    title: 'Natural Language Processing DeepTech Ready',
    description:
      'This repository documents the journey as a beginner in Natural Language Processing (NLP) through the DeepTech_Ready program.',
    tags: ['NLP', 'Python', 'Machine Learning'],
    category: 'featured',
    image: '/projects/nlp-deeptech.png',
    githubUrl: 'https://github.com',
  },
  {
    id: 'cleansight',
    title: 'CleanSight — Environmental Waste Monitoring System',
    description:
      'Developed a platform for reporting and monitoring environmental waste hotspots using AI and community data.',
    tags: ['AI', 'Environment', 'Computer Vision'],
    category: 'featured',
    image: '/projects/cleansight.png',
    githubUrl: 'https://github.com',
  },
  {
    id: 'insurlink',
    title: 'InsurLink — AI Insurance Platform for SMEs',
    description:
      'Led development and built an AI chatbot to help SMEs navigate insurance options with ease.',
    tags: ['AI', 'Insurance', 'Chatbot', 'NLP'],
    category: 'featured',
    image: '/projects/insurlink.png',
    githubUrl: 'https://github.com',
    // mediumUrl: 'https://medium.com/...',
  },
];