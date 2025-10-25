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
    title: "KonvoX - MERN Stack Social Platform",
    category: "MERN",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "REST API"],
    imageId: "konvox",
    liveLink: "#",
    description: "A full-stack social media platform focusing on real-time user interaction and scalable content delivery.",
    longDescription: "Developed a full-stack social media platform, addressing the need for real-time user interaction and scalable content delivery through the MERN stack. Engineered solutions for efficient data management and intuitive navigation, significantly enhancing user engagement and platform performance. Implemented JWT authentication, REST APIs, and responsive UI.",
  },
  {
    id: 2,
    title: "Plant Disease Detection with AI",
    category: "AI/ML",
    tech: ["Python", "CNN", "Deep Learning", "Flask"],
    imageId: "plant-disease",
    liveLink: "#",
    description: "A deep learning model and web tool for early-stage plant disease identification from leaf images.",
    longDescription: "Developed a deep learning model using CNNs to Tackled the problem of early plant disease identification - accurately classify plant leaf images as healthy or diseased, achieving high accuracy. Deployed a web-based tool, enabling real-time diagnosis from user-uploaded images, providing a practical solution for agricultural applications.",
  },
  {
    id: 3,
    title: "Secure E-Voting System",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript", "UML"],
    imageId: "e-voting",
    liveLink: "#",
    description: "A robust and secure online voting system designed to ensure data integrity and election verifiability.",
    longDescription: "Addressed the critical challenge of secure online elections by designing and developing a robust e-voting system, prioritizing data integrity. Problem-solved complex architectural requirements, documenting the system with detailed UML diagrams to ensure clarity and maintainability for future enhancements.",
  },
  {
    id: 4,
    title: "Retail Point of Sale (POS) System",
    category: "Desktop",
    tech: ["C#", ".NET", "SQL", "SRS"],
    imageId: "pos-system",
    liveLink: "#",
    description: "A comprehensive POS system for retail operations, featuring optimized inventory and sales management.",
    longDescription: "Engineered a comprehensive POS system after engineering the requirments from the real world client specifically to solve inefficiencies in retail operations, significantly improving transaction accuracy and user experience. Optimized database schemas and queries in SQL to resolve data retrieval bottlenecks, leading to efficient inventory and sales management. Produced thorough Software Requirements Specification (SRS) documentation, ensuring alignment with business needs.",
  },
  {
    id: 5,
    title: "Object-Oriented UML Editor",
    category: "Desktop",
    tech: ["Java", "Swing GUI", "JUnit", "OOP"],
    imageId: "uml-editor",
    liveLink: "#",
    description: "An intuitive Java-based desktop application for creating, managing, and exporting complex software diagrams.",
    longDescription: "Developed a UML editor to simplify the creation and management of complex software diagrams, providing intuitive features for class, sequence, and use-case diagrams with export functionality (e.g., to image formats), and basic version control. Implemented robust error handling and validation mechanisms through extensive JUnit testing to ensure diagram accuracy and application stability.",
  },
  {
    id: 6,
    title: "Turkish Draughts Game",
    category: "GameDev",
    tech: ["C++", "SFML", "OOP"],
    imageId: "turkish-draughts",
    liveLink: "#",
    description: "A digital version of the classic Turkish Draughts board game, built with custom graphics and complex game logic.",
    longDescription: "Created a digital rendition of Turkish Draughts, featuring custom graphics rendering and implementing, implementing complex game logic using Object-Oriented Programming (OOP) principles. Designed and developed core game mechanics, including piece movement, capture rules, and game state management.",
  },
  {
    id: 7,
    title: "Mind-Body Sync Guide",
    category: "Web",
    tech: ["Figma", "HTML", "CSS"],
    imageId: "wellness-guide",
    liveLink: "#",
    description: "A wellness guide for women focusing on user engagement and user-centered design.",
    longDescription: "Led frontend development of a wellness guide for women solving user engagement challenges. Created user-centered designs and interactive prototypes in Figma.",
  },
];
