import { title } from "framer-motion/client";

const sphereColors = [ "#1AC0FE", "#C54838", "#F8B135", "#127347"];

const BlobHeroLocationDefault = {
  position: { x: 1, y: 0 },
  scale: 3,
  eyes: {
    left: {
      x: -0.15,
      y: 0.15,
    },
    right: {
      x: -0.05,
      y: 0.15,
    },
  },
};

const BlobHeroLocationMobile = {
  position: { x: 0, y: -1 },
  scale: 2,
  eyes: {
    left: {
      x: -0.05,
      y: 0.2,
    },
    right: {
      x: 0.05,
      y: 0.2,
    },
  },
};

const skills = {
  frontend: [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Redux", icon: "/icons/redux.svg" },
    { name: "Zustand", icon: "/icons/zustand.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { name: "Sass", icon: "/icons/sass.svg" },
    { name: "Framer Motion", icon: "/icons/framermotion.svg" },
    { name: "GSAP", icon: "/icons/gsap.svg" },
    { name: "Three.js", icon: "/icons/threejs.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express.js", icon: "/icons/expressjs.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "GraphQL", icon: "/icons/graphql.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Spring", icon: "/icons/spring.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Flask", icon: "/icons/flask.svg" },
    { name: "Go", icon: "/icons/go.svg" },
  ],
  blockchain: [
    { name: "Solidity", icon: "/icons/solidity.svg" },
    { name: "Ethers.js", icon: "/icons/ethers.svg" },
    { name: "Web3.js", icon: "/icons/web3js.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/postgres.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "OracleDB", icon: "/icons/oracle.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
  ],
  devops: [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
    { name: "Terraform", icon: "/icons/terraform.svg" },
    { name: "Ansible", icon: "/icons/ansible.svg" },
    { name: "GitHub Actions", icon: "/icons/github-actions.svg" },
    { name: "GitLab CI/CD", icon: "/icons/gitlab.svg" },
    { name: "Jenkins", icon: "/icons/jenkins.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "OCI", icon: "/icons/oracle.svg" },
    { name: "Bash", icon: "/icons/bash.svg" },
    { name: "Jest", icon: "/icons/jest.svg" },
  ],
};

const projects = [
  {
    title: "b-drive",
    stack: ["Next.Js", "Tailwind", "Prisma", "Vercel", "GithubActions", "Truffle", "Solidity"],
    description:
      "A decentralized file storage web app built on blockchain technology, enabling secure, distributed, and censorship-resistant file management.",
    image: "/images/bdrive.png",
  },
  {
    title: "ctf infra",
    stack: ["Terraform","Linux", "AWS"],
    description:
      "Designed and deployed the infrastructure for a Capture the Flag (CTF) cybersecurity competition, hosting 15 teams on AWS with fully automated provisioning using Terraform.",
    link: "https://github.com/yami201/ctf-infra",
    image: "/images/ctf.png",
  },
  {
    title: "TeamBoard",
    stack: ["React", "ContextAPI", "NodeJS", "Spring", "Tailwind", "PeerJS", "Socket.io"],
    description:
      "A real-time team collaboration platform featuring meetings, an interactive whiteboard, messaging, and file sharing to boost remote teamwork efficiency.",
    image: "/images/teamboard.png",
  },
  {
    title: "3D MiniGame",
    stack: ["React", "ReactThreeFiber","ThreeJS","Zustand"],
    description:
      "A browser-based 3D minigame where players control a ball to reach the finish line, with randomized stages for a unique challenge every run.",
    image: "/images/3dminigame.png",
    link: "https://github.com/yami201/creatingagame",
  },
  {
    title: "Organic Sphere",
    stack: ["React", "ReactThreeFiber", "ThreeJS","Tailwind","GLSL"],
    description:
      "An interactive 3D art experiment featuring a stylized organic sphere that reacts with smooth animations and custom GLSL shading on click.",
    image: "/images/organic.png",
    link: "https://github.com/yami201/organic-sphere",
  }
];

const career = [
  {
    date: "September 2022",
    title: "Computer Science Engineering Student & Reserve Officer",
    company: "Mohammadia School of Engineers, Morocco",
    description:
      "Began studies in Computer Science Engineering while also serving as a reserve military officer.",
    color: "#2e4a9d",
  },
  {
    date: "2023",
    title: "Freelance Web Developer",
    company: "SALAAM Association",
    description:
      "Refactored and modernized the organization's website, upgrading to the latest technologies and resolving UI issues.",
    color: "#5C1730",
  },
  {
    date: "Summer 2023",
    title: "Frontend Developer Intern",
    company: "coAlias (Remote)",
    description:
      "Developed a responsive and interactive analytics page to visualize website performance metrics.",
    color: "#1AC0FE",
  },
  {
    date: "Feb – June 2024",
    title: "Apprenticeship: Software Engineer",
    company: "Attijariwafa Bank",
    description:
      "Contributed to the development of a recruitment platform enabling employers to post job openings and candidates to apply directly.",
    color: "#F8B135",
  },
  {
    date: "Summer 2024",
    title: "Software Engineering Intern",
    company: "Xlab",
    description:
      "Enhanced and expanded features in the company's no-code platform for building functional applications.",
    color: "#F16B71",
  },
  {
    date: "Jan – Aug 2024",
    title: "End of Studies Internship: Research Assistant",
    company: "Oracle R&D Morocco",
    description:
      "Designed and implemented a Runbook Tasks Automation Tool to automate operational tasks and reduce human intervention.",
    color: "#C54838",
  },
  {
    date: "May 29, 2024",
    title: "Graduation: Computer Science Engineer",
    company: "Mohammadia School of Engineers",
    description:
      "Successfully defended final project and obtained the title of State Engineer in Morocco.",
    color: "#2e4a9d",
  },
  {
    date: "July 31, 2024",
    title: "Reserve Military Officer Commission",
    company: "Royal Moroccan Armed Forces",
    description:
      "Took the military oath of officers and was officially commissioned as a reserve military officer in a ceremony presided over by His Majesty King Mohammed VI.",
    color: "#127347", 
  },
];



export {
  sphereColors,
  BlobHeroLocationDefault,
  BlobHeroLocationMobile,
  skills,
  projects,
  career
};
