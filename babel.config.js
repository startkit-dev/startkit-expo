module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      ["module:react-native-dotenv"],
      [
        "module-resolver",
        {
          alias: {
            "@": "./"
          }
        }
      ]
    ],
    presets: ["babel-preset-expo", "nativewind/babel"]
  }
}
