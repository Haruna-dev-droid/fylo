/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        VeryDarkBlue: "hsl(243, 87%, 12%)",
        DesaturatedBlue: "hsl(238, 22%, 44%)",
        BrightBlue,
      },
    },
  },
  plugins: [],
};
