/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    backgroundColor: {
      bgPrimary: "#212541",
    },

    keyframes: {
      upDown: {
        "0, 100%": { transform: "translateY(0rem)" },
        "50%": { transform: "translateY(-1rem)" },
      },
    },
    animation: {
      upDownAni: "upDown 2s ease-in-out infinite",
    },
  },
  plugins: [],
};