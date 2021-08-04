module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Aeonik', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        'supergraphic': 'supergraphic 25s ease-in-out infinite',
      },
      keyframes: {
        supergraphic: {
          '0%, 100%': { transform: 'translateY(3%) translateX(3%) scale(1.125) rotate(-2deg)' },
          '50%': { transform: 'translateX(-3%) scale(1.2)' },
        }
      },
      colors: {
        'black': '#000',
        'white': '#FFF',
        'off-white': {
          DEFAULT: '#F8F3ED',
          dark: '#E1D7CD'
        },
        'purple': {
          DEFAULT: '#965578',
          dark: '#3C3746'
        },
        'blue': {
          DEFAULT: '#C8C8D2',
          dark: '#9696A0'
        },
        'soft-black': {
          DEFAULT: '#373232',
          dark: '#141414',
        },
        'yellow': {
          DEFAULT: '#FFAF2D',
          dark: '#966E46'
        },
        'orange': {
          DEFAULT: '#F07837',
          dark: '#A04B32',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}