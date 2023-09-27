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
      "I graduated in 2016 after 3 years in High School with main courses in mathematics and physics.",
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
    date: "2021 - Present",
  },
  {
    title: "Working as a Fullstack Developer",
    location: "Reshopper A/S in Aarhus C, Denmark",
    description: "I am working fulltime at Reshopper A/S and i'm working with technoligies/languages like C#, React/Next.js, CSS, PostgreSQL, AWS, Swagger, ElasticSearch and many more. Download my CV to see the full tech-stack.", 
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Final School Assignment",
    description:
      "My final school assignment. It is a web-app created by PicIT A/S where you can draw a profile of a train and simulate a certain rute",
    tags: ["JavaScript", "CSS", "HTML", "MongoDB", "SVG", "Express"],
    imageUrl: "/final-school-assignment.png",
    githubUrl: "https://github.com/Mfoldager17/FinalHovedopgave"
  },
  {
    title: "First Tailwind App",
    description:
      "A simple one sided app, to learn about the fundamentels of Tailwind. It's a 'rental car web-app' with a simple design. It does not have any functions.. Yet.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "/first-tailwind-app.png",
    githubUrl: "https://github.com/Mfoldager17/nextjs-rest"
  },
  {
    title: "Next Auth Example",
    description:
      "A simple login app, with Next Auth. It makes an easy dummy API call to get some simple data, if you are logged in.",
    tags: ["React", "Next.js", "RESP API", "Tailwind CSS"],
    imageUrl: "/nextauth_ex.png",
    githubUrl: "https://github.com/Mfoldager17/next-auth-ex"
  },
  {
    title: "MFA - Portfolio",
    description:
      'My first "Biggere" project in Next.js. It is my personal portfolio. It has a dark mode, and a simple design with animation made with framer motion. It is hosted on Vercel.',
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Vercel", "Framer Motion"],
    imageUrl: "/mfa-portfolio.png",
    githubUrl: "https://github.com/Mfoldager17/mfa-portfolio"
  },
  {
    title: "First Next.js App",
    description:
      "A very simple one sided app, to learn about the fundamentels of Next.js. Like using components and the App Router - file structure.",
    tags: ["React", "Next.js", "TypeScript", "CSS"],
    imageUrl: "/first-next-app.png",
    githubUrl: "https://github.com/Mfoldager17/myFirstApp"
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
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
  "Java",
  "C#",
  "Flutter",
  "Dart",
  "Progress",
  "MSSQL",
  "REST API",
] as const;