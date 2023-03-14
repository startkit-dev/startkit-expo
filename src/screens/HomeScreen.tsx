import { View } from "react-native"

import { Text } from "@/components/elements"

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-2 dark:bg-gray-900 ">
      <Text className="text-xl">
        Open up <Text mono>src/screens/HomeScreen.tsx</Text> to start working on
        your app!
      </Text>
    </View>
  )
}
