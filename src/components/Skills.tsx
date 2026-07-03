"use client";

import {
  ReactLogo, NextjsLogo, JsLogo, TailwindLogo, MongodbLogo,
  PostgresLogo, RedisLogo, GitLogo, DockerLogo, VercelLogo,
  NodejsLogo, OpenAI, ClaudeLogo
} from "./Icons";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  { name: "React.js", icon: <ReactLogo size={28} /> },
  { name: "Next.js", icon: <NextjsLogo size={28} className="theme-text" /> },
  { name: "JavaScript", icon: <JsLogo size={28} /> },
  { name: "TailwindCSS", icon: <TailwindLogo size={28} /> },
  { name: "Node.js", icon: <NodejsLogo size={28} /> },
  { name: "PostgreSQL", icon: <PostgresLogo size={28} /> },
  { name: "MongoDB", icon: <MongodbLogo size={28} /> },
  { name: "Redis", icon: <RedisLogo size={28} /> },
  { name: "Docker", icon: <DockerLogo size={28} /> },
  { name: "Vercel", icon: <VercelLogo size={28} className="theme-text" /> },
  { name: "Git", icon: <GitLogo size={28} /> },
  { name: "OpenAI", icon: <OpenAI size={28} /> },
  { name: "Claude", icon: <ClaudeLogo size={28} /> },
];

export function Skills() {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section className="mt-4 overflow-hidden py-4">
      <div className="flex items-center gap-3 mb-8 px-2 sm:px-0">
        <h2 className="text-xl font-bold theme-heading tracking-tight">
          Tech Stack
        </h2>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* ROW 1: RIGHT TO LEFT */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex gap-12 shrink-0 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...firstRow, ...firstRow].map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: LEFT TO RIGHT */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex gap-12 shrink-0 px-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...secondRow, ...secondRow].map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div 
      className="flex flex-col items-center gap-3 group px-4 cursor-pointer focus:outline-none"
      tabIndex={0}
    >
      {/* 
          Logo-first focus.
          Removed capsule background for a clean, non-boxed look in both modes.
      */}
      <div className="transition-all duration-500 group-hover:scale-125 group-focus:scale-125 group-hover:-translate-y-1 group-focus:-translate-y-1 filter grayscale-[0.5] group-hover:grayscale-0 group-focus:grayscale-0 drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] group-focus:drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]">
        {skill.icon}
      </div>

      {/* 
          Subtle theme-aware text labels.
          Ensures visibility and professional feel in both Dark and Bright modes.
      */}
      <span className="text-[10px] font-black tracking-widest uppercase theme-text-secondary opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0">
        {skill.name}
      </span>
    </div>
  );
}
