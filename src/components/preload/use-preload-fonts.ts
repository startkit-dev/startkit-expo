import { SpaceMono_400Regular } from "@expo-google-fonts/space-mono"
import { useFonts } from "expo-font"

import { logger } from "@/lib/logger"

/**
 * Preload all the fonts for our app
 */
export function usePreloadFonts() {
  /**
   * Load the fonts we need for the app.
   */
  const [fontsLoaded, fontLoadError] = useFonts({
    SpaceMono_400Regular
  })

  if (fontLoadError) {
    logger.error("Error loading fonts", fontLoadError)
  }

  return {
    fontsLoaded,
    fontLoadError
  }
}
