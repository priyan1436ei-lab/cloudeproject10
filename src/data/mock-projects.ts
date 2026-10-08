export const dashboardMetrics = [
  { label: 'Infrastructure Projects', value: '8', trend: '+2%' },
  { label: 'Services', value: '34', trend: '+5%' },
  { label: 'Critical Risks', value: '3', trend: '-1' },
  { label: 'High Risks', value: '7', trend: '+2%' },
  { label: 'Health Score', value: '87', trend: '+3%' }
];

export const projectSummaries = [
  { id: 'demo', name: 'E-Commerce Platform', provider: 'AWS', services: 12, health: 87, cost: '$200' },
  { id: 'erp', name: 'College ERP', provider: 'Azure', services: 9, health: 82, cost: '$150' },
  { id: 'food', name: 'Food Delivery System', provider: 'GCP', services: 11, health: 79, cost: '$180' },
  { id: 'fintech', name: 'FinTech Platform', provider: 'AWS', services: 14, health: 91, cost: '$240' }
];

export const recentAnalyses = [
  { title: 'Redis failover gap', severity: 'High', summary: 'Redis is a single point of failure in the order processing path.' },
  { title: 'Database risk concentration', severity: 'Critical', summary: 'PostgreSQL handles the bulk of write traffic and has no replica.' },
  { title: 'Monitoring drift', severity: 'Medium', summary: 'API latency traces are missing for the edge layer.' }
];
