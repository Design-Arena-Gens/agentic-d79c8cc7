import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
        'radial': 'radial-gradient(1250px circle at 50% 0%, rgba(56,189,248,.15), rgba(67,56,202,.05) 40%, transparent 70%)',
        'glow': 'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,.35), rgba(168,85,247,.35), rgba(59,130,246,.35), rgba(99,102,241,.35), rgba(56,189,248,.35))'
      }
    },
  },
  plugins: [],
}

export default config
