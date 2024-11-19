/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hides scrollbar */
          'scrollbar-width': 'none', // For Firefox
          '-ms-overflow-style': 'none', // For Internet Explorer
          '&::-webkit-scrollbar': {
            display: 'none', // For Chrome, Safari, and Edge
          },
        },
        '.scrollbar-default': {
          /* Shows scrollbar */
          'scrollbar-width': 'auto', // For Firefox
          '-ms-overflow-style': 'auto', // For Internet Explorer
          '&::-webkit-scrollbar': {
            display: 'block', // For Chrome, Safari, and Edge
          },
        },
      });
    },
  ],
};
