import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    backgroundColor: Colors.primary,
    borderColor: Colors.secondary,
    padding: 16,
    marginTop: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 85,
    fontWeight: "bold",
    color: Colors.white,
  },
});
