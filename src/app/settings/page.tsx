export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Workspace settings</h1>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Project name</label>
            <input defaultValue="E-Commerce Platform" className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Cloud provider</label>
            <select defaultValue="AWS" className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400">
              <option>AWS</option>
              <option>Azure</option>
              <option>Google Cloud</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">AI mode</label>
            <select defaultValue="Mock AI" className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400">
              <option>Mock AI</option>
              <option>OpenAI</option>
              <option>Gemini</option>
            </select>
          </div>
          <button className="rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950">Save settings</button>
        </div>
      </div>
    </main>
  );
}
