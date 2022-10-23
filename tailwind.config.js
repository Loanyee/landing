/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "568px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
=======
  content: ['./pages/**/*.{js,jsx,ts,tsx}',
'./components/**/*.{js,jsx, ts, tsx}',
'./public/image/**/*.{js,jsx, ts, tsx}'],
  theme: {
    extend: {
      gridTemplateColumns:{
        '13': 'repeat(13, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
>>>>>>> main-temp
