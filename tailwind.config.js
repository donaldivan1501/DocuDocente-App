/** @type {import('tailwindcss').Config} */
module.exports = {
  // Escanear componentes y pantallas dentro de /src
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0284c7',
          900: '#0c4a6e',
        },
        academic: {
          card: '#ffffff',
          background: '#f8fafc',
          text: '#0f172a',
        }
      },
    },
  },
  plugins: [],
};