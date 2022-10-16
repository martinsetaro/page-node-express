/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug"],
  theme: {
    extend: {
      height: {
        '40r': '40rem',
        '30r': '30rem',
      }
    },
  },
  plugins: [],
}
