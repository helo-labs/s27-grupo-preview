/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        navy:    '#0A2749',
        orange:  '#F17519',
        oranhov: '#D85D0C',
        offwh:   '#EAE3DF',
        midblue: '#1D84B5',
        skyblue: '#3FB6F0',
        pure:    '#FCFCFC',
      },
    },
  },
  plugins: [],
};
