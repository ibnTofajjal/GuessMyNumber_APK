import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, View } from "react-native";
import GameStart from "./src/screens/GameStart";

export default function App() {
  return (
    <LinearGradient colors={["#674ea7", "#dfcfbe"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        style={styles.container}
        imageStyle={{ opacity: 0.3 }}
      >
        <GameStart />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
