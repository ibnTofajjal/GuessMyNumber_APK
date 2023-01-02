import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MyTitle from "../components/ui/MyTitle";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../../constants/Colors";
import GuessLogItem from "../components/game/GuessLogItem";

// generate a random number between 1 and 99
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGeuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = React.useState(initialGeuess);
  const [roundsNumber, setRoundsNumber] = React.useState([initialGeuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(roundsNumber.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const nextRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextRndNumber);
    setRoundsNumber((curRounds) => [nextRndNumber, ...curRounds]);
  };

  const getRoundsListLength = roundsNumber.length;

  return (
    <View style={styles.screen}>
      <MyTitle>Opponent's Guess</MyTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text
          style={{
            color: Colors.primary,
            textAlign: "center",
            marginBottom: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Heigher Or Lower?
        </Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            Lower ▼
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            ▲ Heigher
          </PrimaryButton>
        </View>
      </Card>
      <View>
        {/* {roundsNumber.map((round) => (
          <Text key={round}>{round}</Text>
        ))} */}
        <FlatList
          data={roundsNumber}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={getRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
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
