/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        ocean: '#0e7490',
        mint: '#35d0ba',
        amber: '#f5b84b'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(53, 208, 186, 0.15)'
      }
    }
  },
  plugins: []
}