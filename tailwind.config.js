/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#77DD77",
        "accent-green": "#9AEF9A",
        "text-grey": "#ABABAB",
        "text-grey-2": "#BDBDBD",
        "login-grey": "#F6F6F6",
        "border-grey": "#E8E8E8",
      },
    },
  },
  plugins: [],
};
