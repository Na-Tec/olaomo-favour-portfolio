export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
  tags?: string[];
};

export const publications: Publication[] = [
  {
    id: 'inclusive-nlp-2025',
    title:
      'Towards Inclusive NLP: Benchmarking and Mitigating Bias in Named Entity Recognition for African Languages and Entities',
    authors: 'Olaomo Favour',
    venue:
      'Women in Machine Learning Workshop (WiML) at NeurIPS, Mexico City 2025 (With Travel Grant)',
    year: '2025',
    url: 'https://wimlworkshop.org',
    tags: ['NLP', 'Bias Mitigation', 'African Languages', 'NER'],
  },
];
