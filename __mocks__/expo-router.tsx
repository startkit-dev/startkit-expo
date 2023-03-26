import type { ReactNode } from "react"

const expoRouter = jest.requireActual("expo-router")

function Link({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function useNavigation() {
  return {
    navigate: jest.fn(),
    dispatch: jest.fn()
  }
}

module.exports = {
  ...expoRouter,
  Link,
  useNavigation
}
