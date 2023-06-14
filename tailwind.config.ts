import tailwindTypography from "@tailwindcss/typography";

module.exports = {
  theme: {
    extend: {
      //fonts in ~assets/fonts
      fontFamily: {
        sans: ["Fraktion Sans", "sans-serif"],
        mono: ["Fraktion Mono", "monospace"],
      },
    },
  },
  plugins: [tailwindTypography],
  content: [
    `~/components/**/*.{vue,js,ts}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/composables/**/*.{js,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/utils/**/*.{js,ts}`,
    `~/App.{js,ts,vue}`,
    `~/app.{js,ts,vue}`,
    `~/Error.{js,ts,vue}`,
    `~/error.{js,ts,vue}`,
    `~/app.config.{js,ts}`,
  ],
};
