import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NetworkViewNavigationProp = StackNavigationProp<RootStackParamList, 'NetworkView'>;

type Props = {
  navigation: NetworkViewNavigationProp;
};

const QR_MAP = [
  "MainScreen", // 0
  "NetworkView", // 1
  "XorPlaneView", // 2
];


function handleBarCodeScanned(navigation: NetworkViewNavigationProp, setScanned: Function, result: BarCodeScannerResult) {
    setScanned(true);

    let number_string = result.data[result.data.length-1];
    if (!"0123456789".includes(number_string) || !result.data.startsWith("Twoje")) {
      alert("NIE SKANUJ TEGO");
      return;
    }

    let number = Number(result.data[result.data.length-1]);
    alert(`${result.data.slice(0, result.data.length-1)}`);
    navigation.navigate(QR_MAP[number]);
}


const QRScanner = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScannedStateful = (result: BarCodeScannerResult) => handleBarCodeScanned(navigation, setScanned, result);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScannedStateful}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Naciśnij by zeskanować na nowo'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default QRScanner;



