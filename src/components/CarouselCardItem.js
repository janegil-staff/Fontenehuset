import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgUrl} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    position: 'absolute',
    fontStyle: 'italic',
    color: "#222",
    fontSize: 32,
    color: 'white', 
    paddingTop: 30,
  },
  body: {
    position:'absolute',
    bottom: 0,
    color: "#222",
    fontSize: 18,
    textAlign: 'center',
    width: ITEM_WIDTH,
    fontWeight: "bold",
    opacity: .5,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    
  }
});

export default CarouselCardItem;
