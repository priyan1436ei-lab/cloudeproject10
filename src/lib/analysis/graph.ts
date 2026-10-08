import { demoEdges, demoServices, type Connection, type Service } from '@/data/mock-projects';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type AnalysisResult = {
  healthScore: number;
  riskScore: number;
  centrality: number;
  criticalNodes: string[];
  singlePoints: string[];
  dependencyDepth: Record<string, number>;
};

const toMap = (services: Service[]) => {
  const map = new Map<string, Service>();
  services.forEach((service) => map.set(service.id, service));
  return map;
};

export function calculateCentrality(services: Service[], connections: Connection[]) {
  const indegree = new Map<string, number>();
  const outdegree = new Map<string, number>();

  services.forEach((service) => {
    indegree.set(service.id, 0);
    outdegree.set(service.id, 0);
  });

  connections.forEach((edge) => {
    outdegree.set(edge.source, (outdegree.get(edge.source) ?? 0) + 1);
    indegree.set(edge.target, (indegree.get(edge.target) ?? 0) + 1);
  });

  const scores = services.map((service) => {
    const incoming = indegree.get(service.id) ?? 0;
    const outgoing = outdegree.get(service.id) ?? 0;
    return {
      id: service.id,
      score: Math.min(100, (incoming + outgoing) * 12 + (service.riskScore ?? 25))
    };
  });

  return scores;
}

export function calculateRisk(services: Service[], connections: Connection[]) {
  const score = services.reduce((total, service) => {
    const incoming = connections.filter((edge) => edge.target === service.id).length;
    const outgoing = connections.filter((edge) => edge.source === service.id).length;
    const concentration = incoming + outgoing;
    const base = service.riskScore ?? 45;
    return total + base + concentration * 4;
  }, 0);

  return Math.min(100, Math.round(score / Math.max(services.length, 1)));
}

export function findCriticalNodes(services: Service[], connections: Connection[]) {
  const centrality = calculateCentrality(services, connections)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.id);

  return services
    .filter((service) => centrality.includes(service.id) || (service.riskScore ?? 0) > 70)
    .map((service) => service.name);
}

export function findSinglePointsOfFailure(services: Service[], connections: Connection[]) {
  return services
    .filter((service) => {
      const incoming = connections.filter((edge) => edge.target === service.id).length;
      const outgoing = connections.filter((edge) => edge.source === service.id).length;
      return incoming > 1 && (service.riskScore ?? 0) > 60;
    })
    .map((service) => service.name);
}

export function findCriticalPath(services: Service[], connections: Connection[]) {
  const edges = connections
    .filter((connection) => connection.type === 'critical')
    .map((connection) => `${connection.source} -> ${connection.target}`);

  return edges.length > 0 ? edges : ['cdn -> lb -> gateway -> db'];
}

export function calculateDependencyDepth(services: Service[], connections: Connection[]) {
  const map = new Map<string, string[]>();
  services.forEach((service) => map.set(service.id, []));
  connections.forEach((connection) => {
    const list = map.get(connection.source) ?? [];
    list.push(connection.target);
    map.set(connection.source, list);
  });

  const depth = new Map<string, number>();
  const walk = (id: string): number => {
    if (depth.has(id)) return depth.get(id) ?? 0;
    const children = map.get(id) ?? [];
    const value = children.length === 0 ? 1 : 1 + Math.max(...children.map((child) => walk(child)));
    depth.set(id, value);
    return value;
  };

  services.forEach((service) => walk(service.id));
  return Object.fromEntries(services.map((service) => [service.id, depth.get(service.id) ?? 1]));
}

