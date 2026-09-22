import {
  Github,
  Linkedin,
  Link2Icon,
} from "lucide-react";
import XIcon from "../components/XIcon";
import DiscordIcon from "../components/DiscordIcon";

export const personalInfo = {
  name: "Abdul Jaber",
  alias: "aka [AJ]",
  shortAlias: "AJ",
  location: "Andhra Pradesh, India",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Tech Explorer",
    "Linux Enthusiast",
  ],
  college: "Dr. SGIT",
  collegeUrl: "https://drsgiet.ac.in/",
  avatarUrl: "/assets/ME.webp",
  status: "Available for work",
  aboutText: "Full-stack engineer specializing in scalable systems and AI-driven solutions. Crafting high-performance digital products with precision and purpose.",
  aboutText1: "I’m Abdul Jaber, based in Andhra Pradesh, India. I graduated in Electronics and Communication Engineering from ",
  aboutText2: ". I design and build full-stack applications, with an increasing focus on Artificial Intelligence. My work focuses on building scalable systems, solving complex problems clearly, and delivering practical, real-world solutions.",
};

// removed react-icons
export const fetchData = [
  { label: "User", value: "aj7@garuda" },
  { label: "OS", value: "Garuda Linux Broadwing x86_64" },
  { label: "Host", value: "ASUS TUF Gaming F15 FX506HF" },
  { label: "Kernel", value: "6.14.2-zen1-1-zen" },
  { label: "Packages", value: "1519 (pacman)" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "i5-11400H (12) @ 4.50GHz" },
  { label: "GPU", value: "Intel UHD + RTX 2050" },
  { label: "Memory", value: "15725MiB" },
  { label: "Peak Uptime", value: "13 hour's" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", invertDark: true },
      { name: "Shadcn-UI", icon: "https://cdn.simpleicons.org/shadcnui", invertDark: true },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express", invertDark: true },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma", invertDark: true },
      { name: "Redux/Zustand", icon: "https://cdn.simpleicons.org/redux" },
    ],
  },
];

export const facts = [
  "Engineer",
  "Tech Explorer",
  "Learner",
  "Linux Favourite",
  "Full Stack Developer",
];

export const timeline = [
  {
    year: "2026",
    detail:
      "Focused on mastering advanced tools and preparing for professional opportunities.",
    more:
      "Actively building production-level projects and seeking roles in full-stack development and AI-driven systems.",
  },
  {
    year: "2025",
    detail:
      "Began exploring Artificial Intelligence and its practical applications.",
    more:
      "Studied AI models, experimented with integrations, and built projects to enhance automation and intelligent features.",
  },
  {
    year: "2023",
    detail:
      "Advanced into modern web development by building full-stack projects.",
    more:
      "Worked with frontend and backend technologies, integrating APIs and developing scalable applications.",
  },
  {
    year: "2021",
    detail:
      "Developed multiple CLI-based projects to strengthen problem-solving and coding skills.",
    more:
      "Focused on writing efficient logic, improving debugging ability, and gaining confidence in building functional tools.",
  },
  {
    year: "2020",
    detail:
      "Discovered programming and web development using Termux on mobile.",
    more:
      "Learned core programming concepts, scripting, and built small automation projects to understand real-world applications.",
  },
  {
    year: "2019",
    detail:
      "Started exploring electronics through hands-on DIY projects, focusing on transistor-based circuits and core components.",
    more:
      "Built a strong foundation by understanding how circuits behave at a fundamental level and experimenting with practical implementations.",
  },
];

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aj-seven",
    href: "https://github.com/aj-seven",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ajseven",
    href: "https://www.linkedin.com/in/ajseven",
    color: "text-blue-600",
  },
  {
    icon: XIcon,
    label: "X",
    value: "x.com/its_ajseven",
    href: "https://x.com/its_ajseven",
    color: "text-foreground",
  },
  {
    icon: DiscordIcon,
    label: "Discord",
    value: "Discord",
    href: "https://discord.com/users/.ajseven",
    color: "text-indigo-500",
  },
  {
    icon: Link2Icon,
    label: "Links",
    value: "links.ajseven.me",
    href: "https://links.ajseven.me",
    color: "text-blue-400",
  },
];

export const projectData = [
  {
    name: "AI-Hub",
    description: "AI Hub - Multi-model assistant for content and chat.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "Shadcn", "Tauri"],
    live: "https://ai-hubx.vercel.app/",
    github: "https://github.com/aj-seven/ai-hub",
    category: "Web",
  },
  {
    name: "Done Today",
    description: "Track what you achieve every day. One thing at a time.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "MongoDB"],
    live: "https://done-today.vercel.app",
    github: "https://github.com/donetoday-app/donetoday",
    category: "Web",
  },
  {
    name: "PostalMapper",
    description:
      "A digital address card generator based on postal code with QR support, export options. Built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "QRCode"],
    live: "https://postal-mapper.vercel.app",
    github: "https://github.com/aj-seven/postal-mapper",
    category: "Web",
  },
  {
    name: "Landing Page",
    description: "Simple Landing Page.",
    tech: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "Framer-motion",
    ],
    live: "https://landing-page-ajseven.vercel.app",
    github: "https://github.com/aj-seven/landing-page",
    category: "Web",
  },
  {
    name: "Sketchify",
    description: "Convert Images to sketches with Adjustable effects.",
    tech: ["React", "TailwindCSS", "Canvas"],
    live: "https://sketchify-app.vercel.app",
    github: "https://github.com/aj-seven/sketchify",
    category: "Web",
  },
  {
    name: "Task Quest",
    description: "A simple yet modern task tracker built for productivity.",
    tech: ["React", "TailwindCSS"],
    live: "https://task-quest.pages.dev",
    github: "https://github.com/aj-seven/task-quest",
    category: "Web",
  },
  {
    name: "Color Tailor",
    description: "A color palette generator built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "chroma-js"],
    live: "https://color-tailor.vercel.app",
    github: "https://github.com/aj-seven/color-tailor",
    category: "Web",
  },
  {
    name: "Android-Sysinfo",
    description: "A tool that efficiently displays Android system details.",
    tech: ["Linux", "Termux", "Android"],
    github: "https://github.com/aj-seven/Android-Sysinfo",
    category: "CLI",
  },
];

export const resume = {
  "full-stack-developer": "https://rxresu.me/aj-seven/full-stack-developer",
};
