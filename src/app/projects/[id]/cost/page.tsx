import { estimateCost } from '@/lib/cost/estimator';
import { demoServices } from '@/lib/analysis/graph';

export default function CostPage() {
  const cost = estimateCost(demoServices);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Cost analysis</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Estimated monthly cost</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-3xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Monthly spend</h2>
            <span className="status-pill text-emerald-300">estimates only</span>
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex justify-between"><span>Compute</span><span>${cost.compute}</span></div>
            <div className="flex justify-between"><span>Database</span><span>${cost.database}</span></div>
            <div className="flex justify-between"><span>Storage</span><span>${cost.storage}</span></div>
            <div className="flex justify-between"><span>Networking</span><span>${cost.networking}</span></div>
            <div className="flex justify-between"><span>Cache</span><span>${cost.cache}</span></div>
            <div className="mt-4 border-t border-slate-800 pt-4 flex justify-between text-lg font-semibold text-white"><span>Total</span><span>${cost.total}/month</span></div>
          </div>
        </div>

        <div className="glass rounded-3xl p-5">
          <h2 className="text-xl font-semibold text-white">Optimization opportunities</h2>
          <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-slate-200">
            <div className="font-semibold text-emerald-300">Potential saving: ${cost.optimization}/month</div>
            <p className="mt-2">Reduce idle compute capacity during low-traffic hours and shift non-critical workloads to lower-cost regions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
