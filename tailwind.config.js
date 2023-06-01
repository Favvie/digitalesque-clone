/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['NeuePowerTrialUltra', 'sans-serif'],
        body: ['KollektifBold', 'sans-serif']
        
      },
      gridTemplateColumns: {
        'custom': '1fr 0.5fr 0.5fr 1fr 0.75fr',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'vision': "url('/VISION.webp')",
        'purpose': "url('/PURPOSE.webp')",
        'mission': "url('/MISSION.webp')",
        'art1': "url('/art1.webp')",
        'art2': "url('/art2.webp')",
        'art3': "url('/art3.webp')",
        'art4': "url('/art4.webp')",
        'da': "url('/da.webp')",
        'ds': "url('/ds.webp')",
        'culture': "url('/culture.webp')",
        'pe': "url('/pe.webp')"

      },
    },
  },
   plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.grid-cols-custom': {
          'grid-template-columns': 'var(--tw-grid-cols-custom)',
        },
      }, ['responsive']);
    },
  ],
}
