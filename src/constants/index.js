import { title } from "framer-motion/client";

const sphereColors = ["#7ff", "#ff6ec7", "#7fff7a", "#ffd37a", "#ff7a7a"];

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
    title: "ctf infrastructure",
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


export {
  sphereColors,
  BlobHeroLocationDefault,
  BlobHeroLocationMobile,
  skills,
  projects
};
