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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Professional SaaS Typography Scale
        // H1 — Hero heading: 72px desktop, scales down gracefully
        'display': ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '0.97', letterSpacing: '-0.03em', fontWeight: '800' }],
        // H2 — Section headings: 42–56px
        'heading-1': ['clamp(2rem, 3.8vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        // H3 — Card/sub headings: 22–28px
        'heading-2': ['clamp(1.375rem, 1.8vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        // H4 — Small headings: 18–22px
        'heading-3': ['clamp(1.125rem, 1.2vw, 1.375rem)', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        // Body: 18px desktop, 16px tablet, 15px mobile
        'body-lg': ['clamp(0.9375rem, 1.1vw, 1.125rem)', { lineHeight: '1.7', fontWeight: '400' }],
        // Body small
        'body-sm': ['clamp(0.875rem, 0.9vw, 1rem)', { lineHeight: '1.6', fontWeight: '400' }],
        // Labels: monospace uppercase 12px
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],

        // Legacy aliases — kept so nothing breaks during transition
        'fluid-h1': ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '0.97', letterSpacing: '-0.03em' }],
        'fluid-h2': ['clamp(2rem, 3.8vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'fluid-body': ['clamp(0.9375rem, 1.1vw, 1.125rem)', { lineHeight: '1.7' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Standard highlight gradient — forsythia → saffron always
        'highlight': 'linear-gradient(90deg, #FFC801, #FF9932)',
      },
      maxWidth: {
        'prose-narrow': '44ch',  // ~600px — body paragraphs
        'prose-wide': '52ch',    // ~700px — wider body
      },
    },
  },
  plugins: [],
}
