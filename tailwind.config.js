/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  safelist: [
    'text-orange-700',
    'text-orange-800',
    'text-orange-900',
    'border-orange-700',
    'border-orange-800',
    'ring-orange-800',
    'bg-white/95',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
