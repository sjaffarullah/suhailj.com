/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding custom utilities for `scrollbar-hide`
      scrollbarHide: {
        // Custom class for hiding scrollbars
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari */
        },
      },
    },
  },
  plugins: [
    // Adding custom plugin for scrollbars
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari */
        },
      });
    },
  ],
};
