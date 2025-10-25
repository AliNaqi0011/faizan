
export type Project = {
  id: number;
  title: string;
  category: string;
  tech: string[];
  imageId: string;
  liveLink: string;
  description: string;
  longDescription: string;
};

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    category: "Laravel",
    tech: ["Laravel", "Vue.js", "MySQL"],
    imageId: "project-1",
    liveLink: "#",
    description: "A comprehensive CRM platform for large enterprises, designed to manage customer relationships and streamline sales pipelines.",
    longDescription: "The Enterprise CRM Platform was built from the ground up using Laravel and Vue.js, featuring a robust MySQL backend. It includes modules for contact management, sales automation, and detailed analytics. The system is designed to handle millions of records and provide real-time insights to the sales team, significantly improving efficiency and customer engagement.",
  },
  {
    id: 2,
    title: "CreativeXperts Agency Website",
    category: "JS",
    tech: ["Next.js", "React", "Tailwind CSS"],
    imageId: "project-7",
    liveLink: "https://www.creativexperts.online/",
    description: "A sleek, modern, and performant corporate website for a creative agency, built with Next.js.",
    longDescription: "Developed for CreativeXperts, this project involved creating a visually stunning and highly optimized company website. Using Next.js for server-side rendering and static generation, the site achieves excellent performance and SEO scores. The responsive design, crafted with Tailwind CSS, ensures a perfect user experience across all devices, from desktops to smartphones. It serves as a digital storefront to showcase the agency's portfolio and services.",
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    category: "JS",
    tech: ["Next.js", "Firebase", "D3.js"],
    imageId: "project-2",
    liveLink: "#",
    description: "An interactive dashboard for visualizing complex data in real-time.",
    longDescription: "Built with Next.js for server-side rendering and performance, this dashboard connects to a Firebase Realtime Database. It uses the D3.js library to create beautiful and interactive data visualizations. The application allows users to filter, sort, and explore data dynamically, offering powerful insights at a glance.",
  },
  {
    id: 4,
    title: "ShianoHyrics - Lyrics Platform",
    category: "JS",
    tech: ["Next.js", "SEO", "Content Delivery"],
    imageId: "project-8",
    liveLink: "https://www.shianohylyrics.com/",
    description: "A content-rich lyrics website, optimized for search engines and high-volume traffic.",
    longDescription: "ShianoHyrics is a public-facing lyrics website where performance and SEO are paramount. Built using Next.js, the site is statically generated to ensure blazing-fast load times for a global audience. A significant focus was placed on structured data (Schema.org) and on-page SEO to maximize search engine visibility. The architecture is designed to efficiently manage and display a massive library of lyrical content.",
  },
  {
    id: 5,
    title: "SaaS Application for Fintech",
    category: "Laravel",
    tech: ["Laravel", "React", "API"],
    imageId: "project-6",
    liveLink: "#",
    description: "A secure and scalable SaaS platform for the financial technology sector.",
    longDescription: "This Fintech SaaS application, built with a Laravel backend and a React frontend, provides complex financial tools and services. It features a secure RESTful API, handles sensitive financial data with encryption, and integrates with various third-party financial services. The architecture is designed for high availability and scalability to meet the demands of the finance industry.",
  },
  {
    id: 6,
    title: "Enterprise Point-of-Sale (POS) System",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "REST API"],
    imageId: "project-9",
    liveLink: "#",
    description: "A comprehensive, enterprise-grade POS software solution for retail and hospitality.",
    longDescription: "Inspired by industry leaders like InfyPOS, this system was architected to be a robust, scalable, and feature-rich Point-of-Sale solution. The backend, powered by Laravel and MySQL, handles inventory management, transaction processing, and sales reporting. A secure REST API allows for integration with various client-side applications (web, mobile, or desktop terminals), making it a versatile solution for complex business needs.",
  },
  {
    id: 7,
    title: "QuanAcademy Learning Management System",
    category: "Laravel",
    tech: ["Laravel", "Vue.js", "MySQL"],
    imageId: "project-10",
    liveLink: "#",
    description: "A complete e-learning platform for course creation, student management, and online education.",
    longDescription: "QuanAcademy is a full-fledged Learning Management System (LMS) designed for educational institutions. The powerful Laravel backend manages courses, user roles (student, instructor, admin), and progress tracking. The interactive frontend, built with Vue.js, provides an engaging learning experience for students, with features like video lectures, quizzes, and discussion forums.",
  },
  {
    id: 8,
    title: "Nova-Style Resume Builder",
    category: "JS",
    tech: ["Next.js", "TypeScript", "PDF Generation"],
    imageId: "project-11",
    liveLink: "#",
    description: "An intuitive, modern resume builder for creating professional CVs with ease.",
    longDescription: "Following the principles of top-tier applications like Novoresume, this tool was built to provide a seamless resume-building experience. Using Next.js and TypeScript ensures a type-safe and performant application. A key feature is the real-time preview and on-the-fly PDF generation, allowing users to see their changes instantly and export a pixel-perfect document.",
  },
  {
    id: 9,
    title: "Multi-Vendor E-commerce Store",
    category: "Laravel",
    tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL"],
    imageId: "project-12",
    liveLink: "#",
    description: "A large-scale marketplace allowing multiple vendors to manage and sell their own products.",
    longDescription: "This multi-vendor platform combines the power of a Laravel backend with a modern, reactive frontend built using Vue.js and Inertia.js. This stack provides the feel of a single-page application without the complexity of managing a separate API. The system supports vendor-specific dashboards, product management, order processing, and commission calculations, creating a comprehensive solution for a thriving online marketplace.",
  },
  {
    id: 10,
    title: "Multi-tenant CMS",
    category: "WordPress",
    tech: ["WordPress", "ACF", "PHP"],
    imageId: "project-4",
    liveLink: "#",
    description: "A flexible content management system designed to support multiple websites from a single WordPress installation.",
    longDescription: "This project extends WordPress into a powerful multi-tenant platform. Using Advanced Custom Fields (ACF) and custom PHP, it allows administrators to manage multiple client sites with separate themes, plugins, and user bases from one central dashboard. It's a highly scalable and cost-effective solution for agencies and businesses managing numerous web properties.",
  },
];
