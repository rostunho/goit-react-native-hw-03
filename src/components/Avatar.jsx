import { StyleSheet, View, Image } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.addIcon}
        source={require("../assets/images/add-icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addIcon: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});