export function simulateFailure(services: Service[], connections: Connection[], failedNodeId: string) {
  const reverseMap = new Map<string, string[]>();
  const forwardMap = new Map<string, string[]>();

  services.forEach((service) => {
    reverseMap.set(service.id, []);
    forwardMap.set(service.id, []);
  });

  connections.forEach((connection) => {
    const list = forwardMap.get(connection.source) ?? [];
    list.push(connection.target);
    forwardMap.set(connection.source, list);

    const incoming = reverseMap.get(connection.target) ?? [];
    incoming.push(connection.source);
    reverseMap.set(connection.target, incoming);
  });

  const queue = [failedNodeId];
  const seen = new Set<string>([failedNodeId]);
  const affected = new Map<string, 'FAILED' | 'DIRECTLY_AFFECTED' | 'INDIRECTLY_AFFECTED' | 'SAFE'>();
  affected.set(failedNodeId, 'FAILED');

  while (queue.length > 0) {
    const current = queue.shift()!;
    const dependents = reverseMap.get(current) ?? [];
    dependents.forEach((dependent) => {
      if (!seen.has(dependent)) {
        seen.add(dependent);
        queue.push(dependent);
        affected.set(dependent, 'DIRECTLY_AFFECTED');
      }
    });

    const downstream = forwardMap.get(current) ?? [];
    downstream.forEach((child) => {
      if (!seen.has(child)) {
        seen.add(child);
        queue.push(child);
        affected.set(child, 'INDIRECTLY_AFFECTED');
      }
    });
  }

  const affectedNodes = services.filter((service) => affected.has(service.id)).map((service) => service.name);
  const impactLevel = affectedNodes.length > 5 ? 'CRITICAL' : affectedNodes.length > 2 ? 'HIGH' : 'MEDIUM';

  return {
    affectedNodes,
    affectedEdges: connections.filter((edge) => affected.has(edge.source) || affected.has(edge.target)).map((edge) => edge.id),
    impactLevel,
    estimatedConsequences: [
      'Database requests fail',
      'API errors increase',
      'Authentication may fail',
      'Existing sessions may be affected'
    ],
    recommendations: [
      'Add a failover replica',
      'Implement health checks',
      'Scale the dependent service tier'
    ]
  };
}

export function calculateHealthScore(services: Service[], connections: Connection[]) {
  const risk = calculateRisk(services, connections);
  return Math.max(0, Math.min(100, 100 - risk / 2));
}

export function validateInfrastructureJson(input: unknown) {
  if (!input || typeof input !== 'object') return { valid: false, errors: ['Invalid infrastructure structure.'] };
  const structure = input as Record<string, unknown>;
  const services = Array.isArray(structure.services) ? structure.services : [];
  const connections = Array.isArray(structure.connections) ? structure.connections : [];

  const errors: string[] = [];

  if (services.length === 0) errors.push('No services were provided.');
  for (const service of services) {
    if (!service || typeof service !== 'object') {
      errors.push('Each service must be an object.');
      continue;
    }
    const record = service as Record<string, unknown>;
    if (!record.id || !record.name || !record.type) {
      errors.push('Each service requires id, name, and type.');
    }
  }

  for (const connection of connections) {
    if (!connection || typeof connection !== 'object') {
      errors.push('Each connection must be an object.');
      continue;
    }
    const record = connection as Record<string, unknown>;
    if (!record.source || !record.target) {
      errors.push('Each connection requires source and target.');
    }
  }

  return { valid: errors.length === 0, errors };
}

export function analyzeProject(services: Service[], connections: Connection[]) {
  const criticalNodes = findCriticalNodes(services, connections);
  const singlePoints = findSinglePointsOfFailure(services, connections);
  const riskScore = calculateRisk(services, connections);
  const healthScore = calculateHealthScore(services, connections);
  const centrality = calculateCentrality(services, connections).reduce((total, entry) => total + entry.score, 0) / Math.max(services.length, 1);

  return {
    riskScore,
    healthScore: Math.round(healthScore),
    centrality: Math.round(centrality),
    criticalNodes,
    singlePoints,
    dependencyDepth: calculateDependencyDepth(services, connections)
  };
}

export const demoServices = demoServices;
export const demoEdges = demoEdges;

export type { Service, Connection };
