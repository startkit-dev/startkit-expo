import colors from "tailwindcss/colors"

import { ModalView, Pressable, Text, View } from "@/components/elements"

import type { RootStackScreenProps } from "@/navigation/root/types"

export function SettingsScreen({
  navigation
}: RootStackScreenProps<"Settings">) {
  return (
    <ModalView
      className="flex-1 items-center justify-center p-6"
      backgroundColor={colors.purple["900"]}
    >
      <View className="mx-auto flex-1 justify-start">
        <Text className="text-6xl font-bold">Settings</Text>
        <Text className="mt-2 text-xl">
          Edit `<Text mono>screens/SettingsScreen.tsx</Text>`.
        </Text>

        <Pressable onPress={() => navigation.goBack()} className="mx-auto my-8">
          <Text>Close Modal</Text>
        </Pressable>
      </View>
    </ModalView>
  )
}
