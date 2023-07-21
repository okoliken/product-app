/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        productDarkPink:"#AD1FEA",
        productDarkBlue:"#4661E6",
        productDarkPurple:"#3A4374",
        productSoftDark:"#373F68",
        productSoftGray:"#F2F4FF",
        productSofterGray:"#F7F8FD",
        productDarkGray:"#647196",
        productOrange:"#F49F85",
        productBlue:"#62BCFA",
        productRed:"#D73737",
      }
    }
  },
  plugins: []
};