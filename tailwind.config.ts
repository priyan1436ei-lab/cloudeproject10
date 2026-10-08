import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020817'
        },
        cyan: {
          500: '#22d3ee'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 24px 80px rgba(14,165,233,0.2)'
      }
    }
  },
  plugins: []
};

export default config;
