
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import PlanOverviewScreen from "../screens/PlanOverviewScreen";
import OnBoardingScreen from "../screens/onBoardingScreen";

const Stack = createNativeStackNavigator()
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background,
    },
  };
export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="OnBoarding"
        >
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PlanOverview" component={PlanOverviewScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}


