const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sofia-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
