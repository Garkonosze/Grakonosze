import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Svg, { Circle, Line } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NetworkViewNavigationProp = StackNavigationProp<RootStackParamList, 'NetworkView'>;

type Props = {
  navigation: NetworkViewNavigationProp;
};

const NetworkView: React.FC<Props> = ({ navigation }) => {
  const [inputWeights, setInputWeights] = useState<number[]>([0, 0, 0]);

  const getColor = (value: number): string => {
    const normalized = (value + 1) / 2;
    const maxGray = 96;
    const power = 1.4;
    const red = Math.floor(255 * normalized ** power);
    const gray = Math.floor(maxGray - maxGray * Math.abs(1 - normalized));
    const blue = Math.floor(255 * (1 - normalized) ** power);
    return `rgb(${red}, ${gray}, ${blue})`;
  };

  const navigateToXorPlane = () => {
    navigation.navigate('XorPlaneView', {
      weights: inputWeights,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nnv}>Neural Network Visualization</Text>
      <Svg height="300" width="300">
        {/* Input Neurons */}
        {[100, 150, 200].map((y, index) => (
          <Circle key={y} cx="50" cy={y} r="20" fill={getColor(inputWeights[index])} />
        ))}
        {/* Output Neuron */}
        <Circle cx="250" cy="150" r="20" fill="skyblue" />

        {/* Connections */}
        {[100, 150, 200].map((y, index) => (
          <Line
            key={y}
            x1="70"
            y1={y}
            x2="230"
            y2="150"
            stroke={getColor(inputWeights[index])}
            strokeWidth="2"
          />
        ))}
      </Svg>
      {inputWeights.map((weight, index) => (
        <View key={index} style={{ alignItems: 'center' }}>
          <Text>Weight {index + 1}: {weight.toFixed(2)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={-1}
            maximumValue={1}
            step={0.01}
            value={weight}
            onValueChange={(newValue) => {
              const newWeights = [...inputWeights];
              newWeights[index] = newValue;
              setInputWeights(newWeights);
            }}
          />
        </View>
      ))}
      <Text style={styles.link} onPress={navigateToXorPlane}>
        Go to XOR Plane
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nnv: {
    fontSize: 18,
    marginBottom: 20,
  },
  slider: {
    width: 200,
    height: 40,
    marginTop: 10,
  },
  link: {
    color: 'blue',
    marginTop: 20,
  },
});

export default NetworkView;
