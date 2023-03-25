import * as SplashScreen from "expo-splash-screen"
import { ReactNode, useCallback, useMemo } from "react"
import { View } from "react-native"

import { logger } from "@/lib/logger"

import { usePreloadFonts } from "./use-preload-fonts"

type Props = {
  children: ReactNode
}

/**
 * Keep the splash screen visible while we fetch resources. We will manually
 * hide the splash screen once we are ready to render the app.
 */
SplashScreen.preventAutoHideAsync().catch((e) => {
  /* reloading the app might trigger some race conditions, ignore them */
  logger.log("(PreloadApp) SplashScreen.preventAutoHideAsync() error: ", e)
})

/**
 * A component to prevent hiding the Splash Screen while the app is loading
 * assets (images, fonts, etc.)
 */
export function PreloadApp({ children }: Props) {
  const { fontsLoaded } = usePreloadFonts()

  /**
   * Check if the app is loaded by checking:
   * - if the fonts have loaded
   * - whatever else you need to check
   */
  const isLoadingComplete = useMemo<boolean>(() => fontsLoaded, [fontsLoaded])

  /**
   * Callback to hide the splash screen once the app is ready. If we call this
   * after `isLoadingComplete` is true, then we may see a blank screen while the
   * app is loading its initial state and rendering its first pixels. So
   * instead, we hide the splash screen once we know the root view has already
   * performed layout.
   */
  const onLayoutRootView = useCallback(async () => {
    if (isLoadingComplete) {
      logger.log("  > ✅ App is loaded and rendered.")
      await SplashScreen.hideAsync()
    }
  }, [isLoadingComplete])

  /**
   * If the app is not loaded yet, then we don't want to render anything.
   */
  if (!isLoadingComplete) {
    logger.log("  > App loading...")
    return <></>
  }

  return (
    <>
      {children}
      <View onLayout={onLayoutRootView} />
    </>
  )
}