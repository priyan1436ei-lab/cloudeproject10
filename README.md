# CloudLens AI

CloudLens AI is an AI-powered cloud infrastructure analysis platform designed to help engineers understand complex systems in plain English, visualise dependency graphs, assess risk, and simulate failure scenarios before they happen.

## Overview

CloudLens AI converts cloud architecture into an interactive graph with AI-driven explanation, dependency analysis, security review, cost estimation, and architecture recommendations. The platform works in demo mode without requiring live cloud credentials.

## Features

- Interactive architecture map with React Flow
- Dependency analysis and critical path detection
- AI-powered architectural explanation layer with deterministic mock fallback
- Risk and security scoring engine
- What-if failure simulation and impact propagation
- Cost insights and optimization suggestions
- Project dashboard and infrastructure reports
- Firebase-ready data model with demo mode support

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Flow
- Framer Motion
- Firebase (demo mode compatible)

## Getting Started

1. Install dependencies:
   npm install
2. Copy environment variables:
   cp .env.example .env.local
3. Run the app:
   npm run dev
4. Open http://localhost:3000

## Demo

The default application launches in demo mode with a built-in e-commerce cloud topology, including CDN, load balancer, API gateway, auth service, order service, Redis cache, PostgreSQL, and monitoring.

## Testing

- Risk calculation
- Graph traversal
- Critical node detection
- Failure simulation
- JSON validation
- Health scoring

## Deployment

This project is prepared for Vercel or Firebase Hosting. Use the standard Next.js production build workflow.
