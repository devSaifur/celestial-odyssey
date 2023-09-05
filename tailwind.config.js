/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "dark-blue": "#020D17",
      "light-blue": "#D0D6F9",
    },
    fontFamily: {
      sans: ["Barlow Condensed", "sans-serif"],
      serif: ["Bellefair", "serif"],
    },
    fontSize: {
      "heading-xl": "9.375rem",
      "heading-l": "6.25rem",
      "heading-m": "3.5rem",
      "heading-s": "2rem",
      "heading-xs": "1.75rem", //4.75 spacing
      "sub-heading-m": "1.75rem",
      "sub-heading-s": "0.875rem", //2.35 spacing
      "text-nav": "1rem", //2.7 spacing
      "text-body": "1.125rem",
    },
    extend: {},
  },
  plugins: [],
};
