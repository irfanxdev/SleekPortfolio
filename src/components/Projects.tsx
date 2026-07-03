import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { allProjects } from "@/data/projects";

// Show the first 2 projects on the home page as "Featured"
const featuredProjects = allProjects.slice(0, 2);

export function Projects() {
  return (
    <section className="mt-10 animate-fade-in-delay-2">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-semibold theme-heading tracking-tight">Featured Projects</h2>
      </div>

      <div className="flex flex-col gap-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="
      px-8 py-2.5 rounded-xl 
      theme-bg-secondary
      theme-text hover:text-indigo-400
      backdrop-blur-md 
      border theme-border-secondary
      text-[14px] font-bold
      shadow-sm 
      theme-btn-hover
      transition-all duration-500
    "
        >
          Show all Projects
        </Link>
      </div>
    </section>
  );
}
