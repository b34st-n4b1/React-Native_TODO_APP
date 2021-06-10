import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Cards from "../shared/cards";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  const { title, body, rating } = route.params;
  mypath = "../assets/rating-" + rating + ".png";
  return (
    <View style={globalStyles.container}>
      <Cards>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.ratings}>
          <Text>GameZone Ratings:</Text>
          {/* <Image source={require("../assets/rating-" + rating + ".png")} /> */}
          <Image source={images.ratings[rating]} />
        </View>
      </Cards>
    </View>
  );
}
const styles = StyleSheet.create({
  ratings: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
