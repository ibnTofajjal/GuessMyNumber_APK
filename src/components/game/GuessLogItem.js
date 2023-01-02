import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}># {roundNumber}</Text>
      <Text style={{ color: "white" }}>Opponent's Guess {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
