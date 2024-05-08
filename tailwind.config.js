/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        large: "140px",
      },
      colors: {
        darkgreen: "rgb(11 32 22);",
        popuptext: "rgb(12, 34, 23)",
        popupbg: "rgb(242, 248, 245)",
        bottombg: "rgb(6, 207, 103)",
        aboutbg: "#22302D",
      },
    },
  },
  plugins: [],
};
