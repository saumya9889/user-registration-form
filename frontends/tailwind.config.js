/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        // backgroundImage: {
        //   'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        //   'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        //   'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        //   'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        // },
        // colors:{
        //   'gradient-start': '#007991', 
        //   'gradient-end': '#78ffd6',
        // },
        width:{
          w98:"98%"
        }
         
      },
    },
    plugins: [],
  }
  
  