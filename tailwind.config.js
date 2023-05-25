/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f5c2e7',
          secondary: '#cba6f7',
          accent: '#eba0ac',
          neutral: '#f9e2af',
          'base-100': '#1e1e2e',
          info: '#89b4fa',
          success: '#a6e3a1',
          warning: '#fab387',
          error: '#f38ba8',
        },
      },
    ],
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'mocha',
    }),
    require('tailwindcss-animated'),
    require('daisyui'),
  ],
}
