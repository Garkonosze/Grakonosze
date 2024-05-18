import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type XorPlaneViewNavigationProp = StackNavigationProp<RootStackParamList, 'XorPlaneView'>;

type Props = {
  navigation: XorPlaneViewNavigationProp;
};

interface GridResult {
  x: number;
  y: number;
  value: number;
}

const XorPlaneView: React.FC<Props> = () => {
  const [results, setResults] = useState<GridResult[]>([]);
  
  useEffect(() => {
    const calculateXOR = (x: boolean, y: boolean): number => (x || y) && !(x && y) ? 1 : 0;
    const grid: GridResult[] = [];
    for (let i = 0; i <= 1; i += 0.01) {
      for (let j = 0; j <= 1; j += 0.01) {
        grid.push({ x: i, y: j, value: calculateXOR(i > 0.5, j > 0.5) });
      }
    }
    setResults(grid);
  }, []);

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
              width="4"
              height="4"
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
