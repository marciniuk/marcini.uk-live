// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // darkMode: 'class',
  content: ["./_site/**/*.html", "./_site/**/*.js"],
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
          "700": "#161E31",
          "800": "#101727",
          "900": "#090F1B",
        },
      },
    },
  },
};
