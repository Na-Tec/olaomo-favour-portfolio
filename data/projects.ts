export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'featured' | 'other' | 'Data analysis';
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  mediumUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'Dashboard',
    title: 'Product-Demand-Inventory-Analytics-Dashboard',
    description:
      'An interactive, multi-view Power BI analytics report designed to evaluate product demand, inventory value, and warehouse performance. The project focuses on delivering dynamic user interactivity, comparative KPI tracking, and advanced visual filtering architecture.',
    tags: ['Jupyter Notebook', 'Python', 'Power BI', 'Data Analytics','Excel'],
    category: 'Data analysis',
    image: '/projects/Dashboard_Display.png',
    githubUrl: 'https://github.com/olaomofavour/Product-Demand-Inventory-Analytics-Dashboard',
    mediumUrl: 'https://medium.com/@olaomofavour/product-demand-inventory-analytics-27497883edc3',
  },
  {
    id: ' EDA-HR-Analytics',
    title: 'Decoding Workforce Dynamics: An In-Depth HR Analytics & EDA Case Study',
    description:
      'An end-to-end HR analytics study evaluating retention, pay equity, and sentiment across 311 employee records. By integrating 7 relational tables, it uncovers behavioral turnover triggers—like tardiness linking to disengagement (r = -0.59)—and provides data-driven strategies to curb attrition and improve workplace satisfaction.',
    tags: ['Data analysis', 'Python', 'EDA', 'Data visualization'],
    category: 'Data analysis',
    image: '/projects/HR_workforce_EDA_Image.jpg',
    githubUrl: 'https://github.com/olaomofavour/Decoding-Workforce-Dynamics-An-In-Depth-HR-Analytics-EDA-Case-Study',
    mediumUrl: 'https://medium.com/@olaomofavour/decoding-workforce-dynamics-an-in-depth-hr-analytics-eda-case-study-3ed125a3d65a',
  },
  {
    id: ' EDA-Book-Publishing',
    title: 'Decoding the Book Publishing Market: An In-Depth Commercial EDA & Revenue Case Study',
    description:
      'A commercial EDA analyzing 1,070 books to uncover revenue concentration, pricing elasticity, and platform dominance. It segments price quartiles, diagnoses zero-revenue splits, identifies undervalued catalog gems, and highlights publisher monopolization led by Amazon Digital Services (58.7% share).',
    tags: ['Data analysis', 'Python', 'EDA', 'Data visualization'],
    category: 'Data analysis' ,
    image: '/projects/Book_EDA_image.jpg',
    githubUrl: 'https://github.com/olaomofavour/Decoding-the-Book-Publishing-Market-An-In-Depth-Commercial-EDA-Revenue-Case-Study',
    mediumUrl: 'https://medium.com/@olaomofavour/decoding-the-book-publishing-market-an-in-depth-commercial-eda-revenue-case-study-0239144242dd',
  },
  {
    id: 'Dashboard-Furniture-Sales-Logistics',
    title: 'Optimizing Retail Operations: Building an Interactive Furniture Sales & Logistics Dashboard',
    description:
      'An interactive Excel BI dashboard tracking US furniture sales, profitability, sub-category demand, and shipping efficiency across 2,121 transactions. It features dynamic KPI metrics, monthly seasonal trajectories, regional mapping, and logistics duration breakdowns to optimize retail operations and fulfillment.',
    tags: ['Data analysis', 'Excel', 'Dashboard', 'Data visualization'],
    category: 'Data analysis',
    image: '/projects/Funiture_Excel_Dashboard.png',
    githubUrl: 'https://github.com/olaomofavour/Optimizing-Retail-Operations-Building-an-Interactive-Furniture-Sales-Logistics-Dashboard',
  },
  {
    id: 'Dashboard-HR-Analytics',
    title: 'Decoding Employee Retention: Engineering an Interactive HR Analytics Dashboard',
    description:
      'An interactive dashboard for analyzing employee retention patterns, identifying key drivers, and informing strategic HR decisions.',
    tags: ['Data analysis', 'Excel', 'Dashboard', 'Data visualization'],
    category: 'Data analysis',
    image: '/projects/HR_Excel_Dashboard.png',
    githubUrl: 'https://github.com/olaomofavour/Decoding-Employee-Retention-Engineering-an-Interactive-HR-Analytics-Dashboard',
  },
  {
    id: 'Dashboard-Insurance-Analytics',
    title: 'Unlocking Retail Revenue: Designing an Executive Sales & Commercial Analytics Dashboard',
    description:
      'An executive Excel BI dashboard analyzing 9,994 retail transactions across all 50 U.S. states to evaluate $733.9K in revenue, profit margins, discount behaviors, and category demand. It features dynamic YoY KPIs, seasonal trendlines, customer segment shares, and geographic concentration risk mapping.',
    tags:['Data analysis', 'Excel', 'Dashboard', 'Data visualization'],
    category: 'Data analysis',
    image: '/projects/Sales_Excel_Dashbaord.png',
    githubUrl: 'https://github.com/olaomofavour/Unlocking-Retail-Revenue-Designing-an-Executive-Sales-Commercial-Analytics-Dashboard',
    // mediumUrl: 'https://medium.com/...',
  },
];