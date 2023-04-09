import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native"
import { useColorScheme } from "nativewind"

import RootStack from "@/navigation/root/RootStack"

/**
 * This is the main entry point for the app's navigation.
 * We can fork on different logic to show different navigation stacks, etc.
 *
 * For example, if we wanted a flow for before an account was set up, we could
 * fork on that here.
 */
export default function Navigation() {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootStack />
      </NavigationContainer>
    </>
  )
}
