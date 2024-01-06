import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import mealsData from "../data/mealsData";

const Item = (item) => {
  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.day}>{item.day}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.meal}>{item.meal}</Text>
      </View>
    </View>
  );
};

const MenuScreen = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Rectangle-23.png")}
        />
      </View>
      <View>
        <Text style={styles.menuHeader}>Ukemeny</Text>
      </View>
      <View style={styles.menuCard}>
        <FlatList
          data={mealsData}
          renderItem={({ item }) => <Item day={item.day} meal={item.meal} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
  },
  menuHeader: {
    textAlign: "center",
    fontSize: 32,
    marginVertical: 40,
    fontWeight: "bold",
  },
  menuCard: {
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 50,
    paddingVertical: 30,
    borderRadius: 25,
  },
  day: {
    textDecorationLine: "underline",
    lineHeight: 30,
    fontWeight: "bold",
  },
  meal: {
    lineHeight: 30,
  },
});
export default MenuScreen;
