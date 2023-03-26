/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
