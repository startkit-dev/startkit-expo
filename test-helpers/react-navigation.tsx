/**
 * Stubs
 */
export const navigation = { navigate: jest.fn() } as never
export const route = { params: {} } as never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderScreen(Screen: (props: any) => JSX.Element) {
  const props = { navigation, route }

  return <Screen {...props} />
}
