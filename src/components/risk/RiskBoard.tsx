import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { demoServices } from '@/lib/analysis/graph';

export function RiskBoard({ services }: { services: typeof demoServices }) {
  const highRisk = services.filter((service) => (service.riskScore ?? 0) > 60);

  return (
    <div className="glass rounded-3xl p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Risk overview</h2>
        <ShieldAlert className="h-5 w-5 text-red-400" />
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-100">{service.name}</span>
              <span className={`status-pill ${service.riskScore > 80 ? 'text-red-300' : service.riskScore > 60 ? 'text-amber-300' : 'text-emerald-300'}`}>
                {service.riskScore}/100
              </span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-slate-800">
              <div className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-amber-400 to-red-400" style={{ width: `${service.riskScore}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
