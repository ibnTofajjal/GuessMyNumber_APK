import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyTitle from "../components/ui/MyTitle";
import NumberContainer from "../components/game/NumberContainer";

// generate a random number between 1 and 99
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <MyTitle>Opponent's Guess</MyTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
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
