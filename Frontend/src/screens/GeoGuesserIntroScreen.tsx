import { PrimaryButton } from "components/atoms";
import primaryColors from "properties/styles/colors";
import { fontSize, paddingSize } from "properties/styles/vars";
import React from "react";
import { StyleSheet, Image, Text, Button, View } from "react-native";

export const geoGuesserStyle = StyleSheet.create({
  banner: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
  idText: {
    position: "absolute",
    top: paddingSize.xSmall,
    left: paddingSize.xSmall,
    fontSize: fontSize.buttonMobileFontSize,
    color: primaryColors.darkBlue,
  },
  strongText: {
    fontWeight: "700",
    color: primaryColors.goldYellow,
  },
});

const GeoGuesserIntroScreen = ({ navigation }) => {
  return (
    <View>
      <PrimaryButton title={"Zaczynamy!"} />
    </View>
  );
};

export default GeoGuesserIntroScreen;
