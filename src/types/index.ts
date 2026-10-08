import { type Service, type Connection } from '@/lib/analysis/graph';

export type ProjectSummary = {
  id: string;
  name: string;
  provider: string;
  services: number;
  health: number;
  cost: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  trend: string;
};

export type RecentAnalysis = {
  title: string;
  severity: string;
  summary: string;
};
