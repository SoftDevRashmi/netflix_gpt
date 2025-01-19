/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#110e0d",
        bgSignIn: "#15120d",
        btnRed: "#bb1519",
      },
    },
  },
  plugins: [],
};
