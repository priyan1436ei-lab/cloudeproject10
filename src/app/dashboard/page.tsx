import Link from 'next/link';
import { Activity, AlertTriangle, ArrowUpRight, CreditCard, LayoutGrid, ShieldAlert, TrendingUp } from 'lucide-react';
import { dashboardMetrics, projectSummaries, recentAnalyses } from '@/data/mock-projects';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-50">CloudLens Dashboard</h1>
        </div>
        <Link href="/projects" className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
          View Projects
        </Link>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="glass rounded-2xl p-4">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-3xl font-bold text-white">{metric.value}</span>
              <span className="text-xs text-cyan-300">{metric.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="glass rounded-3xl p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
            <span className="status-pill text-cyan-300">8 active</span>
          </div>
          <div className="space-y-4">
            {projectSummaries.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div>
                  <div className="font-medium text-slate-100">{project.name}</div>
                  <div className="mt-1 text-sm text-slate-400">{project.provider} • {project.services} services</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-cyan-300">{project.health}</div>
                  <div className="text-xs text-slate-400">Health score</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent AI analysis</h2>
            <TrendingUp className="h-4 w-4 text-cyan-300" />
          </div>
          <div className="space-y-4">
            {recentAnalyses.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-100">{item.title}</span>
                  <span className="status-pill text-amber-300">{item.severity}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-3xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Critical services</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center justify-between"><span>PostgreSQL</span><span className="text-red-300">High</span></li>
            <li className="flex items-center justify-between"><span>API Gateway</span><span className="text-amber-300">Medium</span></li>
            <li className="flex items-center justify-between"><span>Redis</span><span className="text-amber-300">Medium</span></li>
          </ul>
        </div>

        <div className="glass rounded-3xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <Activity className="h-5 w-5 text-cyan-300" />
            <h3 className="text-lg font-semibold text-white">Infrastructure health</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-sm text-slate-300"><span>Reliability</span><span>91</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[91%] rounded-full bg-cyan-400" /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm text-slate-300"><span>Security</span><span>82</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[82%] rounded-full bg-emerald-400" /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm text-slate-300"><span>Performance</span><span>89</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[89%] rounded-full bg-violet-400" /></div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-emerald-300" />
            <h3 className="text-lg font-semibold text-white">Optimization opportunities</h3>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-emerald-100">Potential saving</span>
              <span className="text-lg font-semibold text-emerald-300">$32/month</span>
            </div>
            <p className="mt-3 text-sm text-slate-200">Reduce idle compute capacity during low traffic windows and consolidate redundant monitoring containers.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
