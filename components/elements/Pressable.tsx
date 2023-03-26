import * as Haptics from "expo-haptics"
import { useCallback } from "react"
import {
  Pressable as DefaultPressable,
  type PressableProps as DefaultPressableProps,
  type GestureResponderEvent
} from "react-native"

export type PressableProps = DefaultPressableProps & {
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
 * A Wrapper round the <Pressable> component with some additional properties,
 * such as `haptics`, etc.
 */
export function Pressable({ haptics, onPress, ...props }: PressableProps) {
  const onPressWrapper = useCallback(
    (event: GestureResponderEvent) => {
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

  return <DefaultPressable onPress={onPressWrapper} {...props} />
}
