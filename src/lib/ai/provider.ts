export type AIResponse = {
  summary: string;
  criticalServices: string[];
  risks: { title: string; severity: string; explanation: string }[];
  recommendations: string[];
};

export function generateAIResponse(question: string, services: any[], connections: any[]): AIResponse {
  const summary = question.toLowerCase().includes('redis')
    ? 'Redis is a critical cache dependency. If Redis fails, the order path experiences increased database pressure and application latency.'
    : question.toLowerCase().includes('database')
      ? 'The database is the primary persistence layer and a central dependency for authentication and order workflow. Without it, upstream services are at risk of degraded availability.'
      : 'Your application follows a three-layer architecture. The frontend communicates with the API service. The API service communicates with PostgreSQL and Redis. PostgreSQL is the primary persistent data store. Redis is used as a caching layer.';

  const critical = services.filter((service) => service.riskScore > 60).map((service) => service.name);

  return {
    summary,
    criticalServices: critical.length > 0 ? critical : ['API Gateway', 'PostgreSQL'],
    risks: [
      {
        title: 'Database Single Point of Failure',
        severity: 'HIGH',
        explanation: 'PostgreSQL receives traffic from both authentication and order services, making it a high-impact dependency.'
      },
      {
        title: 'Redis dependency concentration',
        severity: 'MEDIUM',
        explanation: 'Redis is heavily used in read-heavy workflows and its unavailability increases database pressure.'
      }
    ],
    recommendations: [
      'Add database failover with read replicas',
      'Introduce cache fallback strategies',
      'Add targeted monitoring and health checks for critical API dependencies'
    ]
  };
}
