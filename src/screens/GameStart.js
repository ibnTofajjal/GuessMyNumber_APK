import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function GameStart() {
  return (
    <View style={styles.InputContainer}>
      <TextInput placeholder="Number" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#72063c",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    // Android shadow
    elevation: 15,
    // IOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    borderRadius: 16,
  },
});
