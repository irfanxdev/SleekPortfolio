"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "./Icons";
import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  status: string;
  liveLink: string;
  githubLink: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const isCompleted = project.status === 'Completed' || project.status === 'Live';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group w-full"
    >
      <div className="flex flex-col md:flex-row gap-6 overflow-hidden border-y-2 border-x-0 theme-border-secondary bg-white/5 dark:bg-white/[0.02] px-3 py-6 transition-all duration-300 backdrop-blur-sm rounded-2xl md:gap-3 glass-card-hover group">
        
        {/* Thumbnail Area - Aspect Video (16/9) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md sm:w-64 sm:shrink-0 bg-neutral-100/50 dark:bg-neutral-800/30 shadow-inner">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block h-full w-full overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              unoptimized
              className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-110"
            />
          </a>
        </div>

        {/* Content Area */}
        <div className="flex w-full flex-col gap-3">
          {/* Header Row: Title and Links */}
          <div className="flex w-full flex-col gap-4 p-0 px-3">
            <div className="flex w-full justify-between items-start text-xl md:flex-row flex-col gap-4 md:gap-0">
              <div>
                <Link href={`/projects/${project.id}`} className="font-bold theme-heading hover:text-indigo-400 transition-colors">
                  {project.title}
                </Link>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-text-muted hover:text-indigo-400 theme-bg-secondary flex items-center gap-1.5 rounded-md border theme-border-secondary px-2.5 py-1 text-xs font-semibold transition-all"
                  title="View Website"
                >
                  <ExternalLink size={12} />
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-text-muted hover:text-indigo-400 theme-bg-secondary flex items-center gap-1.5 rounded-md border theme-border-secondary px-2.5 py-1 text-xs font-semibold transition-all"
                  title="View GitHub"
                >
                  <Github size={12} />
                  Github
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="theme-text-secondary text-sm leading-relaxed mb-1 line-clamp-2 w-full">
              {project.description}
            </p>
          </div>

          {/* Tags as Pills */}
          <div className="p-0 px-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border theme-border-secondary theme-bg-secondary px-2.5 py-1 text-[11px] font-bold theme-text-muted transition-all uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Row: Status Pill & View Details */}
          <div className="mt-2 flex w-full items-center justify-between px-3 pt-0">
            <div
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-bold tracking-tight uppercase border transition-colors ${
                isCompleted
                  ? "border-emerald-300/20 bg-emerald-500/10 text-emerald-500"
                  : "border-rose-300/20 bg-rose-500/10 text-rose-500"
              }`}
            >
              <div className={`size-1.5 animate-pulse rounded-full ${isCompleted ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]'}`} />
              {isCompleted ? 'Completed' : 'Building'}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-2 text-sm font-bold theme-text-muted hover:text-indigo-400 transition-all group/btn"
            >
              View Details 
              <ArrowRight size={14} className="mt-0.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
