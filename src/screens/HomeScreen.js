import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Noe Morsomt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Oppsummering</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Hva skjer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={require("../../assets/images/fontenehuset.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    borderColor: colors.pink,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    marginVertical: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
export default HomeScreen;
