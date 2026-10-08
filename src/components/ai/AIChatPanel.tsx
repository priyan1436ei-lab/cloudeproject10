'use client';

import { useMemo, useState } from 'react';
import { BrainCircuit, MessageSquareText, SendHorizonal } from 'lucide-react';
import { generateAIResponse } from '@/lib/ai/provider';

export function AIChatPanel({ services, connections }: { services: any[]; connections: any[] }) {
  const [question, setQuestion] = useState('Explain this architecture.');
  const [answer, setAnswer] = useState('Your application follows a three-layer architecture. The frontend communicates with the API service. The API service communicates with PostgreSQL and Redis. PostgreSQL is the primary persistent data store. Redis is used as a caching layer. The API server is a critical dependency because both the frontend and database workflow depend on it.');

  const suggestions = useMemo(() => [
    'Explain this architecture',
    'What is the most critical service?',
    'What happens if Redis goes down?',
    'Which service is a single point of failure?'
  ], []);

  return (
    <div className="glass rounded-3xl p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-cyan-300" />
          <h2 className="text-xl font-semibold text-white">CloudLens AI Analyst</h2>
        </div>
        <span className="status-pill text-emerald-300">Online</span>
      </div>

      <div className="space-y-3">
        {suggestions.map((item) => (
          <button key={item} onClick={() => setQuestion(item)} className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-left text-sm text-slate-300 hover:border-cyan-400/50">
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
        <div className="mb-2 flex items-center gap-2 text-cyan-300"><MessageSquareText className="h-4 w-4" /> AI response</div>
        <p className="leading-7">{answer}</p>
      </div>

      <div className="mt-5 flex gap-2">
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
          placeholder="Ask anything..."
        />
        <button
          onClick={() => setAnswer(generateAIResponse(question, services, connections).summary)}
          className="rounded-xl bg-cyan-500 p-3 text-slate-950"
          aria-label="Ask the AI"
        >
          <SendHorizonal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
