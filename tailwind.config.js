/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080C12',
        surface: '#0E1420',
        green: { DEFAULT: '#00E5A0' },
        accent: { blue: '#3D9BFF', red: '#FF5E5E' },
        text: '#F0F4FF',
        muted: '#7A8CA8',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
