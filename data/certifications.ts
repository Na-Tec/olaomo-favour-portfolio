export type Certification = {
  id: string;
  title: string;
  organization: string;
  date: string;
  url?: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    id: 'nlp-deeptech',
    title: 'NLP Student — DeepTech_Ready (3MTT Program)',
    organization: 'DeepTech_Ready',
    date: 'May — December 2025',
    url: 'https://deeplearningindaba.com',
    image: '/projects/nlp-deeptech.png',
  },
  {
    id: 'deep-learning-indaba',
    title: 'Deep Learning Indaba',
    organization: 'Kigali, Rwanda (Virtual Attendee)',
    date: 'August 2025',
    url: 'https://deeplearningindaba.com',
    image: '/projects/healthpaddie.png',
  },
  {
    id: 'dsa-summer-school',
    title: 'Data Science Africa – Summer School & Research Workshop',
    organization: 'Data Science Africa',
    date: 'June 2025',
    image: '/projects/cleansight.png',
  },
  {
    id: 'dsn-ai-bootcamp',
    title: 'DSN AI Bootcamp (x2 Certification)',
    organization: 'Data Science Nigeria',
    date: '2023 & 2024',
    image: '/projects/insurlink.png',
  },
  {
    id: 'ml-kaggle',
    title: 'Machine Learning Certification',
    organization: 'Kaggle Learn',
    date: 'June 2024',
    image: '/projects/tts-voice-cloning.png',
  },
  {
    id: 'ignite-ui',
    title: 'Ignite Tech in Girls Bootcamp – UI Design',
    organization: 'UI Design Studio',
    date: 'June 2024',
    image: '/projects/ecx-backend.png',
  },
  {
    id: 'python-programming',
    title: 'Python Programming (Beginner to Advanced)',
    organization: 'Programming Hero (Online)',
    date: '2023',
    image: '/projects/nlp-deeptech.png',
  },
];