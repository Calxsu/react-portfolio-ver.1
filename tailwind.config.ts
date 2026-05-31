import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent-2) / <alpha-value>)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        glow: '0 0 40px rgba(110, 231, 255, 0.25)',
        soft: '0 12px 40px rgba(8, 12, 23, 0.35)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(60% 60% at 50% 0%, rgba(110,231,255,0.18), transparent 60%), radial-gradient(40% 40% at 100% 20%, rgba(243,179,107,0.18), transparent 60%)',
        'surface-gradient': 'linear-gradient(135deg, rgba(110,231,255,0.08), rgba(15,23,42,0.6))'
      }
    }
  },
  plugins: []
} satisfies Config
