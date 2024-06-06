/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "archivo-black": ["Archivo Black", "sans-serif"],
        "anek-devanagari": ["Anek Devanagari", "sans-serif"],
      },
      backgroundImage: {
        project: "url('/img/background.svg')",
      },
      colors: {
        background: "#222222",
        "soft-white": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
