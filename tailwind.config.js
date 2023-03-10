/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'coding': "url('/src/img/Rectangle 1.png')"
      },
      fontFamily:{
        'inter' : 'kavoon, cursive'
      },
      fontSize:{
        'etitle' : ['48px', '160%'],
        'titel' : ['28px', 'auto'],
        'tex' : ['16px', '160%']
      },
      colors: {
        pigma1 :'#5268F4',
        trans : 'rgba(20, 20, 20, 0.7)',
        garis : 'rgba(20, 20, 20, 0.25)',
        hitam : '#141414'
      },
      height: {
        '81' : '21rem'
      },
      width : {
        '487px' : '487px'
      }
    },
  },
  plugins: [],
}
