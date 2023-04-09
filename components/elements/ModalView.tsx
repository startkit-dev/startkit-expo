import { useNavigation } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { useRootBackgroundColor } from "@/hooks/use-root-background-color"

import { Icon } from "./Icon"
import { Pressable } from "./Pressable"
import { View, type ViewProps } from "./View"

type ModalViewProps = ViewProps & {
  /**
   * A custom root-level view background color for this modal, passed to
   * useRootBackgroundColor.
   */
  backgroundColor?: string
}

export function ModalView({
  backgroundColor,
  children,
  ...props
}: ModalViewProps) {
  useRootBackgroundColor(backgroundColor)
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()

  const onBackPressed = () => {
    navigation.goBack()
  }

  return (
    <View className="flex-1 justify-start ios:items-center">
      {/* Swipe bar for iOS */}
      <View className="z-10 mx-auto my-4 h-1 w-12 rounded-xl bg-slate-900 opacity-70 android:hidden dark:bg-slate-50" />
      {/* Back arrow for Android */}
      <Pressable
        haptics
        className="h-10 w-10 items-center justify-center active:opacity-50 ios:hidden"
        style={{ marginTop: top }}
        onPress={onBackPressed}
      >
        <Icon name="x" size={24} />
      </Pressable>
      <View {...props} className="w-full flex-1">
        {children}
      </View>
    </View>
  )
}
