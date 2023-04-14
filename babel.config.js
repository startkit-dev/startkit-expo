module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      ["inline-dotenv"],
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
