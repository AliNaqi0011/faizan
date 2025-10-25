
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
    title: "CreativeXperts Agency Website",
    category: "JS",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    imageId: "project-7",
    liveLink: "https://www.creativexperts.online/",
    description: "A sleek, modern, and performant corporate website for a creative agency, built with Next.js.",
    longDescription: "For a creative agency like CreativeXperts, their digital presence is their primary handshake with the world. The objective was to architect and develop a corporate website that was not only visually stunning but also exceptionally performant and scalable. The choice of Next.js was deliberate, leveraging its powerful features to meet these demands. The core of the architecture revolves around Static Site Generation (SSG) for pages that are content-heavy but change infrequently, such as the 'About Us' and 'Services' sections. This approach ensures near-instant load times, which is critical for retaining user engagement and boosting SEO rankings. For content that might be updated more frequently, such as the agency's portfolio, Incremental Static Regeneration (ISR) was implemented. This allows the marketing team to update projects without requiring a full redeployment, providing a perfect balance between static performance and dynamic content. The entire user interface was built using a modular component architecture in React, ensuring code reusability and maintainability. Each UI element, from buttons to complex layout sections, was crafted as an independent component. Styling was handled with Tailwind CSS, employing a utility-first methodology. This enabled the creation of a highly custom, pixel-perfect design system that perfectly matched the CreativeXperts brand identity, without the bloat of traditional CSS frameworks. Special attention was given to image optimization using the built-in Next.js Image component, which automatically serves optimized, modern image formats like WebP. This significantly reduced page weight and improved load times on both desktop and mobile devices. The final product is a seamless, fluid, and responsive website that serves as a powerful marketing tool, effectively showcasing the agency's portfolio and expertise while providing an impeccable user experience. The site is deployed on Vercel, taking full advantage of its global CDN and CI/CD pipeline for effortless updates and consistent high performance worldwide.",
  },
  {
    id: 2,
    title: "ShianoHyrics - Lyrics Platform",
    category: "JS",
    tech: ["Next.js", "SEO", "SSG", "Content Delivery"],
    imageId: "project-8",
    liveLink: "https://www.shianohylyrics.com/",
    description: "A content-rich lyrics website, optimized for search engines and high-volume traffic.",
    longDescription: "ShianoHyrics is a public-facing platform designed to serve a massive global audience of music lovers. The primary architectural challenge was to build a system that could handle millions of pages and high-volume traffic while maintaining top-tier performance and achieving maximum search engine visibility. Next.js was the ideal framework for this task due to its mastery of rendering strategies. The entire lyrics library, consisting of thousands of songs, is statically generated at build time (SSG). This means every lyric page is a pre-built, ultra-fast HTML file served directly from a global CDN. This architecture is fundamental to achieving the sub-second page loads necessary to compete in the crowded online lyrics space. A cornerstone of this project was a deep and meticulous focus on Search Engine Optimization (SEO). I architected a comprehensive SEO strategy that went beyond basic meta tags. For every single page, detailed structured data (JSON-LD) using Schema.org vocabulary was programmatically generated. This provides search engines like Google with rich, explicit context about the content, enabling rich snippets in search results, such as song duration, artist, and album. Dynamic sitemaps were generated and automatically updated to ensure search engine crawlers could efficiently discover all new and existing content. The content delivery network (CDN) plays a pivotal role in the site's performance. By distributing the statically generated pages across the globe, users from any region experience minimal latency. The frontend was built with a clean, mobile-first design, ensuring readability and ease of use on all devices. The result is a highly-scalable, SEO-dominant platform that provides a fast, reliable, and user-friendly experience for millions of users, demonstrating a mastery of modern web architecture for large-scale content delivery.",
  },
  {
    id: 3,
    title: "Enterprise Point-of-Sale (POS) System",
    category: "Laravel",
    tech: ["Laravel", "MySQL", "REST API", "Vue.js"],
    imageId: "project-9",
    liveLink: "#",
    description: "A comprehensive, enterprise-grade POS software solution for retail and hospitality.",
    longDescription: "Inspired by industry-leading solutions like InfyPOS, this project was an ambitious undertaking to create a versatile and robust enterprise-grade Point-of-Sale (POS) system. The architectural goal was to build a highly scalable and secure backend that could serve a wide variety of client-side applications, from web-based dashboards to native desktop terminals. The core of the system is a powerful backend built on the Laravel framework, chosen for its elegant syntax, robust security features, and extensive ecosystem. The database, powered by MySQL, was designed with a normalized schema to handle complex relationships between products, inventory, customers, sales, and employees, ensuring data integrity and efficient querying. A key architectural decision was to expose all backend functionality through a comprehensive and secure RESTful API. This API-first approach decouples the backend from any specific frontend, allowing for maximum flexibility. The API handles everything from real-time inventory tracking and multi-location stock management to complex sales transactions, tax calculations, and detailed financial reporting. Security was paramount; the API is protected using Laravel Sanctum, providing a lightweight authentication system for SPAs, mobile applications, and token-based API access. The frontend for the administrative and management dashboard was developed using Vue.js. This allows for a reactive and dynamic user experience where managers can view real-time sales data, manage product catalogs, configure promotions, and monitor employee performance without constant page reloads. The system was designed for multi-tenancy, enabling it to be offered as a SaaS product where multiple businesses can operate their own isolated POS systems within a single deployed application. This project showcases deep expertise in backend architecture, API design, and building complex, data-driven business applications.",
  },
  {
    id: 4,
    title: "QuanAcademy Learning Management System",
    category: "Laravel",
    tech: ["Laravel", "Vue.js", "MySQL", "Spatie Roles"],
    imageId: "project-10",
    liveLink: "#",
    description: "A complete e-learning platform for course creation, student management, and online education.",
    longDescription: "QuanAcademy is a full-featured Learning Management System (LMS) designed to provide a comprehensive and engaging online education experience. The platform was architected to support a complex ecosystem of user interactions, content types, and administrative needs. The backend is built on Laravel, providing a secure and scalable foundation for the entire application. At its core, the system features a sophisticated role-based access control (RBAC) architecture, implemented using the industry-standard Spatie Laravel Permission package. This allows for granular control over what different user types—such as students, instructors, and administrators—can see and do. Instructors have a dedicated dashboard to create and manage courses, upload video content, build quizzes, and track the progress of their students. Students experience a rich, interactive learning environment through a frontend powered by Vue.js. The student dashboard allows them to enroll in courses, view lectures, complete assignments, and participate in discussion forums. The combination of Laravel and Vue.js as a Single Page Application (SPA) ensures a smooth, app-like experience in the browser. The database, using MySQL, is meticulously designed to handle the complex data relationships, including course-to-student enrollments, quiz scores, lesson completion statuses, and user profiles. The system also includes features for e-commerce, allowing instructors to sell their courses through integrated payment gateways. This project demonstrates a strong capability in building complex, multi-user web applications, with a deep understanding of data modeling, access control, and creating interactive user experiences.",
  },
  {
    id: 5,
    title: "Nova-Style Resume Builder",
    category: "JS",
    tech: ["Next.js", "TypeScript", "PDF Generation", "React Hook Form"],
    imageId: "project-11",
    liveLink: "#",
    description: "An intuitive, modern resume builder for creating professional CVs with ease.",
    longDescription: "Inspired by the seamless user experience of top-tier applications like Novorésumé, this project aimed to create a highly interactive and intuitive resume builder. The technical vision was to deliver a flawless, real-time editing experience backed by a robust and type-safe codebase. The application is built using Next.js and TypeScript, a combination that ensures both excellent performance and strong code quality. TypeScript was crucial for managing the complex data structures of a resume, such as work experience, education, skills, and contact information, preventing common runtime errors. The user interface is the star of the show. It features a live, side-by-side preview that updates instantly as the user types, providing immediate visual feedback. This was achieved by leveraging React's state management capabilities. Forms are managed using React Hook Form, which provides a performant and flexible way to handle user input, validation, and state management for the various resume sections. One of the most significant technical challenges was the implementation of on-the-fly PDF generation. This was architected to run entirely on the client-side for speed and privacy. When a user decides to download their resume, the application uses a JavaScript library to dynamically render the React components representing their resume onto a canvas and then converts it into a high-fidelity, professional-quality PDF document. This ensures that what the user sees on the screen is exactly what they get in the downloaded file (WYSIWYG). The design is clean, modern, and guides the user through the resume-creation process with helpful hints and templates. This project showcases advanced frontend development skills, including complex state management, client-side document generation, and a commitment to creating a polished and delightful user experience.",
  },
  {
    id: 6,
    title: "Multi-Vendor E-commerce Marketplace",
    category: "Laravel",
    tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL"],
    imageId: "project-12",
    liveLink: "#",
    description: "A large-scale marketplace allowing multiple vendors to manage and sell their own products.",
    longDescription: "This project involved architecting a large-scale, multi-vendor e-commerce platform, a complex system that functions as a digital mall where numerous independent vendors can set up shop. The primary challenge was to create a unified platform that felt cohesive to customers while providing powerful, isolated dashboards for each vendor. The technology stack was chosen to create a modern, monolithic application with the feel of a Single Page Application (SPA) but without the complexity of managing a separate API. The solution was found in the combination of Laravel, Vue.js, and Inertia.js. The powerful Laravel backend handles all the core business logic. This includes a robust product catalog system, multi-vendor order processing, inventory management, and a commission engine that automatically calculates and allocates earnings between vendors and the platform owner. The database, built on MySQL, was designed to support this multi-tenancy, with clear data separation to ensure vendors could only access their own products, orders, and customer information. Inertia.js serves as the magic glue between the Laravel backend and the Vue.js frontend. It allows the creation of a fully reactive, client-side rendered user interface while letting all routing and controllers live within the Laravel application. This drastically simplifies development and maintenance. Vendors have their own secure portal where they can manage their storefront, upload products, track sales, and view analytics. Customers, on the other hand, experience a seamless shopping journey, able to purchase products from multiple vendors in a single transaction. This project is a testament to my ability to design and build complex, data-heavy, and commercially-focused web applications using modern, efficient technology stacks.",
  },
];
