/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#111827'
        },
        accent: {
          DEFAULT: '#D4B36A',
          light: '#E2C788',
          dark: '#a6863f'
        },
        accent2: {
          DEFAULT: '#594d35',
          light: '#f7e8c8'
        }
      }
    },
  },
  plugins: [],
};