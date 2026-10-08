export function estimateCost(services: Array<{ type: string; riskScore?: number }>) {
  const compute = 82;
  const database = 64;
  const storage = 21;
  const networking = 18;
  const cache = 15;
  const total = compute + database + storage + networking + cache;

  return {
    compute,
    database,
    storage,
    networking,
    cache,
    total,
    optimization: 32
  };
}
