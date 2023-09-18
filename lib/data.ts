import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Viby J (Aarhus), Denmark",
    description:
      "I graduated in 2016 after 3 year in High School with main courses in mathematics and physics.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2016",
  },
  {
    title: "Worked as a Sales Assistant",
    location: "'Super Brugsen' in Hasselager (Aarhus), Denmark",
    description: "I worked as a sales assistant at a local store in Hasselager, Aarhus. I was responsible for the cash register, customer service and inventory management. I also learned alot about leadership in that period. I worked there for 8,5 years. Both parttime(during school) and fulltime.", 
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2021",
  },
  {
    title: "AP Graduated in Computer Science",
    location: "Business Academy Aarhus",
    description:
      "I graduated in 2022, after 2,5 years, with an AP degree in Computer Science. I learned about programming both Backend and frontend languages (Java, JS, React, Flutter/Dart, C#, and more), Databases, HTTP, Cyber Security, project management and much more",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Working as a Back-end Developer",
    location: "PicIT A/S in Aarhus, Denmark",
    description: "Here i started as an intern during my last year of school. I was hired fulltime after my graduation. I am working with a language called Progress. I work with a team of 4 other developers. We are working agile. I have learned to work with a larger codebases/databases. I have also learned alot about the technologies we use.", 
    icon: React.createElement(CgWorkAlt),
    date: "2019 - Present",
  },
  {
    title: "Working at Reshopper... Maybe?",
    location: "",
    description: "", 
    icon: React.createElement(CgWorkAlt),
    date: "Future",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/mfa.jpg",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/mfa-signature.svg",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/mfa.jpg",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/mfa-signature.svg",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/mfa-signature.svg",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/mfa-signature.svg",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;