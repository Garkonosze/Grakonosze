import { PrimaryButton } from "components/atoms";
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
    justifyContent: "center",
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
    height: "70%",
  },
  imageBig: {
    width: "100%",
    maxWidth: 300,
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

const GeoGuesser = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const windowHeight = Dimensions.get("window").height;
  const imageHeight =
    ((windowHeight - 2 * paddingSize.mediumBig - paddingSize.xBig) * 70) / 100;
  const imageWidth = (630 * imageHeight) / 1182;
  const paddingLeft = (Dimensions.get("window").width - imageWidth) / 2;
  const goodLocationWidth = imageWidth - (imageWidth * 20) / 100 + paddingLeft;
  const goodLocationHeight = imageHeight - (imageHeight * 50) / 100;
  const [locationHeight, setLocationHeight] = useState(-30);
  const [locationWidth, setLocationWidth] = useState(-30);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const navigateToFinal = () => {
    navigation.navigate("GeoGuesserFinal", {
      goodLocationWidth: goodLocationWidth,
      goodLocationHeight: goodLocationHeight,
      locationHeight: locationHeight,
      locationWidth: locationWidth,
    });
  };

  const handlePress = (evt: {
    nativeEvent: { locationX: any; locationY: any; pageX: any; pageY: any };
  }) => {
    setLocationWidth(evt.nativeEvent.pageX);
    setLocationHeight(evt.nativeEvent.pageY - 100);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={geoguesserStyle.container}>
        <Navbar id="124623" />
        <Pressable
          onPress={(evt) => handlePress(evt)}
          style={geoguesserStyle.map}
        >
          <Image
            style={geoguesserStyle.mapImage}
            source={require("../../assets/plan.png")}
          />
        </Pressable>
        <PrimaryButton
          handleOnClick={navigateToFinal}
          inactive={locationHeight < 0}
          title={"Potwierdź"}
        />
      </View>
      <Pressable onPress={handleModal} style={geoguesserStyle.imageContainer}>
        <Image
          style={geoguesserStyle.image}
          source={require("../../assets/geo1.jpg")}
        />
        <Image
          style={[
            geoguesserStyle.image,
            { position: "absolute", opacity: 0.6 },
          ]}
          source={require("../../assets/lupa.png")}
        />
      </Pressable>
      <Image
        style={[
          geoguesserStyle.locationGood,
          { top: locationHeight, left: locationWidth },
        ]}
        source={require("../../assets/location.png")}
      />
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="Znajdź zdjęcie na schemacie" />
          <Modal.Body>
            <Image
              style={geoguesserStyle.imageBig}
              source={require("../../assets/geo1.jpg")}
            />
          </Modal.Body>
          <Modal.Footer>
            <PrimaryButton title="Zamknij" handleOnClick={handleModal} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </View>
  );
};

export default GeoGuesser;
