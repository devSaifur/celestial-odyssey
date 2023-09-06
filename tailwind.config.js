/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        'dark-blue': '#020D17',
        'light-blue': '#D0D6F9',
      },
      backgroundColor: {
        'bg-light-blue': '#D0D6F9',
        'bg-dark-blue': '#020D17',
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        serif: ['Bellefair', 'serif'],
      },
      fontSize: {
        'heading-xl': '9.375rem',
        'heading-l': '6.25rem',
        'heading-m': '3.5rem',
        'heading-s': '2rem',
        'heading-xs': '1.75rem',
        'sub-heading-m': '1.75rem',
        'button-l': '1.125rem',
        'sub-heading-s': '1rem',
        'text-nav': '1rem',
        'text-body': '0.938rem',
      },
      backgroundImage: {
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'destination-mobile':
          "url('./assets/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('./assets/destination/background-destination-tablet.jpg')",
        'destination-desktop':
          "url('./assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'technology-mobile':
          "url('./assets/technology/background-technology-mobile.jpg')",
        'technology-tablet':
          "url('./assets/technology/background-technology-tablet.jpg')",
        'technology-desktop':
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
