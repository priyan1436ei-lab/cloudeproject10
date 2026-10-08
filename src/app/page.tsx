import Link from 'next/link';
import { ArrowRight, BrainCircuit, ChartNoAxesCombined, ShieldCheck, Workflow } from 'lucide-react';

const featureCards = [
  {
    icon: Workflow,
    title: 'Architecture Mapping',
    text: 'Turn cloud services into a live dependency graph that highlights critical paths and bottlenecks.'
  },
  {
    icon: BrainCircuit,
    title: 'AI Analysis',
    text: 'Instant plain-English explanations, recommendations, and failure simulation from a structured AI layer.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk Intelligence',
    text: 'Detect single points of failure, security gaps, and resilience issues before they cascade.'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Cost & Health',
    text: 'Track cloud health, estimate monthly spend, and surface optimization opportunities with confidence.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-lg font-bold text-cyan-300">
            C
          </div>
          <div>
            <div className="text-lg font-semibold">CloudLens AI</div>
            <div className="text-xs text-slate-400">Infrastructure intelligence</div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              AI-powered cloud visibility
            </span>
            <h1 className="mt-6 max-w-xl text-5xl font-bold leading-tight text-slate-50">
              Understand Your Cloud. Before It Fails.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              CloudLens AI transforms complex infrastructure into interactive architecture maps, dependency graphs,
              AI explanations, and risk intelligence that helps teams act before outages happen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 shadow-glow">
                Analyze Infrastructure <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900/50 px-5 py-3 font-medium text-slate-200">
                Explore Demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid-bg absolute inset-4 rounded-3xl border border-cyan-400/10 bg-slate-950/70" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/40">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                <span>CloudLens Demo</span>
                <span className="status-pill text-emerald-300">Healthy</span>
              </div>
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="h-11 w-24 rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-center text-xs font-medium leading-10 text-cyan-300">
                    CDN
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-11 w-28 rounded-xl border border-slate-600 bg-slate-900 text-center text-xs font-medium leading-10 text-slate-200">
                    Load Balancer
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-11 w-28 rounded-xl border border-slate-600 bg-slate-900 text-center text-xs font-medium leading-10 text-slate-200">
                    API Gateway
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-center text-xs text-slate-200">Auth</div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-center text-xs text-slate-200">Order Service</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-center text-xs text-amber-200">Redis</div>
                  <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-3 text-center text-xs text-cyan-200">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass rounded-2xl p-5">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{title}</h3>
              <p className="text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
