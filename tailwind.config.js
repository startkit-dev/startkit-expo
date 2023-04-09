/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
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
