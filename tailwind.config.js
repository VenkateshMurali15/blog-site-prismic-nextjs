module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
        "3xl": "2000px",
      },
    },
    colors: {
      primary: {
        shade0: "#A7A5A7",
        shade1: "#757575",
        shade2: "#727997",
      },
      common: {
        white: "#fff",
        black: "#000",
      },
      text: {
        black: "#180D0D",
        white: "#fff",
        shade0: "#A7A5A7",
        shade1: "#757575",
        pink: "#ff5183",
      },
      pink: {
        shade1: "#ff5183",
      },
      brown: {
        shade1: "#B3463D",
      },
      violet: {
        shade1: "#9376BC",
      },
    },
    fontFamily: {
      raleway: ["Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
