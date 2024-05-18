import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetworkView from './src/screens/NetworkView';
import XorPlaneView from './src/screens/XorPlaneView';

export type RootStackParamList = {
  NetworkView: undefined;
  XorPlaneView: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NetworkView">
        <Stack.Screen name="NetworkView" component={NetworkView} />
        <Stack.Screen name="XorPlaneView" component={XorPlaneView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
