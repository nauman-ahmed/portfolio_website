import thesisPdf from '../assets/files/Masters-Thesis-Nauman-Ahmed.pdf';

export const experience = [
  {
    period: '10/25 — 03/26',
    role: 'Multi-Agent 3D Coverage Path Planning (UAVs)',
    org: "Master's thesis · University of Passau",
    // The full write-up now lives on the project card, so this stays short
    // rather than repeating it.
    points: [
      'First application of Liquid Neural Networks to coverage path planning as an end-to-end learned policy, addressing a gap identified in the literature.',
      'Built a constrained 20×20×6 voxel environment with terrain, no-fly zones and hard movement budgets, and a hybrid LTC + attention policy trained with PPO in PyTorch.',
      '93.0% mean coverage across 100 held-out environments, with zero collision penalties.',
    ],
    link: { label: 'Read the thesis', href: thesisPdf },
  },
  {
    period: '06/23 — 12/23',
    role: 'Frontend Web Developer',
    org: 'EventPlanning24',
    points: [
      'Built features in an existing React and TypeScript platform, including Next.js applications.',
      'RESTful API integration and serialization, and UI refinement across the product.',
    ],
  },
  {
    period: '09/19 — 09/21',
    role: 'Software Engineer',
    org: 'StratgIT',
    points: [
      'Delivered web applications and cloud infrastructure for company clients using React, React Native and Vue.js.',
      'Optimised application performance, built responsive and mobile-friendly interfaces, and handled testing and maintenance.',
    ],
  },
];

export const education = [
  {
    period: '04/22 — 04/26',
    qualification: 'M.Sc Computer Science',
    org: 'University of Passau, Germany',
    detail: [
      { label: 'Coursework (120 ECTS)', value: '2.4 (German scale)' },
      { label: "Master's thesis", value: '2.0' },
    ],
    note: 'Multi-Agent 3D Coverage Path Planning Using a Hybrid Liquid Neural Reinforcement Learning Model for Autonomous UAV Systems — Chair of Informatik. Examiners: Prof. Dr. Mario Döller and Prof. Dr. Harald Kosch.',
    link: { label: 'Read the thesis', href: thesisPdf },
  },
  {
    period: '2016 — 2020',
    qualification: 'B.Sc Software Engineering',
    org: 'Usman Institute of Technology, Karachi',
    detail: [],
    note: 'Affiliated with NED University of Engineering and Technology.',
  },
];

export const publications = [
  {
    title:
      'An Efficient Image Processing Technique to Measure and Align Vehicle Wheel Cylinder with Cloud Management System',
    authors: 'S. Zaidi, M. Wasim, L. Ahmed, N. Ahmed, et al.',
    venue: 'KIET Journal of Computing & Information Sciences (KJCIS)',
    where: 'Vol. 5, Issue 1',
    summary:
      'An automated framework for cylindrical measurement and centroid alignment, applying Hough Transform with fast finding and fitting for circle detection.',
    metrics: [
      { value: '95%', label: 'Accuracy' },
      { value: '100%', label: 'Precision' },
    ],
    href: 'https://kjcis.kiet.edu.pk/index.php/kjcis/article/view/90',
  },
];

export const certifications = [
  {
    title: "ChatGPT and LangChain: The Complete Developer's Masterclass",
    issuer: 'Udemy',
    year: '2026',
    note: 'Production LLM applications with LangChain — chains, agents, tool calling, embeddings and retrieval-augmented generation.',
    href: 'https://www.udemy.com/certificate/UC-564ea2df-447a-4f38-8685-3eabd056a4c4/',
  },
  {
    title: 'Jenkins: Jobs, Pipelines, CI/CD and DevOps for Beginners',
    issuer: 'Udemy',
    year: '2025',
    note: 'Continuous integration and delivery pipelines through real-world projects.',
    href: 'https://www.udemy.com/certificate/UC-dfaf41d5-eadc-4d45-9734-6f2662821c66/',
  },
  {
    title: 'Playwright: Web Automation Testing From Zero to Hero',
    issuer: 'Udemy',
    year: '2025',
    note: 'End-to-end browser automation and test authoring.',
    href: 'https://www.udemy.com/certificate/UC-5cee3fed-f28a-49e3-83b9-2e2e50f56b0e/',
  },
  {
    title: 'React, NodeJS, Express & MongoDB — The MERN Fullstack Guide',
    issuer: 'Udemy',
    year: '2022',
    note: 'Full-stack development across the MERN stack.',
    href: 'https://www.udemy.com/certificate/UC-f0ed7f81-8a5a-4a79-87d3-9d7e9eda09e4/',
  },
];
