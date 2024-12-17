/** @type {import('tailwindcss').Config}*/
const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  plugins: [],

  darkMode: 'class',

  theme: {
    fontFamily: {
      sans: [
        'Fira Mono',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Open Sans"',
        '"Helvetica Neue"',
        'sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      mono: ['Fira Mono', 'JetBrainsMono', 'monospace', ...defaultTheme.fontFamily.mono],
    },

    extend: {
      colors: {
        // indigo
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },

        light: {
          bg0: '#ffffff',
          bg1: '#f8f9fa',
          bg2: '#e9ecef',
          accent: '#3b82f6',
          heading: '#1e293b',
          text: '#334155',
          muted: '#64748b',
          border: '#e2e8f0',
          card: '#ffffff',
          header: 'rgba(255, 255, 255, 0.8)',
        },
        dark: {
          bg0: '#0f172a',
          bg1: '#1e293b',
          bg2: '#334155',
          accent: '#60a5fa',
          heading: '#f8fafc',
          text: '#cbd5e1',
          muted: '#94a3b8',
          border: '#334155',
          card: '#1e293b',
          header: 'rgba(15, 23, 42, 0.8)',
        },
      },
      spacing: {
        columnWidth: '60rem',
        columnMarginTop: '4rem',
      },
    }
  }
};

module.exports = config;
