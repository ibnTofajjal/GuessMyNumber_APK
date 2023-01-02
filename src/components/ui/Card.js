import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    marginTop: 30,
    padding: 20,
    borderRadius: 16,
  },
});
