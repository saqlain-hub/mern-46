/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5267df",
        red: "#fa5959",
        blue: "#242a45",
        grey: "#9194a2",
        white: "#f7f7f7",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1020px",
        xl: "1020px",
        "2xl": "1020px",
      },
    },
  },
  plugins: [],
};
