/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        intel: {
          // Intel 2024 Brand Colors - Deep Blue Palette
          50: '#E8F4FF',
          100: '#D1E9FF',
          200: '#A3D3FF',
          300: '#75BDFF',
          400: '#47A7FF',
          500: '#1991FF',  // Intel Primary Blue
          600: '#0066CC',   // Intel Core Blue
          700: '#004C99',   // Intel Deep Blue
          800: '#003366',   // Intel Navy
          900: '#001A33',   // Intel Midnight
          950: '#000D1A',   // Intel Black Blue
          'brand': '#0F2793',  // Intel Brand Primary
        },
        'intel-gradient': {
          'from': '#001A33',    // Intel Midnight
          'via': '#003366',     // Intel Navy  
          'to': '#0066CC',      // Intel Core Blue
          'accent': '#1991FF',  // Intel Primary Blue
        }
      },
      backgroundImage: {
        'intel-primary': 'linear-gradient(135deg, #001A33 0%, #003366 25%, #0066CC 75%, #1991FF 100%)',
        'intel-secondary': 'linear-gradient(45deg, #000D1A 0%, #001A33 50%, #003366 100%)',
        'intel-hero': 'radial-gradient(ellipse at center top, #003366 0%, #001A33 50%, #000D1A 100%)',
        'intel-accent': 'linear-gradient(135deg, #0066CC 0%, #1991FF 100%)',
      },
      animation: {
        'intel-pulse': 'intel-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'intel-glow': 'intel-glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'intel-pulse': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        'intel-glow': {
          '0%': {
            'box-shadow': '0 0 20px rgba(25, 145, 255, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 40px rgba(25, 145, 255, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}