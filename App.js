import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/colors";
import GameScreen from "./src/screens/GameScreen";
import GameStart from "./src/screens/GameStart";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <GameStart onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        style={styles.container}
        imageStyle={{ opacity: 0.3 }}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
