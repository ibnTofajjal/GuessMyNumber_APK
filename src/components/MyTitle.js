import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const MyTitle = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default MyTitle;

const styles = StyleSheet.create({
  title: {
    // borderWidth: 2,
    backgroundColor: Colors.secondary,
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    borderRadius: 15,
  },
});
