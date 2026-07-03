import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { allProjects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "@/components/Icons";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = allProjects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

async function getGithubReadme(githubUrl: string) {
  if (!githubUrl || githubUrl === "#") return null;

  const cleanUrl = githubUrl.replace(".git", "");
  const repoPath = cleanUrl.replace("https://github.com/", "");

  try {
    let response = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
    if (!response.ok) {
      response = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
    }

    if (!response.ok) return null;
    return await response.text();
  } catch (error) {
    console.error("Error fetching README:", error);
    return null;
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = allProjects.find((p) => p.id === id);
  if (!project) notFound();

  const readme = await getGithubReadme(project.githubLink);

  return (
    <main className="min-h-screen animate-fade-in pb-20 pt-10 max-w-5xl mx-auto px-6">
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 theme-text-muted hover:text-indigo-400 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Projects
        </Link>
      </div>

      <header className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-card border-white/10 shadow-2xl">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider ${
                project.status === 'Completed' || project.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
              }`}>
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black theme-heading tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="theme-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-500 text-white font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/25"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl theme-bg-secondary border theme-border-secondary hover:bg-white dark:hover:bg-white/5 font-bold transition-all theme-text-muted hover:text-indigo-400"
              >
                <Github size={18} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-10 border-t border-white/5 mt-10">
        <h2 className="text-2xl font-bold theme-heading tracking-tight mb-10">Project Documentation</h2>
        <div className="markdown-content glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5">
          {readme ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {readme}
            </ReactMarkdown>
          ) : (
            <div className="text-center py-20">
              <p className="theme-text-muted">README could not be loaded from GitHub.</p>
              <a href={project.githubLink} target="_blank" className="text-indigo-400 hover:underline mt-2 inline-block">View on GitHub</a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
