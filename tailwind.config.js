/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        dark: '#1D1F23',
        black: {
          1: '#000000',
          2: 'rgba(0, 0, 0, 0.2)',
          3: '#212121'
        },
        green: {
          1: '#6CEEC7',
        },
        gray: {
          1: '#E0E0E0',
          2: '#5E5E5E'
        },
        red: {
          1: '#DA5050'
        }
      }
    }
  },
}

