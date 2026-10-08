import { analyzeProject, demoEdges, demoServices } from '@/lib/analysis/graph';
import { runSecurityAnalysis } from '@/lib/security/analyzer';

export default function SecurityPage() {
  const analysis = analyzeProject(demoServices, demoEdges);
  const findings = runSecurityAnalysis(demoServices);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Security</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Security analysis</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-5">
          <h2 className="text-xl font-semibold text-white">Findings</h2>
          <div className="mt-5 space-y-3">
            {findings.map((finding) => (
              <div key={finding.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-100">{finding.title}</span>
                  <span className={`status-pill ${finding.severity === 'CRITICAL' ? 'text-red-300' : finding.severity === 'HIGH' ? 'text-amber-300' : 'text-emerald-300'}`}>
                    {finding.severity}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-5">
          <h2 className="text-xl font-semibold text-white">Risk posture</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="flex justify-between"><span>Security score</span><span>{analysis.healthScore - 5}</span></div>
            <div className="flex justify-between"><span>Public exposure</span><span>2 services</span></div>
            <div className="flex justify-between"><span>Monitoring gaps</span><span>3 components</span></div>
            <div className="flex justify-between"><span>Backup coverage</span><span>Good</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}
