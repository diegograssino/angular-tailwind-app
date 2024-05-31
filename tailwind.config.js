/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "280px", // 280x653
      sm: "480px", // 480x800
      md: "768px", // 768x1024
      lg: "1024px", // 1024x768
      xl: "1440px", // 1440x900
    },
    colors: {
      primary: {
        DEFAULT: "#2E3440",
      },
      secondary: {
        DEFAULT: "#ECEFF4",
      },
      tertiary: {
        DEFAULT: "#8FBCBB",
      },
      quaternary: {
        DEFAULT: "#88C0D0",
      },
      quinary: {
        DEFAULT: "#81A1C1",
      },
      senary: {
        DEFAULT: "#5E81AC",
      },
      danger: {
        DEFAULT: "#BF616A",
      },
      alert: {
        DEFAULT: "#EBCB8B",
      },
      success: {
        DEFAULT: "#A3BE8C",
      },
      info: {
        DEFAULT: "#B48EAD",
      },
    },
    extend: {
      fontFamily: {
        primary: ['"PT Sans"', "sans-serif"],
        secondary: ['"Nunito"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
