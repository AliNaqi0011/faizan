
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
    title: "E-commerce Marketplace",
    category: "PHP",
    tech: ["PHP", "jQuery", "Stripe"],
    imageId: "project-3",
    liveLink: "#",
    description: "A full-featured online marketplace connecting buyers and sellers with secure payment processing.",
    longDescription: "This marketplace was developed using a custom PHP framework and jQuery for a dynamic user experience. It integrates the Stripe API for secure and seamless payment transactions. Features include seller dashboards, product management, a review system, and an administrative panel for site management, providing a complete e-commerce solution.",
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
    title: "Multi-tenant CMS",
    category: "WordPress",
    tech: ["WordPress", "ACF", "PHP"],
    imageId: "project-4",
    liveLink: "#",
    description: "A flexible content management system designed to support multiple websites from a single WordPress installation.",
    longDescription: "This project extends WordPress into a powerful multi-tenant platform. Using Advanced Custom Fields (ACF) and custom PHP, it allows administrators to manage multiple client sites with separate themes, plugins, and user bases from one central dashboard. It's a highly scalable and cost-effective solution for agencies and businesses managing numerous web properties.",
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
    title: "Interactive Web App",
    category: "JS",
    tech: ["JavaScript", "AJAX", "GSAP"],
    imageId: "project-5",
    liveLink: "#",
    description: "A highly engaging interactive web application with smooth animations and asynchronous data loading.",
    longDescription: "This project showcases the power of modern JavaScript, using AJAX for seamless background data fetching and the GreenSock Animation Platform (GSAP) for high-performance animations. The result is a fluid, app-like experience in the browser that is both visually stunning and highly responsive, pushing the boundaries of web-based interaction.",
  },
];
