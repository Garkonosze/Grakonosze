import * as React from "react";
import NetworkView from "./src/screens/NetworkView";
import XorPlaneView from "./src/screens/XorPlaneView";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import StartScreen from "./src/screens/StartScreen";
import PhotoLevelScreen from "./src/screens/PhotoLevelScreen";
import PhotoWithIntroScreen from "./src/screens/PhotoWithIntroScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import QRScanner from "./src/screens/QRScanner";
import QrScanScreen from "./src/screens/QrScanScreen";
import GeoGuesserIntroScreen from "./src/screens/GeoGuesserIntroScreen";
import GeoGuesser from "./src/screens/GeoGuesser";
import CollectPrice from "./src/screens/CollectPrice";
import CollectionView from "./src/screens/Collection/CollectionView";


type RootStackParamList = {
  Home: undefined;
  NetworkView: undefined;
  XorPlaneView: {
    weight1: number;
    weight2: number;
  };
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CollectionView">
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="QrScanScreen" component={QrScanScreen} />
        <Stack.Screen name="NetworkView" component={NetworkView} />
        <Stack.Screen name="XorPlaneView" component={XorPlaneView} />
        <Stack.Screen
          name="GeoGuesserIntroScreen"
          component={GeoGuesserIntroScreen}
        />
        <Stack.Screen name="GeoGuesser" component={GeoGuesser} />
        <Stack.Screen name="PhotoLevelScreen" component={PhotoLevelScreen} />
        <Stack.Screen name="PhotoWithIntroScreen" component={PhotoWithIntroScreen} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="CollectPrice" component={CollectPrice} />
        <Stack.Screen name="CollectionView" component={CollectionView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
