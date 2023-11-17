/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bk-purple": "#5267df",
        "bk-red": "#fa5959",
        "bk-blue": "#242a45",
        "bk-grey": "#9194a2",
        "bk-white": "#f7f7f7",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
