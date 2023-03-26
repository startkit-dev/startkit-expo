import { useNavigation } from "expo-router"

import { Pressable, Text, View } from "@/components/elements"

export default function Modal() {
  const navigation = useNavigation()

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}
