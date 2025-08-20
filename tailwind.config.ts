import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0B0B0C', paper: '#F7F7F7' },
      container: {
        center: true,
        padding: '1rem',
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1320px' },
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;


