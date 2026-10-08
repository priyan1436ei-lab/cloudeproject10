import { type Service } from '@/data/mock-projects';

export type SecurityFinding = {
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  description: string;
};

export function runSecurityAnalysis(services: Service[]): SecurityFinding[] {
  const publicExposure = services.filter((service) => ['web', 'gateway', 'database'].includes(service.type)).length;

  return [
    {
      title: 'Database exposed publicly',
      severity: 'CRITICAL',
      description: 'The database layer is connected to multiple critical services without explicit private network isolation.'
    },
    {
      title: 'API authentication not detected',
      severity: 'HIGH',
      description: 'Authentication requirements for service-to-service requests are not observable in the current architecture.'
    },
    {
      title: 'Monitoring coverage incomplete',
      severity: 'MEDIUM',
      description: 'Monitoring is enabled only for a subset of the architecture and should expand to include cache and queue dependencies.'
    },
    {
      title: 'Logging configuration available',
      severity: 'MEDIUM',
      description: 'Logging is present but should be combined with retention, audit, and alert policies.'
    }
  ].slice(0, Math.min(4, publicExposure > 0 ? 4 : 3));
}
