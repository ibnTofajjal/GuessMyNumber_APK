import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "#ead1dc",
    margin: 8,
    padding: 8,
    textAlign: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#674ea7",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: "white",
  },
});
