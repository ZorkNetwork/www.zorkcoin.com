module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-dk': '#160F29',
        'purple': '#5B2D90',
        'purple-lt': '#CDABD1',
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
