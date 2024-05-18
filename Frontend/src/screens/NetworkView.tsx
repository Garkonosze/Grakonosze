import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import Svg, { Line } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NetworkViewNavigationProp = StackNavigationProp<RootStackParamList, 'NetworkView'>;

type Props = {
  navigation: NetworkViewNavigationProp;
};

const NetworkView: React.FC<Props> = ({ navigation }) => {
  const [weight1, setWeight1] = useState<number>(0);
  const [weight2, setWeight2] = useState<number>(0);

  const getColor = (value: number): string => {
    const red = Math.floor((value + 1) * 128);
    const blue = 255 - red;
    return `rgb(${red},0,${blue})`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rocText}>ROC: 0.85</Text>
      <Svg height="200" width="200">
        <Line
          x1="50"
          y1="50"
          x2="150"
          y2="50"
          stroke={getColor(weight1)}
          strokeWidth="2"
        />
        <Line
          x1="50"
          y1="150"
          x2="150"
          y2="150"
          stroke={getColor(weight2)}
          strokeWidth="2"
        />
      </Svg>
      <Text>Weight 1: {weight1.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={-1}
        maximumValue={1}
        step={0.0100000001}
        value={weight1}
        onValueChange={setWeight1}
      />
      <Text>Weight 2: {weight2.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={-1}
        maximumValue={1}
        step={0.0100000001}
        value={weight2}
        onValueChange={setWeight2}
      />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('XorPlaneView')}
      >
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
  rocText: {
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
