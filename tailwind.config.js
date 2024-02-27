/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        dropCustom: '-4px 2px 2.1px 2px #B3ACFF',
      },
      colors: {
        main: '#444961',
        secondary: '#2D3142',
        mainText: '#EAE8FF',
        secondaryText: '#D4D0FF',
        button: '#D4D0FF',
        button_sh: '#B3ACFF',
        inputText: '#444961',
        shadowInner: '#5B5B5B',
      },
      fontFamily: {
        Lemon: ['Lemon', 'Regular'],
        Itim: ['Itim', 'Regular'],
      },
    },
  },
  plugins: [],
};
