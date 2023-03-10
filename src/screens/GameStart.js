import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import MyTitle from "../components/ui/MyTitle";
import Card from "../components/ui/Card";

export default function GameStart({ onPickNumber }) {
  // S T A T E
  const [enteredValue, setEnteredValue] = useState("");
  const { height, width } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 80;
  return (
    <View style={[styles.rootScreen, { marginTop: marginTopDistance }]}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{
          height: 110,
          width: 110,
          alignSelf: "center",
          marginBottom: 50,
          resizeMode: "contain",
        }}
      />
      <MyTitle>Guess My Number</MyTitle>
      <View style={styles.InputContainer}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Select a Number
        </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 80,
    padding: 24,
    textAlign: "center",
  },
  InputContainer: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    padding: 16,
    marginTop: 50,
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
