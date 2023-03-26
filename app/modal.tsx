import { useNavigation } from "expo-router"
import colors from "tailwindcss/colors"

import { ModalView, Pressable, Text } from "@/components/elements"

export default function Modal() {
  const navigation = useNavigation()

  return (
    <ModalView
      className="flex-1 items-center justify-center"
      backgroundColor={colors.purple["900"]}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </ModalView>
  )
}
