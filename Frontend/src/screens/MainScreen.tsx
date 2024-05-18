import { PrimaryButton, Title } from "components/atoms";
import Navbar from "components/molecules/Navbar";
import { paddingSize } from "properties/styles/vars";
import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";


export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.xBig,
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.mediumBig,
    rowGap: paddingSize.small,
  },
  logo: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

const MainScreen = ({ navigation }) => {
  const navigateToQrScanScreen = () => {
    navigation.navigate("QrScanScreen");
  };

  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Navbar id={"124623"} />
        <Image
          style={mainStyle.logo}
          source={require("../../assets/logo_podstawowe.png")}
        />
        <Title title="Grakonosze" />
        <View style={mainStyle.buttonContainer}>
          <PrimaryButton
            title={"Skanuj kod QR"}
            handleOnClick={navigateToQrScanScreen}
          ></PrimaryButton>
          <PrimaryButton title={"Kolekcja"}></PrimaryButton>
          <PrimaryButton title={"Ranking"}></PrimaryButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
