/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "760px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};

