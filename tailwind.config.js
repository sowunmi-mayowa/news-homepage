/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        softorange: 'hsl(35, 77%, 62%)',
        softred: 'hsl(5, 85%, 63%)',
        offwhite: 'hsl(36, 100%, 99%)',
        grayishblue: 'hsl(233, 8%, 79%)',
        Darkgrayishblue: 'hsl(236, 13%, 42%)',
        Verydarkblue: 'hsl(240, 100%, 5%)'
      },
      fontFamily: {
        myFont: ['Inter', 'montserrat']
      }
    },
  },
  plugins: [],
}
