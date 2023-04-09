const actualNav = jest.requireActual("@react-navigation/native")

module.exports = {
  ...actualNav,
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn()
  })
}
