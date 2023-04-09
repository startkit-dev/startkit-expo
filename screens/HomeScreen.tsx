import { Pressable, Text, View } from "@/components/elements"

import type { RootStackScreenProps } from "@/navigation/root/types"

export function HomeScreen({ navigation }: RootStackScreenProps<"Home">) {
  return (
    <>
      <View className="flex-1 items-center p-6">
        <View className="mx-auto flex-1 justify-center">
          <Text className="text-6xl font-bold">Hello World</Text>
          <Text className="text-4xl text-gray-800 dark:text-gray-100">
            This is the first page of your app.
          </Text>
          <Text className="mt-2 text-xl">
            Open `<Text mono>screens/HomeScreen.tsx</Text>` to get started.
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Settings")}
            className="mx-auto my-8"
          >
            <Text>Open Modal</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
