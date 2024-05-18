import { PrimaryButton } from "components/atoms";
import { Modal } from "components/molecules/Modal";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import {
  borderRadiusSize,
  fontSize,
  paddingSize,
} from "properties/styles/vars";
import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Pressable,
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
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const GeoGuesser = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={geoguesserStyle.container}>
        <Navbar id="124623" />
        <View style={geoguesserStyle.map}>
          <Text>tu będzie mapa</Text>
        </View>
        <PrimaryButton inactive={true} title={"Potwierdź"} />
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
    </SafeAreaView>
  );
};

export default GeoGuesser;
