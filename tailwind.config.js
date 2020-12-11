// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // darkMode: 'class',
  purge: ["./_site/**/*.html", "./_site/**/*.js"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      "upper-roman": "upper-roman",
      "lower-roman": "lower-roman",
      "upper-alpha": "upper-alpha",
      "lower-alpha": "lower-alpha",
    },
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          "400": "#cccccc",
          "700": "#22262e",
          "800": "#1e2129",
          "900": "#181b21",
        },
      },
    },
  },
};
