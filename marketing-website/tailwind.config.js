/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cursor-blue': '#2563eb',
        'cursor-green': '#059669',
        'cursor-gray': '#6b7280',
        'cursor-light-gray': '#f9fafb',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
