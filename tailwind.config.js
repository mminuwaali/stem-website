/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
      },
      padding: {
        "spacing-small": "5%",
        "spacing-normal": "8%",
        "spacing-large": "10%",
        "spacing-x-small": "2%",
        "spacing-x-large": "14%"
      },
      margin: {
        "spacing-small": "5%",
        "spacing-normal": "8%",
        "spacing-large": "10%",
        "spacing-x-small": "2%",
        "spacing-x-large": "14%"
      },
      gridTemplateColumns: {
        'auto-fill-18': 'repeat(auto-fill, minmax(18em, 1fr))',
        'auto-fill-20': 'repeat(auto-fill, minmax(20em, 1fr))',
        'auto-fill-22': 'repeat(auto-fill, minmax(22em, 1fr))',
        'auto-fill-24': 'repeat(auto-fill, minmax(24em, 1fr))',
      },
    }
  },
  plugins: [],
  content: ['./src/**/*.{css,ts,tsx}'],
}