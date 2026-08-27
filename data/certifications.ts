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
    id: 'Microsoft-Azure-Data-Fundamentals-DP900',
    title: 'Microsoft Certified: Azure Data Fundamentals DP900',
    organization: 'Microsoft',
    date: 'August 7, 2026',  
    url: 'https://learn.microsoft.com/en-us/users/olaomofavour-8110/credentials/84c8137629f3bcee',
    image: '/projects/nlp-deeptech.png',
  },
  {
    id: 'Microsoft-Azure-Fundamentals-AZ900',
    title: 'Microsoft Certified Azure Fundamentals AZ900',
    organization: 'Microsoft',
    date: 'August 2025',
    url: 'https://learn.microsoft.com/en-us/users/olaomofavour-8110/credentials/636db5aaaab8548f',
    image: '/projects/healthpaddie.png',
  },
  {
    id: 'NITDA',
    title: 'The Digital Literacy for All (DL4ALL) Program',
    organization: 'NITDA',
    date: 'March 2025',
    url: 'https://drive.google.com/file/d/1JKrjhXJ4tuyjI6uue8plFK6wFmcNEuvJ/view?usp=drive_link',
    image: '/projects/DL4ALL.png',
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