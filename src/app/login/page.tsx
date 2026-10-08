import Link from 'next/link';
import { ArrowRight, Github, LockKeyhole } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-8">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/30">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Login</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Welcome back</h1>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-300">
            <LockKeyhole className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4">
          <input
            aria-label="Email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
          />
          <input
            aria-label="Password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
          <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950">Sign in</button>
        </div>

        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px flex-1 bg-slate-700" />
          OR
          <span className="h-px flex-1 bg-slate-700" />
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-medium text-slate-200">
          <Github className="h-4 w-4" />
          Continue with Google
        </button>

        <div className="mt-6 text-center text-sm text-slate-400">
          Demo mode available —{' '}
          <Link href="/dashboard" className="text-cyan-300 underline underline-offset-2">
            continue to dashboard
          </Link>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <Link href="/" className="hover:text-white">Back home</Link>
          <span>Secure workspace</span>
        </div>
      </div>
    </main>
  );
}
