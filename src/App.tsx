import { StatusBar } from "expo-status-bar"

import { PreloadApp } from "@/components/PreloadApp"
import { HomeScreen } from "@/screens/HomeScreen"

export default function App() {
  return (
    <>
      <PreloadApp>
        <HomeScreen />
      </PreloadApp>
      <StatusBar style="auto" />
    </>
  )
}
