import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyTitle from "../components/MyTitle";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <MyTitle>Opponent's Guess</MyTitle>
      <View>
        <Text>Heigher Or Lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    flex: 1,
    padding: 24,
  },
});
