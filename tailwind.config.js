module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-dk': '#0D193F',
        'purple': '#4E90FF',
        'purple-lt': '#28CAF7',
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
