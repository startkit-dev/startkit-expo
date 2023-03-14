import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import HomeScreen from "@/screens/HomeScreen";

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
