import { Text, View } from "@/components/elements"

export default function Page() {
  return (
    <View className="flex-1 items-center p-6">
      <View className="mx-auto flex-1 justify-center">
        <Text className="text-6xl font-bold">Hello World</Text>
        <Text className="text-4xl text-gray-800 dark:text-gray-100">
          This is the first page of your app.
        </Text>
        <Text className="mt-2 text-xl">
          Open `<Text mono>app/index.tsx</Text>` to get started.
        </Text>
      </View>
    </View>
  )
}
