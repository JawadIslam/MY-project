/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '120': '500px',
        '20': '150px',
        'top':'1000px',
        'nav ':'-10px',



        
        // Add more custom height values as needed
      },
      fontFamily:{
        source:"'Source Code Pro', Poppins",
     
        poppins:"'Poppins', sans-serif",
      },

    },
  },
  plugins: [],
}