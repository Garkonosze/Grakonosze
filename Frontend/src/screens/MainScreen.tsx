import { PrimaryButton, Title } from "components/atoms";
import primaryColors from "properties/styles/colors";
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

const MainScreen = ({ navigation }) => {
  const navigateToNetworkView = () => {
    navigation.navigate("NetworkView");
  };

  const navigateToXorPlaneView = () => {
    navigation.navigate("XorPlaneView");
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
      </View>
    </View>
  );
};

export default MainScreen;