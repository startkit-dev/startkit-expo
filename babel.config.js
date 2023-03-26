module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./"
          }
        }
      ],
      require.resolve("expo-router/babel")
    ],
    presets: ["babel-preset-expo", "nativewind/babel"]
  }
}
