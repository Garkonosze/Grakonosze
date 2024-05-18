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

  const navigateToXorPlaneView = () => {
    navigation.navigate("XorPlaneView");
  };

  const navigateToQRScanner = () => {
    navigation.navigate("QRScanner");
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
          title={"Xor"}
          handleOnClick={navigateToXorPlaneView}
        ></PrimaryButton>
        <PrimaryButton
          title={"QR Scanner"}
          handleOnClick={navigateToQRScanner}
        ></PrimaryButton>
      </View>
    </View>
  );
};

export default QrScanScreen;
