/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669',
        secondary: '#10b981',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'segoe': ['Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '6xl': '2.75rem',
      },
    },
  },
  plugins: [],
} 