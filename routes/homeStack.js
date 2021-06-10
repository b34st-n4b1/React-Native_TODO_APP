import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetail from "../screens/reviewDetail";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
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
      name="Home"
      options={{
        headerTitle: () => <Header navigation={navigation} title="Game Zone" />,
        headerTitleAlign: "center",
      }}
      component={Home}
    />
    <Screen
      name="ReviewDetail"
      options={{ title: "Review Details" }}
      component={ReviewDetail}
    />
  </Navigator>
);

// export default AppNavigator = () => (
//   <NavigationContainer>
//     <HomeStack />
//   </NavigationContainer>
// );

export default HomeStack;
