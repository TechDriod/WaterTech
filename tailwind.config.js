/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        water: {
          50:  '#eef9ff',
          100: '#d8f1ff',
          200: '#b9e8ff',
          300: '#89daff',
          400: '#52c3ff',
          500: '#2aa4ff',
          600: '#1284f5',
          700: '#0b6de1',
          800: '#1059b6',
          900: '#134e8f',
          950: '#0f3060',
        },
        teal: {
          50:  '#effefa',
          100: '#c8fdf0',
          200: '#91f8e1',
          300: '#53eccd',
          400: '#20d4b5',
          500: '#07b99d',
          600: '#029482',
          700: '#04776a',
          800: '#085f56',
          900: '#0a4e47',
          950: '#042f2b',
        },
        ocean: {
          dark:  '#0a192f',
          mid:   '#112240',
          light: '#1e3a5f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'slide-in-left':'slideInLeft 0.6s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(42, 164, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(42, 164, 255, 0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'water-gradient':    'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)',
        'hero-gradient':     'linear-gradient(135deg, #0f3060 0%, #0b6de1 50%, #07b99d 100%)',
        'card-gradient':     'linear-gradient(135deg, rgba(17,34,64,0.8) 0%, rgba(10,25,47,0.9) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(42, 164, 255, 0.4)',
        'glow-teal': '0 0 30px rgba(7, 185, 157, 0.4)',
        'glass':     '0 8px 32px rgba(0, 0, 0, 0.37)',
        'card':      '0 4px 24px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
