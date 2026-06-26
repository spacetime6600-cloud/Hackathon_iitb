/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oceanic-noir': '#040910',
        'oceanic-mid': '#172B36',
        'nocturnal': '#114C5A',
        'forsythia': '#FFC801',
        'saffron': '#FF9932',
        'arctic': '#F1F6F4',
        'mystic': '#D9E8E2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-h1': 'clamp(3rem, 6vw, 5.75rem)', /* 48px to 92px */
        'fluid-h2': 'clamp(2rem, 4vw, 3.5rem)', /* 32px to 56px */
        'fluid-body': 'clamp(1rem, 1.2vw, 1.25rem)', /* 16px to 20px */
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
