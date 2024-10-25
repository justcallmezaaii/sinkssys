/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#587588',
        secondary: '#FAEBD7',
        tertiary: '#3d4a5e',
      },
      fontFamily: {
        mono: ['Inconsolata', 'monospace'],
        sans: ['Bungee', 'sans-serif'],
      },
    animation: {
      gradient: 'gradient 5s ease infinite',
    },
    keyframes: {
      gradient: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
    backgroundSize: {
      'size-200': '200% 200%',
    },
  },
},
plugins: [],
}