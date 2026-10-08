import Link from 'next/link';
import { ArrowUpRight, FolderOpen, Plus } from 'lucide-react';
import { projectSummaries } from '@/data/mock-projects';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Projects</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Infrastructure projects</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-medium text-slate-950">
          <Plus className="h-4 w-4" /> Create project
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projectSummaries.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="glass group rounded-3xl p-5">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                <FolderOpen className="h-5 w-5" />
              </div>
              <span className="status-pill text-cyan-300">{project.health}/100</span>
            </div>

            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{project.provider}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="text-slate-400">Services</div>
                <div className="mt-1 text-lg font-semibold text-white">{project.services}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="text-slate-400">Cost</div>
                <div className="mt-1 text-lg font-semibold text-white">{project.cost}</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
              <span>Open workspace</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
