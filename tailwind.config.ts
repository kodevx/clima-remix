import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        gothamLight: ['GothamLight'],
        gothamMedium: ['GothamMedium'],
        gothamBold: ['GothamBold'],
        lovelo: ['Lovelo']
      }
    },
  },
  plugins: [],
} satisfies Config
