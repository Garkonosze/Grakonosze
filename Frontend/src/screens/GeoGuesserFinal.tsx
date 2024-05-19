import { PrimaryButton, Title } from "components/atoms";
import { Modal } from "components/molecules/Modal";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import {
  borderRadiusSize,
  fontSize,
  paddingSize,
} from "properties/styles/vars";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";

export const geoguesserStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.xBig,
    display: "flex",
    paddingTop: 100,
  },
  text: {
    color: primaryColors.darkBlue,
    fontSize: fontSize.buttonMobileFontSize,
    textAlign: "center",
  },
  image: {
    height: 70,
    width: 100,
    alignSelf: "center",
    resizeMode: "contain",
  },
  imageContainer: {
    position: "absolute",
    left: paddingSize.medium,
    bottom: 200,
    borderColor: primaryColors.goldYellow,
    borderWidth: 2,
    borderRadius: borderRadiusSize.small,
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.mediumBig,
  },
  map: {
    height: "30%",
  },
  imageBig: {
    width: "100%",
    alignSelf: "center",
  },
  mapImage: {
    alignSelf: "center",
    resizeMode: "contain",
    height: "100%",
    zIndex: -10,
  },
  locationGood: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 30,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
    zIndex: 10,
  },
});

const GeoGuesserFinal = ({ navigation, route }) => {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const imageHeight = (windowHeight * 30) / 100;
  const imageWidth = (630 * imageHeight) / 1182;
  const paddingLeft = (windowWidth - imageWidth) / 2 - 100;
  const goodLocationWidth =
    (route.params.goodLocationWidth * 3) / 7 + paddingLeft;
  const goodLocationHeight = (route.params.goodLocationHeight * 3) / 7;
  const locationHeight = (route.params.locationHeight * 3) / 7;
  const locationWidth = (route.params.locationWidth * 3) / 7 + paddingLeft;
  const diff = Math.round(
    Math.sqrt(
      Math.pow(route.params.goodLocationWidth - route.params.locationWidth, 2) +
        Math.pow(
          route.params.goodLocationHeight - route.params.locationHeight,
          2
        )
    )
  );

  let pts = 0;

  if (diff < 40) {
    pts = 100;
  } else if (diff < 70) {
    pts = 75;
  } else if (diff < 100) {
    pts = 50;
  } else if (diff < 150) {
    pts = 25;
  }

  const navigateToPrice = () => {
    navigation.navigate("CollectPrice");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={geoguesserStyle.container}>
        <Navbar id="124623" />
        <View style={geoguesserStyle.map}>
          <Image
            style={geoguesserStyle.mapImage}
            source={require("../../assets/plan.png")}
          />
        </View>
        <View>
          <Text style={geoguesserStyle.text}>Pomyliłeś się o {diff} px</Text>
          <Text style={geoguesserStyle.text}>Zdobywasz</Text>
          <Title title={pts + " pkt"} />
          <Text style={geoguesserStyle.text}>na 100 mozliwych</Text>
        </View>
        <PrimaryButton
          handleOnClick={navigateToPrice}
          inactive={locationHeight < 0}
          title={"Kontynuuj"}
        />
      </View>
      <Image
        style={[
          geoguesserStyle.locationGood,
          { top: goodLocationHeight, left: goodLocationWidth },
        ]}
        source={require("../../assets/locaction_good.png")}
      />
      <Image
        style={[
          geoguesserStyle.locationGood,
          { top: locationHeight, left: locationWidth },
        ]}
        source={require("../../assets/location.png")}
      />
    </View>
  );
};

export default GeoGuesserFinal;
