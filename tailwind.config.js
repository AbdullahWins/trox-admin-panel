/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gradientColor: "#FF9D80",
      disabledColor: "#797979",
      pureBlackColor: "#000000",

      blackHigh: "#474747",
      blackMid: "#6C6C6C",
      blackLow: "#919191",

      whiteHigh: "#FFFFFF",
      whiteMid: "#F5F5F5",
      whiteLow: "#E8E8E8",

      errorColor: "#FF4646",
      successColor: "#00AE5B",
      warningColor: "#FF6D00",
      infoColor: "#2D8EFF",
      alertColor: "#F4A100",

      primaryMain: "#FC5B2B",
      primaryMainDark: "#CA4922",
      primaryMainDarker: "#652411",
      primaryMainDarkest: "#321209",
      primaryMainLight: "#FD7C55",
      primaryMainLighter: "#FD7C55",
      primaryMainLightest: "#FFEFEB",

      secondaryMain: "#37B6B6",
      secondaryMainDark: "#2C9292",
      secondaryMainDarker: "#216D6D",
      secondaryMainDarkest: "#0B2424",
      secondaryMainLight: "#5FC5C5",
      secondaryMainLighter: "#AFE2E2",
      secondaryMainLightest: "#D7F0F0",
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
