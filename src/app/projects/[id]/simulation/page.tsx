import { SimulationPanel } from '@/components/simulation/SimulationPanel';
import { demoEdges, demoServices } from '@/lib/analysis/graph';

export default function SimulationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">What-if simulation</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Failure propagation</h1>
      </div>

      <SimulationPanel services={demoServices} connections={demoEdges} />
    </main>
  );
}
