import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../../constants/colors";

export default function GameStart({ onPickNumber }) {
  // S T A T E
  const [enteredValue, setEnteredValue] = useState("");

  // H A N D L E R S
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);

    if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "cancel", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chooseNumber);
  };

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.InputStyle}
        maxLength={2}
        keyboardType={"number-pad"}
        onChangeText={numberInputHandler}
        value={enteredValue}
      />
      <View style={styles.buttonContainer}>
        <View style={{ width: 100 }}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={{ width: 150 }}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    // Android shadow
    elevation: 15,
    // IOS shadow
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    borderRadius: 16,
  },

  InputStyle: {
    width: 50,
    height: 50,
    color: Colors.yellow,
    borderBottomColor: Colors.yellow,
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
