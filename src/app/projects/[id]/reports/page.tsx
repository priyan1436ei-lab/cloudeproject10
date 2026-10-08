export default function ReportsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Reports</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Infrastructure report</h1>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Executive Summary</h2>
            <p className="mt-1 text-sm text-slate-400">CloudLens AI generated a structured infrastructure evaluation.</p>
          </div>
          <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">Download Report</button>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"><strong className="text-white">1. Executive Summary:</strong> Service dependency concentration remains moderate, with the API and database layers acting as the primary risk concentration points.</section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"><strong className="text-white">2. Architecture Overview:</strong> A three-tier path exists from the CDN through API Gateway, auth, Redis cache, and PostgreSQL data plane.</section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"><strong className="text-white">3. Dependency Analysis:</strong> The API layer has a high centrality score and should be monitored with failover strategy and health checks.</section>
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"><strong className="text-white">4. Recommendations:</strong> Add read replicas, implement backup validation, and increase monitoring coverage for external APIs.</section>
        </div>
      </div>
    </main>
  );
}
