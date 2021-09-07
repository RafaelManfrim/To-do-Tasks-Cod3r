module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "img-tasks": "url('/img/background.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
