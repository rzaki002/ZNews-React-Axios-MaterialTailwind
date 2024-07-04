// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }const withMT = require("@material-tailwind/react/utils/withMT");
 
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Mengaktifkan dark mode berdasarkan kelas
  theme: {
    extend: {
      colors: {
        dark: {
          slate: '#2F4F4F', // Warna latar belakang slate untuk mode gelap
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Variants untuk latar belakang gelap
    },
  },
  plugins: [],
});
