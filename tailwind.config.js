module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#7FA4C6',
        secondary: '#F9B004',
        modal: 'rgba(0,0,0,0.3)',
        modalText: '#2B4660',
      },
      gridTemplateColumns: {
        item: '.6fr 2fr 1.25fr',
        'res-item': '.75fr 2fr',
      },
      padding: {
        icon: '1px 6px',
      },
      spacing: {
        70: '70px',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1100px',
        },
        '.container-sm': {
          maxWidth: '800px',
        },
      });
    },
  ],
};
