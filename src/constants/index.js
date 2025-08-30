import ICONS from "../assests/icons"
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
    { name: "JavaScript", Icon: ICONS.JavascriptIcon },
    { name: "TypeScript", Icon: ICONS.TypescriptIcon },
    { name: "React", Icon: ICONS.ReactIcon },
    { name: "Next.js", Icon: ICONS.NextjsIcon },
    { name: "Redux", Icon: ICONS.ReduxIcon },
    { name: "Zustand", Icon: ICONS.ZustandIcon },
    { name: "Tailwind", Icon: ICONS.TailwindIcon },
    { name: "Bootstrap", Icon: ICONS.BootstrapIcon },
    { name: "Sass", Icon: ICONS.SassIcon },
    { name: "Framer Motion", Icon: ICONS.FramerIcon },
    { name: "GSAP", Icon: ICONS.GsapIcon },
    { name: "Three.js", Icon: ICONS.ThreeIcon },
  ],
  backend: [
    { name: "Node.js", Icon: ICONS.NodeIcon },
    { name: "Express.js", Icon: ICONS.ExpressIcon },
    { name: "NestJS", Icon: ICONS.NestIcon },
    { name: "GraphQL", Icon: ICONS.GraphqlIcon },
    { name: "Java", Icon: ICONS.JavaIcon },
    { name: "Spring", Icon: ICONS.SpringIcon },
    { name: "Python", Icon: ICONS.PythonIcon },
    { name: "Flask", Icon: ICONS.FlaskIcon },
    { name: "Go", Icon: ICONS.GoIcon },
  ],
  blockchain: [
    { name: "Solidity", Icon: ICONS.SolidityIcon },
    { name: "Ethers.js", Icon: ICONS.EthersIcon },
    { name: "Web3.js", Icon: ICONS.Web3Icon },
  ],
  databases: [
    { name: "PostgreSQL", Icon: ICONS.PostgresIcon },
    { name: "MySQL", Icon: ICONS.MysqlIcon },
    { name: "OracleDB", Icon: ICONS.OracleIcon },
    { name: "MongoDB", Icon: ICONS.MongoIcon },
    { name: "Redis", Icon: ICONS.RedisIcon },
    { name: "Prisma", Icon: ICONS.PrismaIcon },
    { name: "Firebase", Icon: ICONS.FirebaseIcon },
    { name: "Supabase", Icon: ICONS.SupabaseIcon },
  ],
  devops: [
    { name: "Git", Icon: ICONS.GitIcon },
    { name: "Docker", Icon: ICONS.DockerIcon },
    { name: "Kubernetes", Icon: ICONS.KubernetesIcon },
    { name: "Terraform", Icon: ICONS.TerraformIcon },
    { name: "Ansible", Icon: ICONS.AnsibleIcon },
    { name: "GitHub Actions", Icon: ICONS.GithubActionsIcon },
    { name: "GitLab CI/CD", Icon: ICONS.GitlabIcon },
    { name: "Jenkins", Icon: ICONS.JenkinsIcon },
    { name: "AWS", Icon: ICONS.AwsIcon },
    { name: "OCI", Icon: ICONS.OciIcon },
    { name: "Bash", Icon: ICONS.BashIcon },
    { name: "Jest", Icon: ICONS.JestIcon },
  ],
}


const projects = [
  {
    title: "b-drive",
    stack: ["Next.Js", "Tailwind", "Prisma", "Vercel", "GithubActions", "Truffle", "Solidity"],
    description:
      "A decentralized file storage web app built on blockchain technology, enabling secure, distributed, and censorship-resistant file management.",
    image: "/images/bdrive.webp",
  },
  {
    title: "ctf infra",
    stack: ["Terraform","Linux", "AWS"],
    description:
      "Designed and deployed the infrastructure for a Capture the Flag (CTF) cybersecurity competition, hosting 15 teams on AWS with fully automated provisioning using Terraform.",
    link: "https://github.com/yami201/ctf-infra",
    image: "/images/ctf.webp",
  },
  {
    title: "TeamBoard",
    stack: ["React", "ContextAPI", "NodeJS", "Spring", "Tailwind", "PeerJS", "Socket.io"],
    description:
      "A real-time team collaboration platform featuring meetings, an interactive whiteboard, messaging, and file sharing to boost remote teamwork efficiency.",
    image: "/images/teamboard.webp",
  },
  {
    title: "3D MiniGame",
    stack: ["React", "ReactThreeFiber","ThreeJS","Zustand"],
    description:
      "A browser-based 3D minigame where players control a ball to reach the finish line, with randomized stages for a unique challenge every run.",
    image: "/images/3dminigame.webp",
    link: "https://github.com/yami201/creatingagame",
  },
  {
    title: "Organic Sphere",
    stack: ["React", "ReactThreeFiber", "ThreeJS","Tailwind","GLSL"],
    description:
      "An interactive 3D art experiment featuring a stylized organic sphere that reacts with smooth animations and custom GLSL shading on click.",
    image: "/images/organic.webp",
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


const assets = [
  "/images/bdrive.webp",
  "/images/ctf.webp",
  "/images/teamboard.webp",
  "/images/3dminigame.webp",
  "/images/organic.webp",
]




export {
  sphereColors,
  BlobHeroLocationDefault,
  BlobHeroLocationMobile,
  skills,
  projects,
  career,
  assets
};
