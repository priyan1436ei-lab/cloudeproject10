import Link from 'next/link';
import { BarChart3, BriefcaseBusiness, Gauge, Home, Lock, Settings, ShieldCheck, Zap } from 'lucide-react';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/projects', label: 'Projects', icon: BriefcaseBusiness },
  { href: '/projects/demo', label: 'Architecture', icon: Gauge },
  { href: '/projects/demo/risks', label: 'Risks', icon: ShieldCheck },
  { href: '/projects/demo/simulation', label: 'Simulation', icon: Zap },
  { href: '/settings', label: 'Settings', icon: Settings }
];

export function AppSidebar() {
  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-slate-800 bg-slate-950/80 p-4 lg:flex">
      <div className="flex items-center gap-3 px-2 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300">C</div>
        <div>
          <div className="font-semibold text-white">CloudLens AI</div>
          <div className="text-xs text-slate-400">Demo control panel</div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-white">
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
      </div>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
        <div className="mb-2 flex items-center gap-2 text-cyan-300"><Lock className="h-4 w-4" /> Secure access</div>
        <p className="text-slate-400">Demo mode enabled. No external cloud credentials required.</p>
      </div>
    </aside>
  );
}
