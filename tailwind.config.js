/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#7856ff",
        primary: "#541cb4",
        SpringGreen: "#00ED64",
        ForestGreen: "#00684A",
        SlateBlue: "#001E2B",
        Sun: "#FFE212",
        Violet: "#5400F8",
        ClearBlue: "#006EFF",
        Azure: "#A6FFEC",
        Purple: "#541cb4",
        Black: "#070708",
        "smoke-darkest": "rgba(0, 0, 0, 0.9)",
        "smoke-darker": "rgba(0, 0, 0, 0.75)",
        "smoke-dark": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-light": "rgba(0, 0, 0, 0.4)",
        "smoke-lighter": "rgba(0, 0, 0, 0.25)",
        "smoke-lightest": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        noto: ["Noto+Serif"],
      },
    },
  },
  plugins: [],
};