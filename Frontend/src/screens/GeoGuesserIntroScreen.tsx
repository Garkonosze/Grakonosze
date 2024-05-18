import { PrimaryButton } from "components/atoms";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import {
  borderRadiusSize,
  fontSize,
  paddingSize,
} from "properties/styles/vars";
import React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";

export const geoguesserStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.xBig,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: primaryColors.darkBlue,
    fontSize: fontSize.buttonMobileFontSize,
    textAlign: "center",
  },
  image: {
    height: 180,
    alignSelf: "center",
    borderColor: primaryColors.goldYellow,
    borderWidth: 2,
    borderRadius: borderRadiusSize.small,
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.mediumBig,
  },
});

const GeoGuesserIntroScreen = ({ navigation }) => {
  const navigateToGeoguesser = () => {
    navigation.navigate("GeoGuesser");
  };

  return (
    <SafeAreaView style={geoguesserStyle.container}>
      <Text style={geoguesserStyle.text}>
        Znajdź miejsce ze zdjęcia na schemacie
      </Text>
      <Navbar id="124623" />
      <Image
        style={geoguesserStyle.image}
        source={require("../../assets/geo1.jpg")}
      />
      <View style={geoguesserStyle.buttonContainer}>
        <PrimaryButton
          handleOnClick={navigateToGeoguesser}
          title={"Zaczynamy!"}
        />
      </View>
    </SafeAreaView>
  );
};

export default GeoGuesserIntroScreen;
