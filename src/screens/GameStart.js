import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function GameStart() {
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.InputStyle}
        maxLength={2}
        keyboardType={"number-pad"}
      />
      <View style={styles.buttonContainer}>
        <View style={{ width: 100 }}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={{ width: 150 }}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#674ea7",
    alignItems: "center",
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

  InputStyle: {
    width: 50,
    height: 50,
    color: "yellow",
    borderBottomColor: "yellow",
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
