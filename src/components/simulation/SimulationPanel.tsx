'use client';

import { useMemo, useState } from 'react';
import { Play, TriangleAlert } from 'lucide-react';
import { simulateFailure, type Service } from '@/lib/analysis/graph';

export function SimulationPanel({ services, connections }: { services: Service[]; connections: any[] }) {
  const [selected, setSelected] = useState('postgresql');

  const result = useMemo(() => simulateFailure(services, connections, selected), [services, connections, selected]);

  return (
    <div className="glass rounded-3xl p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">What-if simulator</h2>
        <Play className="h-4 w-4 text-cyan-300" />
      </div>

      <label className="mb-3 block text-sm text-slate-300">Select a service to simulate</label>
      <select value={selected} onChange={(event) => setSelected(event.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400">
        {services.map((service) => (
          <option key={service.id} value={service.id}>{service.name}</option>
        ))}
      </select>

      <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-orange-200"><TriangleAlert className="h-4 w-4" /> {result.impactLevel}</div>
        <div className="text-sm text-slate-200">Affected: {result.affectedNodes.join(', ')}</div>
        <div className="mt-3 text-sm text-slate-300">{result.estimatedConsequences.join(' • ')}</div>
      </div>
    </div>
  );
}
