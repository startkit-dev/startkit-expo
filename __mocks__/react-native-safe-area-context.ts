const safeAreaContext = jest.requireActual("react-native-safe-area-context")

module.exports = {
  ...safeAreaContext,
  useSafeAreaInsets: () => ({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })
}
