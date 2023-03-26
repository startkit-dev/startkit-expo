/** @type {import('jest').Config} */
const config = {
  preset: "jest-expo",

  /**
   * Coverage
   */
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**"
  ],

  /**
   * Aliases
   */
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },

  testPathIgnorePatterns: ["/node_modules/"]
}

module.exports = config
