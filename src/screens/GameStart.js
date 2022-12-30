import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function GameStart() {
  return (
    <View>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
