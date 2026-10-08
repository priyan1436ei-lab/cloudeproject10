import { RiskBoard } from '@/components/risk/RiskBoard';
import { projectSummaries } from '@/data/mock-projects';
import { demoServices, demoEdges, analyzeProject } from '@/lib/analysis/graph';

export default function RisksPage({ params }: { params: { id: string } }) {
  const project = projectSummaries.find((item) => item.id === params.id) ?? projectSummaries[0];
  const analysis = analyzeProject(demoServices, demoEdges);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Risk analysis</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{project.name}</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <RiskBoard services={demoServices} />
        <div className="glass rounded-3xl p-5">
          <h2 className="text-xl font-semibold text-white">Risk summary</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Infrastructure risk</span><span className="text-red-300">{analysis.riskScore}/100</span></div>
            <div className="flex items-center justify-between"><span>Critical services</span><span>{analysis.criticalNodes.length}</span></div>
            <div className="flex items-center justify-between"><span>Reliability</span><span>{analysis.healthScore}</span></div>
            <div className="flex items-center justify-between"><span>Single points</span><span>{analysis.singlePoints.length}</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}
