import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import * as tf from '@tensorflow/tfjs';

type XorPlaneViewNavigationProp = StackNavigationProp<RootStackParamList, 'XorPlaneView'>;

interface GridResult {
  x: number;
  y: number;
  value: number;
}

type Props = {
  navigation: XorPlaneViewNavigationProp;
  route: RouteProp<RootStackParamList, 'XorPlaneView'>;
};

const XorPlaneView: React.FC<Props> = ({ navigation, route }) => {
  const { learningRate, epochs, hiddenLayers, neuronsPerLayer } = route.params;
  const [networkResults, setNetworkResults] = useState<GridResult[]>([]);
  const [xorResults, setXorResults] = useState<GridResult[]>([]);

  const generateXORResults = () => {
    const grid: GridResult[] = [];
    for (let i = 0; i <= 1.1; i += 0.08) {
      for (let j = 0; j <= 1.1; j += 0.08) {
        const value = (i > 0.5) !== (j > 0.5) ? 1 : 0;
        grid.push({ x: i, y: j, value });
      }
    }
    setXorResults(grid);
  };

  const generateData = () => {
    console.log('Generating data...');
    const data = [];
    data.push({ input: [0, 0], output: 0 });
    data.push({ input: [1, 1], output: 0 });
    data.push({ input: [1, 0], output: 1 });
    data.push({ input: [0, 1], output: 1 });
    return data;
  };

  const createModel = () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: neuronsPerLayer, inputShape: [2], activation: 'sigmoid' }));

    for (let i = 1; i < hiddenLayers; i++) {
      model.add(tf.layers.dense({ units: neuronsPerLayer, activation: 'sigmoid' }));
    }

    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    const opt = tf.train.sgd(learningRate?learningRate:0.1);
    console.log(opt)
    model.compile({ optimizer: tf.train.sgd(learningRate), loss: 'binaryCrossentropy' });
    console.log(model)
    return model;
  };

  const trainXORModel = async (model: tf.Sequential, data: { input: number[]; output: number }[]) => {
    console.log('Training model...');
    const inputs = data.map(d => d.input);
    const labels = data.map(d => d.output);

    const xs = tf.tensor2d(inputs);
    const ys = tf.tensor2d(labels, [labels.length, 1]);

    await model.fit(xs, ys, { epochs });
    xs.dispose();
    ys.dispose();
    console.log('Training complete');
  };

  const generateResults = async (model: tf.Sequential) => {
    const grid: GridResult[] = [];
    for (let i = 0; i <= 1.06; i += 0.08) {
      for (let j = 0; j <= 1.06; j += 0.08) {
        const input = tf.tensor2d([[i, j]]);
        const prediction = model.predict(input) as tf.Tensor;
        const value = (await prediction.data())[0] > 0.5 ? 1 : 0;
        grid.push({ x: i, y: j, value });
        input.dispose();
        prediction.dispose();
      }
    }
    setNetworkResults(grid);
  };

  useEffect(() => {
    generateXORResults();
    const data = generateData();
    console.log(data);
    const model = createModel();
    console.log(model);
    trainXORModel(model, data).then(() => generateResults(model));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Neural Network XOR Result</Text>
        <Text>Learning Rate: {learningRate}</Text>
        <Text>Epochs: {epochs}</Text>
        <Text>Hidden Layers: {hiddenLayers}</Text>
        <Text>Neurons per Layer: {neuronsPerLayer}</Text>
        <Svg height="300" width="300" style={styles.map}>
          {networkResults.map((result, index) => (
            <Rect
              key={index}
              x={result.x * 300}
              y={result.y * 300}
              width={12}
              height={12}
              fill={result.value ? 'red' : 'blue'}
            />
          ))}
        </Svg>
        <Text style={styles.title}>Expected XOR Result</Text>
        <Svg height="300" width="300" style={styles.map}>
          {xorResults.map((result, index) => (
            <Rect
              key={index}
              x={result.x * 300}
              y={result.y * 300}
              width={12}
              height={12}
              fill={result.value ? 'red' : 'blue'}
            />
          ))}
        </Svg>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  map: {
    marginBottom: 20,
  },
});

export default XorPlaneView;
