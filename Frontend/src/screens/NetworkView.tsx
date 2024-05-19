import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import Svg, { Circle, Line } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NetworkViewNavigationProp = StackNavigationProp<RootStackParamList, 'NetworkView'>;

type Props = {
  navigation: NetworkViewNavigationProp;
};

const NetworkView: React.FC<Props> = ({ navigation }) => {
  const [learningRate, setLearningRate] = useState(0.01);
  const [epochs, setEpochs] = useState(10);
  const [hiddenLayers, setHiddenLayers] = useState(1);
  const [neuronsPerLayer, setNeuronsPerLayer] = useState(2);

  const handleLearnPress = () => {
    navigation.navigate('XorPlaneView', { learningRate, epochs, hiddenLayers, neuronsPerLayer });
  };

  const SVG_HEIGHT = 300;
  const SVG_WIDTH = 600;

  const generateNetworkVisualization = () => {
    const inputLayer = [{ y: 100 }, { y: 200 }];
    const outputLayer = [{ y: 100 }, { y: 200 }];
    const layers = [inputLayer];

    for (let i = 0; i < hiddenLayers; i++) {
      const layer = [];
      const spacing = SVG_HEIGHT / (neuronsPerLayer + 1);
      for (let j = 0; j < neuronsPerLayer; j++) {
        layer.push({ y: (j + 1) * spacing });
      }
      layers.push(layer);
    }

    layers.push(outputLayer);

    return layers;
  };

  const layers = generateNetworkVisualization();

  const getXOffset = (totalLayers: number) => {
    const totalWidth = (totalLayers - 1) * 100;
    return (SVG_WIDTH - totalWidth) / 2;
  };

  const getLayerXPosition = (layerIndex: number, xOffset: number) => {
    return xOffset + layerIndex * 100;
  };

  const xOffset = getXOffset(layers.length);

  return (
    <View style={styles.container}>
      <Text style={styles.nnv}>Neural Network Visualization</Text>

      <View style={styles.sliderContainer}>
        <Text>Learning Rate: {learningRate.toFixed(3)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.001}
          maximumValue={1}
          step={0.001}
          value={learningRate}
          onValueChange={(value) => setLearningRate(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Epochs: {epochs}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={100}
          step={1}
          value={epochs}
          onValueChange={(value) => setEpochs(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Hidden Layers: {hiddenLayers}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={hiddenLayers}
          onValueChange={(value) => setHiddenLayers(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Neurons per Layer: {neuronsPerLayer}</Text>
        <Slider
          style={styles.slider}
          minimumValue={2}
          maximumValue={6}
          step={1}
          value={neuronsPerLayer}
          onValueChange={(value) => setNeuronsPerLayer(value)}
        />
      </View>

      <Button title="Learn" onPress={handleLearnPress} />

      <Svg height={SVG_HEIGHT} width={SVG_WIDTH} style={styles.networkVisualization}>
        {layers.map((layer, layerIndex) => (
          <React.Fragment key={layerIndex}>
            {layer.map((neuron, neuronIndex) => (
              <Circle key={neuronIndex} cx={getLayerXPosition(layerIndex, xOffset)} cy={neuron.y} r="10" fill="black" />
            ))}
          </React.Fragment>
        ))}
        {layers.slice(0, -1).map((layer, layerIndex) => (
          <React.Fragment key={layerIndex}>
            {layer.map((neuron, neuronIndex) => (
              <React.Fragment key={neuronIndex}>
                {layers[layerIndex + 1].map((nextNeuron, nextNeuronIndex) => (
                  <Line
                    key={nextNeuronIndex}
                    x1={getLayerXPosition(layerIndex, xOffset)}
                    y1={neuron.y}
                    x2={getLayerXPosition(layerIndex + 1, xOffset)}
                    y2={nextNeuron.y}
                    stroke="black"
                    strokeWidth="2"
                  />
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  nnv: {
    fontSize: 18,
    marginBottom: 20,
  },
  sliderContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  slider: {
    width: 200,
    height: 40,
  },
  layerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  networkVisualization: {
    marginTop: 20,
  },
});

export default NetworkView;
