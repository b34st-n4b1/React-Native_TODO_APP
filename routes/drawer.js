import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const { Navigator, Screen } = createDrawerNavigator();

const RootDrawerNavigator = () => (
  <Navigator>
    <Screen name="HomeStack" component={HomeStack} />
    <Screen name="AboutStack" component={AboutStack} />
  </Navigator>
);

export default AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);
