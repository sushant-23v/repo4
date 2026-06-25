export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#4E342E',
          dark: '#3E2723',
          light: '#6D4C41',
        },
        amber: {
          warm: '#FFB300',
          dark: '#FF8F00',
          light: '#FFC947',
        },
        cream: {
          DEFAULT: '#FAF3E0',
          paper: '#FFF8E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        warm: '14px',
      },
      boxShadow: {
        warm: '0 10px 30px rgba(78,52,46,0.15)',
        'warm-sm': '0 4px 14px rgba(78,52,46,0.10)',
      },
    },
  },
  plugins: [],
}
