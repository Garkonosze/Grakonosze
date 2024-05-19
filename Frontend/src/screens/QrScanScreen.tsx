import { PrimaryButton, Title } from "components/atoms";
import { paddingSize } from "properties/styles/vars";
import React from "react";
import { View, StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  container: {
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.mediumBig,
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.mediumBig,
    rowGap: paddingSize.small,
  },
});

const QrScanScreen = ({ navigation }) => {
  const navigateToNetworkView = () => {
    navigation.navigate("NetworkView");
  };

  const navigateToGeoguesser = () => {
    navigation.navigate("GeoGuesserIntroScreen");
  };

  const navigateToCameraGame = () => {
    navigation.navigate("CameraGame");
  };

  const navigateToQRScanner = () => {
    navigation.navigate("QRScanner");
  };

  const navigateToPhotoWithIntroScreen = () => {
    navigation.navigate("PhotoWithIntroScreen");
  };

  return (
    <View style={[{ flex: 1 }, mainStyle.container]}>
      <Title title="Grakonosze" />
      <View style={mainStyle.buttonContainer}>
        <PrimaryButton
          title={"Sieć neuronowa"}
          handleOnClick={navigateToNetworkView}
        ></PrimaryButton>
        <PrimaryButton
          title={"Geoguesser"}
          handleOnClick={navigateToGeoguesser}
        ></PrimaryButton>
        <PrimaryButton
          title={"Photo With"}
          handleOnClick={navigateToPhotoWithIntroScreen}
        ></PrimaryButton>
        <PrimaryButton
          title={"QRScanner"}
          handleOnClick={navigateToQRScanner}
        ></PrimaryButton>
        <PrimaryButton
          title={"CameraGame"}
          handleOnClick={navigateToCameraGame}
        ></PrimaryButton>
      </View>
    </View>
  );
};

export default QrScanScreen;
