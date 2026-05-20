export type NavLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  type: string;
  duration: string;
  link?: string;
  achievements: string[];
};

export type SkillCategory = {
  title: string;
  icon: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  duration: string;
  coursework?: string;
};

export const profile = {
  name: "Aqsa Batool",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer  •  Software Engineer",
  location: "Islamabad, Pakistan",
  email: "aqsa1147@gmail.com",
  linkedin: "https://www.linkedin.com/in/aqsa-batool1147/",
  github: "https://github.com/AqsaBatool-coder",
  resume: "/Aqsa_Batool_Resume.pdf",
  bio:
    "Full Stack Developer skilled in React.js, Next.js, Node.js, and PostgreSQL, with experience delivering fast and reliable applications. I enjoy solving problems, learning quickly, and building secure, user-centered products with clean and accessible interfaces.",
  shortBio:
    "I craft fast, reliable, and accessible web products — from elegant UIs in Next.js to dependable APIs in Node.js and PostgreSQL.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    company: "GrowthRune",
    location: "United States",
    role: "Full Stack Developer",
    type: "Remote",
    duration: "August 2025 — Present",
    achievements: [
      "Developed and maintained full-stack features using Next.js, Node.js, React Query, and PostgreSQL, ensuring smooth performance and clean user experience across the product.",
      "Collaborated closely with designers, product managers, QA, and fellow developers to bring features from concept to production.",
      "Improved frontend structure by introducing Storybook components, ensuring consistency and reducing UI bugs.",
      "Worked on accessibility and performance improvements, making interfaces inclusive and faster.",
      "Wrote Cypress test cases for core flows, contributing to a more stable release cycle.",
      "Engaged in pair programming, code reviews, and agile ceremonies, keeping the development process efficient and transparent.",
    ],
  },
  {
    company: "ByteShifted",
    location: "Denmark",
    role: "Associate Web Developer",
    type: "Remote",
    duration: "June 2024 — July 2025",
    achievements: [
      "Developed responsive frontend interfaces for platforms like TyreEurope, HostPepper, and DAEK Skandinavian.",
      "Integrated RackBeat APIs for real-time inventory and order management.",
      "Built admin panels with user management, system settings, and custom API integrations.",
      "Designed and developed ByteShifted's official website from scratch, focusing on mobile performance and modern layout.",
      "Mentored junior developers and contributed to code reviews, improving code quality across the team.",
    ],
  },
  {
    company: "NextTier",
    location: "Denmark",
    role: "Frontend Web Developer",
    type: "Hybrid",
    duration: "Jan 2024 — May 2024",
    link: "https://www.linkedin.com/company/nexttier/",
    achievements: [
      "Delivered high-performance UIs for financial and e-commerce projects including CashOut Express, FluxFunds, Phone2Funds, Gift4Cash, and Cake Shop.",
      "Worked with designers and backend teams to build pixel-perfect interfaces and integrate APIs smoothly.",
      "Improved page performance and responsiveness across multiple client projects.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Sparkles",
    items: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "Storybook",
      "React Query",
      "Tailwind CSS",
      "Shadcn",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "OAuth 2.0",
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Testing",
    icon: "FlaskConical",
    items: ["Cypress", "Jest"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Docker",
      "AWS",
      "Heroku",
      "Netlify",
      "Vercel",
    ],
  },
  {
    title: "Tools & Security",
    icon: "Wrench",
    items: [
      "Postman",
      "Swagger",
      "ESLint",
      "Jira",
      "Doppler",
      "Web Security",
      "Authentication / Authorization",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "TyreEurope",
    description:
      "Responsive e-commerce experience for a European tyre marketplace — built with a focus on speed, clean UI, and smooth product browsing.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "HostPepper",
    description:
      "Frontend interfaces for a modern hosting platform, integrating account dashboards, billing flows, and custom admin tooling.",
    tech: ["React.js", "Next.js", "Node.js"],
  },
  {
    title: "DAEK Skandinavian",
    description:
      "Sleek storefront and inventory experience with RackBeat API integration for real-time stock and order management.",
    tech: ["React", "Next.js", "RackBeat API", "Tailwind CSS"],
  },
  {
    title: "ByteShifted Website",
    description:
      "Designed and developed ByteShifted's official website from scratch — mobile-first, modern layout, optimized for performance.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "CashOut Express & FluxFunds",
    description:
      "High-performance UIs for fintech products — Phone2Funds, Gift4Cash and more — pixel-perfect interfaces with smooth API integration.",
    tech: ["React.js", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Admin Panels Suite",
    description:
      "Built multiple admin panels featuring user management, system settings, and custom API integrations for production platforms.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "OAuth 2.0"],
  },
];

export const education: EducationEntry[] = [
  {
    school: "National University of Computer and Emerging Sciences",
    location: "Pakistan",
    degree: "Master's in Computer Science",
    duration: "Feb 2022 — Dec 2024",
    coursework:
      "Cloud Computing, Ethical Hacking, Network Security, Machine Learning, Deep Learning, Cryptography",
  },
  {
    school: "University of Kotli AJK",
    location: "Pakistan",
    degree: "BS in Computer Sciences",
    duration: "October 2016 — Feb 2021",
  },
];

export const stats = [
  { label: "Years building for the web", value: "2+" },
  { label: "Production projects shipped", value: "10+" },
  { label: "Companies collaborated with", value: "3" },
  { label: "Specializations", value: "Full Stack + Sec" },
];
