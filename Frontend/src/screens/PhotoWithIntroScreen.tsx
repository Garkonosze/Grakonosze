import React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
import { PrimaryButton } from "components/atoms";
import SecondaryButton from "components/atoms/SecondaryButton";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import {
  borderRadiusSize,
  fontSize,
  paddingSize,
} from "properties/styles/vars";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    justifyContent: "center",
  },
  text: {
    color: primaryColors.darkBlue,
    fontSize: fontSize.buttonMobileFontSize,
    textAlign: "center",
  },
  image: {
    height: 250,
    alignSelf: "center",
    borderColor: primaryColors.goldYellow,
    borderWidth: 2,
    borderRadius: borderRadiusSize.small,
    marginVertical: paddingSize.mediumBig,
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.big,
    paddingVertical: paddingSize.small,
    gap: paddingSize.mediumBig,
  },
});

const PhotoWithIntroScreen = ({ navigation }) => {
  const navigateToCamera = () => {
    // Camera!
  };

  const navigateToPhotoLevelScreen = () => {
    navigation.navigate("PhotoLevelScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar id="124623" />
      <Text style={styles.text}>
        Zrób sobie zdjęcie z poniższym dydaktykiem WI
      </Text>
      <Image
        style={styles.image}
        source={require("../../assets/marek.jpg")}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          handleOnClick={navigateToCamera}
          title={"Zaczynamy!"}
        />
        <SecondaryButton
          handleOnClick={navigateToPhotoLevelScreen}
          title={"Zmień poziom"}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhotoWithIntroScreen;
