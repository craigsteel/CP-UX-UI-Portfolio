/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)']
      },
      dropShadow: {
        '1xl': '0_0px_70px_rgba(0, 0, 0, 1)',
      },

      colors: {
        cardblue: {
          950: '#010b2c',
        },
      }
    },
  },

  plugins: [],
}
