import { SpaceMono_400Regular, useFonts } from "@expo-google-fonts/space-mono"
import { Slot, SplashScreen } from "expo-router"

import { logger } from "@/lib/logger"

export default function Layout() {
  /**
   * Load the fonts we need for the app.
   */
  const [fontsLoaded, fontLoadError] = useFonts({
    SpaceMono_400Regular
  })

  /**
   * Upon a font loading error, show a message in the console.
   */
  if (fontLoadError) {
    logger.error("Error loading fonts", fontLoadError)
  }

  /**
   * While the fonts are not loaded, show the native splash screen.
   */
  if (!fontsLoaded) {
    return <SplashScreen />
  }

  return <Slot />
}
