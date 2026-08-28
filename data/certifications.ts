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
    image: '/projects/DP900.png',
  },
  {
    id: 'Microsoft-Azure-Fundamentals-AZ900',
    title: 'Microsoft Certified Azure Fundamentals AZ900',
    organization: 'Microsoft',
    date: 'August 2025',
    url: 'https://learn.microsoft.com/en-us/users/olaomofavour-8110/credentials/636db5aaaab8548f',
    image: '/projects/AZ900.png',
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
    id: 'Redbull',
    title: 'On-Premise Sales Job Simulation',
    organization: 'Forage',
    date: '2026',
    url:'https://www.theforage.com/completion-certificates/P2whMfgG9v48cqWwx/s6RNpxzBkpREvE4xk_P2whMfgG9v48cqWwx_77Bs3mdo56XYM5B5b_1784013578711_completion_certificate.pdf',
    image: '/projects/RedBull_forge.png',
  },
  {
    id: 'Bloomberg',
    title: 'Client Service Job Simulation',
    organization: 'Forage',
    date: 'June 2024',
    url : 'https://www.theforage.com/completion-certificates/pNeDZ9MsW9WShojQm/sqYY2sxG2zNqXfHjJ_pNeDZ9MsW9WShojQm_77Bs3mdo56XYM5B5b_1786453902355_completion_certificate.pdf',
    image: '/projects/Bloomberg_forage.png',
  },
  {
    id: 'Maven Analytic',
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    organization: 'Udemy',
    date: '2026', 
    url : 'https://www.udemy.com/certificate/UC-4d555918-7bcd-4f45-9de7-c24b83ba61f3/', 
    image: '/projects/UC-4d555918-7bcd-4f45-9de7-c24b83ba61f3.jpg',
  },
];