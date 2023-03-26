import { useNavigation } from "expo-router"

import { ModalView, Pressable, Text } from "@/components/elements"

export default function Modal() {
  const navigation = useNavigation()

  return (
    <ModalView
      className="flex-1 items-center justify-center"
      backgroundColor="purple"
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </ModalView>
  )
}
