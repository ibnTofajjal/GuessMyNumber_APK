import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import GameScreen from "./src/screens/GameScreen";
import GameStart from "./src/screens/GameStart";
import GameEnd from "./src/screens/GameEnd";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  };

  const restartGameHandler = () => {
    setGameIsOver(false);
    setUserNumber(null);
    setRoundsNumber(0);
  };

  let screen = <GameStart onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameEnd
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
