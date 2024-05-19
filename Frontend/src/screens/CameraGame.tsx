import { CameraView, useCameraPermissions } from 'expo-camera';
import primaryColors from 'properties/styles/colors';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraGame({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null)

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

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const takePicture = () => {
    if (camera) {
        camera.takePictureAsync({ onPictureSaved: onPictureSaved });
    }
  };

  const onPictureSaved = photo => {
    navigation.navigate("PhotoTakenScreen", {photo: photo});
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={(ref) => setCamera(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>FLIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ballz} onPress={takePicture}/>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    margin: 64,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  ballz: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: primaryColors.goldYellow,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: primaryColors.goldYellow,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
});
