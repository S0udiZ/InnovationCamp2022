/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'norse': ['norse'],
        'bahn': ['bahn'],
      },
    },
  },
  plugins: [],
}
