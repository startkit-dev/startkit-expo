import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable } from "react-native"

import { Icon } from "@/components/elements"
import { HomeScreen } from "@/screens/HomeScreen"
import { SettingsScreen } from "@/screens/SettingsScreen"

import type { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          presentation: "modal",
          headerShown: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="x" size={24} />
            </Pressable>
          )
        }}
      />
    </Stack.Navigator>
  )
}
