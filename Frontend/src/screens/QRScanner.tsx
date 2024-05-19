import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarcodeScanningResult, CameraView, useCameraPermissions} from 'expo-camera';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {CommonActions} from '@react-navigation/native';

type NetworkViewNavigationProp = StackNavigationProp<RootStackParamList, 'NetworkView'>;

type Props = {
  navigation: NetworkViewNavigationProp;
};

const QR_MAP = [
    "GeoGuesserIntroScreen", // 0
    "PhotoWithIntroScreen", // 1
    "NetworkView", // 2
];


function handleBarCodeScanned(navigation: NetworkViewNavigationProp, setScanned: Function, result: BarcodeScanningResult) {
    setScanned(true);

    let number_string = result.data[result.data.length-1];
    if (!"0123456789".includes(number_string) || !result.data.startsWith("Twoje")) {
      alert("NIE SKANUJ TEGO");
      return;
    }

    let number = Number(result.data[result.data.length-1]);
    alert(`${result.data.slice(0, result.data.length-1)}`);

    navigation.dispatch(
      CommonActions.navigate({
        name: QR_MAP[number],
        params: {},
      })
    );
}


const QRScanner = ({navigation}) => {
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Zezwól na użycie kamery</Text>
        <Button onPress={requestPermission} title="zezwól na użycie kamery" />
      </View>
    );
  }

  const handleBarCodeScannedStateful = (result: BarcodeScanningResult) => handleBarCodeScanned(navigation, setScanned, result);

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScannedStateful}
        barcodeScannerSettings={{
          barcodeTypes: ['aztec', 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93', 'itf14', 'codabar', 'code128', 'upc_a']
        }}
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



