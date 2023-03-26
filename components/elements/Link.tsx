import * as Haptics from "expo-haptics"
import { Link as DefaultLink } from "expo-router"
import { useCallback } from "react"

import type { LinkProps as DefaultLinkProps } from "expo-router/build/link/Link"
import type { MouseEvent } from "react"
import type { GestureResponderEvent } from "react-native"

export type LinkProps = DefaultLinkProps & {
  /**
   * The haptics to add to an onPress event. Passing `true` will default to
   * `light`.
   *
   * Haptic settings can be found here:
   * https://docs.expo.dev/versions/latest/sdk/haptics/#hapticsimpactasyncstyle
   */
  haptics?:
    | false
    | true
    | "light"
    | "medium"
    | "heavy"
    | "success"
    | "warning"
    | "error"
    | "selection"
}

/**
 * A Wrapper round the <Link> component with some additional properties,
 * such as `haptics`, etc.
 */
export function Link({ haptics, onPress, ...props }: LinkProps) {
  const onPressWrapper = useCallback(
    (
      event:
        | GestureResponderEvent
        | MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
    ) => {
      switch (haptics) {
        case "success":
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
          break
        case "warning":
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
          break
        case "error":
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
          break
        case "selection":
          Haptics.selectionAsync()
          break
        case "medium":
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          break
        case "heavy":
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          break
        case "light":
        case true:
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          break
      }

      onPress?.(event)
    },
    [haptics, onPress]
  )

  return (
    <DefaultLink
      onPress={onPressWrapper}
      className="text-black dark:text-white"
      {...props}
    />
  )
}
