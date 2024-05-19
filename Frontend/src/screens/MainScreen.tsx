import AsyncStorage from "@react-native-async-storage/async-storage";
import {PrimaryButton, Title} from "components/atoms";
import Navbar from "components/molecules/Navbar";
import {paddingSize} from "properties/styles/vars";
import React, {useEffect, useState} from "react";
import {Image, SafeAreaView, StyleSheet, View} from "react-native";

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
  progressBar: {
    position: "absolute",
    left: 0,
    top: 0,
  }

});

const MainScreen = ({ navigation }) => {
  const navigateToQrScanScreen = () => {
    navigation.navigate("QrScanScreen");
  };

  const navigateToCollectionView = () => {
    navigation.navigate("CollectionView");
  };

  const [id, setId] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userId").then((data) => setId(data ? data : "no id"));
  }, []);

  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Navbar id={id} />
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
          <PrimaryButton
            title={"Kolekcja"}
            handleOnClick={navigateToCollectionView}
          ></PrimaryButton>
          <PrimaryButton title={"Ranking"}></PrimaryButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
