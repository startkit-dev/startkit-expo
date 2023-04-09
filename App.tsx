import { StatusBar } from "expo-status-bar"

import AppLoading from "@/components/AppLoading"
import Navigation from "@/navigation/Navigation"

export default function App() {
  return (
    <AppLoading>
      <Navigation />
      <StatusBar style="auto" />
    </AppLoading>
  )
}
