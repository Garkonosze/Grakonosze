import * as React from "react";
import NetworkView from "./src/screens/NetworkView";
import XorPlaneView from "./src/screens/XorPlaneView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";

export type RootStackParamList = {
  NetworkView: undefined;
  XorPlaneView: undefined;
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="NetworkView" component={NetworkView} />
        <Stack.Screen name="XorPlaneView" component={XorPlaneView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
