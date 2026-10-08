import { projectSummaries } from '@/data/mock-projects';
import { GraphCanvas } from '@/components/architecture/GraphCanvas';
import { AIChatPanel } from '@/components/ai/AIChatPanel';
import { RiskBoard } from '@/components/risk/RiskBoard';
import { SimulationPanel } from '@/components/simulation/SimulationPanel';
import { analyzeProject, demoServices, demoEdges } from '@/lib/analysis/graph';

export default function ProjectWorkspacePage({ params }: { params: { id: string } }) {
  const project = projectSummaries.find((item) => item.id === params.id) ?? projectSummaries[0];
  const analysis = analyzeProject(demoServices, demoEdges);

  return (
    <main className="mx-auto max-w-[1600px] px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Workspace</p>
          <h1 className="mt-2 text-3xl font-bold text-white">{project.name}</h1>
        </div>
        <div className="status-pill text-emerald-300">Demo infrastructure</div>
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.5fr_0.8fr]">
        <div className="glass rounded-3xl p-4">
          <GraphCanvas services={demoServices} connections={demoEdges} />
        </div>

        <AIChatPanel services={demoServices} connections={demoEdges} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="glass rounded-3xl p-5">
          <h2 className="text-xl font-semibold text-white">Dependency analysis</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Critical path</span><span className="text-cyan-300">CDN → API Gateway → PostgreSQL</span></div>
            <div className="flex items-center justify-between"><span>Centrality</span><span>{analysis.centrality.toFixed(0)}/100</span></div>
            <div className="flex items-center justify-between"><span>Single points</span><span>{analysis.singlePoints.length}</span></div>
          </div>
        </div>

        <RiskBoard services={demoServices} />
        <SimulationPanel services={demoServices} connections={demoEdges} />
      </div>
    </main>
  );
}
