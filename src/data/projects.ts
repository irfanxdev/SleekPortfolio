import { Project } from "@/components/ProjectCard";

export const allProjects: Project[] = [
  {
    id: "Dispatch",
    title: "Dispatch",
    description: "Dispatch is a web application that help you to post on multiple social media platform like instagram , facebook, x , linked In , pintrest. it it like Write it once it lands everywhere.",
    thumbnail: "/Dispatch.webp",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Strapi"],
    status: "In Progress",
    liveLink: "https://disptach-frontend.onrender.com",
    githubLink: "https://github.com/irfanxdev/Disptach.git",
  },
  {
    id: "talent-iq",
    title: "Talent IQ",
    description:
      "A full-stack coding interview platform enabling real-time interview practice. Features include a VS Code-like Monaco Editor, secure code execution using Node.js and Piston API, real-time collaboration (video/audio, chat, screen sharing), authentication with Clerk, and performance optimization using TanStack Query and Inngest.",
    thumbnail: "/Talent.webp",
    tags: [
      "React.js",
      "Express.js",
      "Socket.io",
      "MongoDB"
    ],
    status: "Completed",
    liveLink: "https://talent-iq-1-io9l.onrender.com",
    githubLink: "https://github.com/irfan-ansari303/TALENT-IQ.git",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "A backend-focused application for shortening URLs with secure authentication and authorization using JWT and bcrypt. Includes a well-structured MongoDB schema and multiple RESTful API endpoints built with a modular Node.js architecture.",
    thumbnail: "/Url-shortner.png",
    tags: ["Node.js", "MongoDB", "JWT", "REST API", "Express.js"],
    status: "Completed",
    liveLink: "https://url-shortner-037m.onrender.com",
    githubLink: "https://github.com/irfan-ansari303/URL_SHORTNER.git",
  },
  {
    id: "airis-chat",
    title: "AIris Chat Assistant",
    description:
      "An AI-powered chat assistant with real-time LLM integration. Features dynamic UI updates using conditional rendering and loading states, along with a responsive modern interface built using Tailwind CSS.",
    thumbnail: "/Alris-chat-boat.png",
    tags: ["React.js", "Tailwind CSS", "Gemini API", "HTML", "CSS"],
    status: "Completed",
    liveLink: "https://airis-chat-bot.vercel.app/",
    githubLink: "https://github.com/irfan-ansari303/AIris-chat-boat.git",
  },
];
