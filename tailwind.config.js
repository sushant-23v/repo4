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
          DEFAULT: '#FFB300',
          dark: '#FF8F00',
          light: '#FFC947',
        },
        cream: {
          DEFAULT: '#FAF3E0',
          paper: '#FFF8E1',
        },
      },
    },
  },
  plugins: [],
}
