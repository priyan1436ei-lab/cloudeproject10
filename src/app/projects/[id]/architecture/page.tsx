import { GraphCanvas } from '@/components/architecture/GraphCanvas';
import { projectSummaries } from '@/data/mock-projects';
import { demoServices, demoEdges, analyzeProject } from '@/lib/analysis/graph';

export default function ArchitecturePage({ params }: { params: { id: string } }) {
  const project = projectSummaries.find((item) => item.id === params.id) ?? projectSummaries[0];
  const analysis = analyzeProject(demoServices, demoEdges);

  return (
    <main className="mx-auto max-w-[1400px] px-6 py-8">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Architecture</p>
          <h1 className="mt-2 text-3xl font-bold text-white">{project.name} map</h1>
        </div>
        <div className="status-pill text-amber-300">Critical path highlighted</div>
      </div>

      <div className="glass rounded-3xl p-4">
        <GraphCanvas services={demoServices} connections={demoEdges} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="glass rounded-3xl p-5">
          <h3 className="text-lg font-semibold text-white">Health score</h3>
          <div className="mt-3 text-4xl font-bold text-cyan-300">{analysis.healthScore}/100</div>
        </div>
        <div className="glass rounded-3xl p-5">
          <h3 className="text-lg font-semibold text-white">Critical issues</h3>
          <div className="mt-3 text-3xl font-bold text-red-300">{analysis.riskScore}</div>
        </div>
        <div className="glass rounded-3xl p-5">
          <h3 className="text-lg font-semibold text-white">Services monitored</h3>
          <div className="mt-3 text-3xl font-bold text-green-300">{demoServices.length}</div>
        </div>
      </div>
    </main>
  );
}
