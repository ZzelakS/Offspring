// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // Adjust to your project
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
        // OR if using the alternate:
        // heading: ['"Cormorant Garamond"', 'serif'],
        // body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
