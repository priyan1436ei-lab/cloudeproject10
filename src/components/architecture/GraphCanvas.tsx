'use client';

import {
  Background,
  Controls,
  Handle,
  MiniMap,
  Node,
  NodeProps,
  Position,
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Edge,
  type Node as FlowNode
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useMemo } from 'react';
import { Network, ShieldAlert, TriangleAlert } from 'lucide-react';

export type ServiceNodeData = {
  label: string;
  type: string;
  riskScore: number;
  dependencies: number;
};

function ServiceNode({ data, selected }: NodeProps<ServiceNodeData>) {
  const riskTone = data.riskScore > 80 ? 'text-red-300' : data.riskScore > 60 ? 'text-amber-300' : 'text-emerald-300';

  return (
    <div className="node-card min-w-[180px] rounded-2xl p-3 text-slate-50">
      <Handle type="target" position={Position.Left} className="!w-2 !h-2 !bg-cyan-400" />
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
          <div className="text-sm font-semibold">{data.label}</div>
        </div>
        {data.riskScore > 70 && <TriangleAlert className="h-4 w-4 text-amber-300" />}
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">{data.type}</div>
      <div className={`mt-2 text-xs ${riskTone}`}>Risk: {data.riskScore}</div>
      <div className="mt-1 text-xs text-slate-300">Dependencies: {data.dependencies}</div>
      <Handle type="source" position={Position.Right} className="!w-2 !h-2 !bg-cyan-400" />
      {selected && <div className="absolute inset-0 rounded-2xl ring-2 ring-cyan-400/60" />}
    </div>
  );
}

const nodeTypes = { serviceNode: ServiceNode };

export function GraphCanvas({
  services,
  connections
}: {
  services: Array<{ id: string; name: string; type: string; riskScore?: number; metadata?: Record<string, string | number> }>; 
  connections: Array<{ id: string; source: string; target: string; type?: string; latency?: number }>;
}) {
  const nodes = useMemo<FlowNode<ServiceNodeData>[]>(() => {
    return services.map((service) => ({
      id: service.id,
      type: 'serviceNode',
      position: {
        x: 120 + (Number(service.metadata?.x) || 0),
        y: 80 + (Number(service.metadata?.y) || 0)
      },
      data: {
        label: service.name,
        type: service.type,
        riskScore: service.riskScore ?? 45,
        dependencies: connections.filter((edge) => edge.target === service.id).length
      }
    }));
  }, [services, connections]);

  const edges = useMemo<Edge[]>(() => {
    return connections.map((connection) => ({
      id: connection.id,
      source: connection.source,
      target: connection.target,
      type: 'smoothstep',
      animated: true,
      style: { stroke: connection.type === 'critical' ? '#f59e0b' : '#38bdf8', strokeWidth: connection.type === 'critical' ? 3 : 2 }
    }));
  }, [connections]);

  return (
    <div className="h-[560px] w-full rounded-3xl border border-slate-800 bg-slate-950/70">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView attributionPosition="bottom-right">
        <MiniMap pannable zoomable className="!bg-slate-950 !text-slate-300" />
        <Controls />
        <Background gap={20} size={1} color="rgba(148,163,184,0.12)" />
      </ReactFlow>
    </div>
  );
}
