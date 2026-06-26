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
        // Primary heading: #F4F6F4
        'arctic': '#F4F6F4',
        // Secondary heading: #D9E8E2
        'mystic': '#D9E8E2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Space Grotesk', 'monospace'],
      },
      fontSize: {
        // Professional SaaS Typography Scale
        // H1 — Hero heading: 80–96px desktop, 64px tablet, 44–48px mobile
        'display': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-2px', fontWeight: '800' }],
        // H2 — Section headings: 48–56px desktop, 40px tablet, 32px mobile
        'heading-1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-1px', fontWeight: '800' }],
        // H3 — Subsection headings: 28–34px
        'heading-2': ['clamp(1.75rem, 2.5vw, 2.125rem)', { lineHeight: '1.3', letterSpacing: '-0.5px', fontWeight: '700' }],
        // H4 — Card Titles: 22–26px
        'heading-3': ['clamp(1.375rem, 2vw, 1.625rem)', { lineHeight: '1.35', letterSpacing: '-0.3px', fontWeight: '700' }],
        // Body: 18px desktop, 16px tablet, 15px mobile
        'body-lg': ['clamp(0.9375rem, 1.1vw, 1.125rem)', { lineHeight: '1.7', fontWeight: '400' }],
        // Body small
        'body-sm': ['clamp(0.875rem, 0.9vw, 1rem)', { lineHeight: '1.6', fontWeight: '400' }],
        // Labels: 12-14px, 2px spacing
        'label': ['clamp(0.75rem, 1vw, 0.875rem)', { lineHeight: '1', letterSpacing: '2px', fontWeight: '600' }],

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
