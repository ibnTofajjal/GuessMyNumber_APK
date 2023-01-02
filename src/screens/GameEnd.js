import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import MyTitle from "../components/ui/MyTitle";
import Colors from "../../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameEnd({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/3star.png")}
        style={{
          alignSelf: "center",
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: Colors.white,
          fontSize: 20,
        }}
      >
        *** You have completed the game. Your Phone needed{" "}
        <Text style={styles.textStyle}>{roundsNumber}</Text> rounds guess the
        Number <Text style={styles.textStyle}>{userNumber}</Text> You can now go
        back to the home screen.
      </Text>
      <MyTitle>Game Over</MyTitle>
      <PrimaryButton onPress={onRestart}>Start new Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  textStyle: {
    color: Colors.yellow,
    fontSize: 26,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationColor: Colors.primary,
  },
});

// react native set the text in the bottom of the screen style
// Path: src\screens\GameEnd.js
