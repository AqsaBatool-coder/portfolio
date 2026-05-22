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
  company: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
  image?: string;
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
    "Full Stack Developer with 2+ years building production web applications for US and European clients in Next.js, React, Node.js, and PostgreSQL. Comfortable across the stack — from API design and authentication to frontend performance, accessibility, testing, and CI/CD. Experience shipping fintech, e-commerce, and B2B products remotely on cross-functional teams.",
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
    duration: "Aug 2025 — Present",
    achievements: [
      "Built features end-to-end for Simming.ai — an agentic AI platform for deploying humanlike AI teammates — using Next.js, Node.js, React Query, and PostgreSQL.",
      "Owned the Networks module, designing and shipping group chat and thread-based posting features that enabled user collaboration across the platform.",
      "Integrated AI agents across the product and implemented in-app video conferencing via Anam, partnering closely with the AI team on agent interaction.",
      "Wrote Cypress end-to-end tests for core user flows and contributed to performance and accessibility improvements.",
      "Worked daily with designers (Storybook UI reviews), PMs, QA, AI engineers, and fellow developers through pair programming and code review.",
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

// To add a real screenshot for a project, drop a PNG/JPG into
// `public/images/` and set the `image` field below to its path,
// e.g. "/images/simming.png"
export const projects: Project[] = [
  {
    title: "Simming.ai",
    company: "GrowthRune",
    description:
      "Agentic AI platform for deploying humanlike AI teammates. Built end-to-end features in Next.js + Node.js, owned the Networks module (group chat & thread-based posting), and integrated in-app video conferencing via Anam.",
    tech: ["Next.js", "Node.js", "React Query", "PostgreSQL", "Cypress", "Anam"],
    href: "https://simming.ai",
    image: "/images/simming.png",
  },
  {
    title: "TyreEurope",
    company: "ByteShifted",
    description:
      "Responsive e-commerce experience for a European tyre marketplace. Focused on fast product browsing, clean UI, and smooth checkout.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "RackBeat API"],
    href: "https://tyreeurope.com/dk",
    image: "/images/tyreeurope.png",
  },
  {
    title: "HostPepper",
    company: "ByteShifted",
    description:
      "Frontend interfaces for a modern hosting platform — account dashboards, billing flows, and custom admin tooling.",
    tech: ["React.js", "Next.js", "Node.js", "REST APIs"],
    href: "https://hostpepper.com/en",
    image: "/images/hostpepper.png",
  },
  {
    title: "DAEK Skandinavian",
    company: "ByteShifted",
    description:
      "Sleek storefront and inventory experience with RackBeat integration for real-time stock and order management.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "RackBeat API"],
    href: "https://staging-daekskandinavien.vercel.app/",
    image: "/images/daekskandinavien.png",
  },
  {
    title: "ByteShifted Website",
    company: "ByteShifted",
    description:
      "Designed and developed ByteShifted's official website from scratch — mobile-first, modern layout, optimized for performance.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    href: "https://www.byteshifted.com",
    image: "/images/byteshifted.png",
  },
  // {
  //   title: "CashOut Express",
  //   company: "NextTier",
  //   description:
  //     "High-performance fintech UI focused on quick cash-out flows — pixel-perfect interface with smooth API integrations.",
  //   tech: ["React.js", "REST APIs", "Tailwind CSS"],
  //   href: "https://hostpepper.com/en",
  //   image: "/images/cashout-express.png",
  // },
  {
    title: "FluxFunds",
    company: "NextTier",
    description:
      "Frontend for a funds management product — clean dashboards, responsive design, and tight collaboration with backend on data flows.",
    tech: ["React.js", "Tailwind CSS", "REST APIs"],
    href: "https://fluxfunds-web.vercel.app/",
    image: "/images/flex-funds.png",
  },
  // {
  //   title: "Phone2Funds",
  //   company: "NextTier",
  //   description:
  //     "Mobile-first fintech interface enabling phone-based fund transfers with a fast, intuitive flow.",
  //   tech: ["React.js", "Tailwind CSS", "REST APIs"],
  //   image: "/images/phone-2-funds.png",
  // },
  {
    title: "Zephyrix",
    company: "Personal Project",
    description:
      "A personal project built end-to-end — exploring modern full-stack architecture, clean UI, and developer experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://zephyrix-web.vercel.app/",
    // repo: "https://github.com/AqsaBatool-coder/zephyrix",
    image: "/images/zephyrix.png",
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
