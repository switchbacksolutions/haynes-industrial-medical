import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0f4f9',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#7d9ec8',
          400: '#4d77ae',
          500: '#2e5994',
          600: '#1a3f7a',
          700: '#122d5e',
          800: '#0d1f42',
          900: '#081428',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.brand.600'),
              '&:hover': {
                color: theme('colors.brand.800'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.brand.700'),
              backgroundColor: theme('colors.brand.50'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.brand.400'),
              '&:hover': {
                color: theme('colors.brand.200'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
