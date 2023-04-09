import { SpaceMono_400Regular } from "@expo-google-fonts/space-mono"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { ReactNode, useCallback, useMemo } from "react"
import { View } from "react-native"

import { logger } from "@/lib/logger"

type Props = {
  children: ReactNode
}

/**
 * Keep the splash screen visible while we fetch resources. We will manually
 * hide the splash screen once we are ready to render the app.
 */
SplashScreen.preventAutoHideAsync().catch((e) => {
  /* reloading the app might trigger some race conditions, ignore them */
  logger.log(
    " (app-loading) SplashScreen.preventAutoHideAsync() error ignored: ",
    e
  )
})

/**
 * A component to prevent hiding the Splash Screen while the app is loading
 * assets (images, fonts, etc.)
 */
export default function AppLoading({ children }: Props) {
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
    logger.error(" (app-loading) Error loading fonts", fontLoadError)
  }

  /**
   * Check if the app is loaded by checking:
   * - if the fonts have loaded
   * - whatever else you need to check
   */
  const isLoadingComplete = useMemo(() => Boolean(fontsLoaded), [fontsLoaded])

  /**
   * Callback to hide the splash screen once the app is ready. If we call this
   * after `isLoadingComplete` is true, then we may see a blank screen while the
   * app is loading its initial state and rendering its first pixels. So
   * instead, we hide the splash screen once we know the root view has already
   * performed layout.
   */
  const onLayoutRootView = useCallback(async () => {
    if (isLoadingComplete) {
      logger.log(
        " (app-loading) onLayoutRootView- ✅ App is loaded and rendered."
      )
      await SplashScreen.hideAsync()
    }
  }, [isLoadingComplete])

  /**
   * If the app is not loaded yet, then we don't want to render anything.
   */
  if (!isLoadingComplete) {
    logger.log(" (app-loading) App loading...")
    return <></>
  }

  return (
    <>
      {children}
      <View onLayout={onLayoutRootView} />
    </>
  )
}
