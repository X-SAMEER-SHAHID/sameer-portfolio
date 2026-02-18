/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050014',
        'background-alt': '#060019',
        accent: '#b983ff',
      },
      fontFamily: {
        sans: ['Preahvihear', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '18px',
        '2xl': '26px',
      },
      boxShadow: {
        'glow-card': '0 20px 60px rgba(2, 0, 20, 0.95)',
      },
    },
  },
  plugins: [],
}
