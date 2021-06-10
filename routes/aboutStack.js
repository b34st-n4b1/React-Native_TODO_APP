import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
const { Navigator, Screen } = createStackNavigator();
import Header from "../shared/header";

const AboutStack = ({ navigation }) => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ddd",
        height: 90,
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="About"
      options={{
        headerTitle: () => <Header navigation={navigation} title="About Us" />,
        headerTitleAlign: "center",
      }}
      component={About}
    />
  </Navigator>
);

export default AboutStack;
