/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["SpaceMono_400Regular"]
      }
    }
  },
  plugins: [],
  presets: [require("nativewind/tailwind")]
}
