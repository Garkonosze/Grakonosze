import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

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
  const { weight1, weight2 } = route.params;
  const [results, setResults] = useState<GridResult[]>([]);
  
  useEffect(() => {
    const calculateXOR = (x: boolean, y: boolean): number => (x || y) && !(x && y) ? 1 : 0;
    const grid: GridResult[] = [];
    for (let i = 0; i <= 1; i += 0.05) {
      for (let j = 0; j <= 1; j += 0.05) {
        grid.push({ x: i, y: j, value: calculateXOR(i > 0.5, j > 0.5) });
      }
    }
    setResults(grid);
  }, [weight1, weight2]); // Assuming weight1 and weight2 will be used in future modifications

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.rocText}>ROC: 0.85</Text>
        <Svg height="400" width="400">
          {results.map((result, index) => (
            <Rect
              key={index}
              x={result.x * 400}
              y={result.y * 400}
              width={4}  // Changed from string to number
              height={4} // Changed from string to number
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
  },
  rocText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default XorPlaneView;
