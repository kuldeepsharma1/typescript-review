/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], 
        rubikitalic: ['RubikItalic', 'sans-serif'], 
      },
      backgroundImage: {
        'logo': "url('./assets/ratex.jpeg')",
        'background': "url('./assets/background.jpeg')",
      }, // Close the backgroundImage object
    }, // Close the extend object
  },
  plugins: [],
}
