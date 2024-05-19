import { PrimaryButton } from "components/atoms";
import SecondaryButton from "components/atoms/SecondaryButton";
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

export const photoWithStyle = StyleSheet.create({
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
    height: 94,
    width: 82,
    alignSelf: "center",
    resizeMode: "contain",
    borderRadius: 1.5,
    },
  imageContainer: {
    position: "absolute",
    bottom: 250,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: primaryColors.goldYellow,
    borderWidth: 2.5,
    borderRadius: borderRadiusSize.small,
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.big,
    paddingVertical: paddingSize.small,
    gap: paddingSize.mediumBig,
  },
  photo: {
    height: "60%",
  },
  imageBig: {
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const PhotoTakenScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  
  const navigateToCamera = () => {
    // Camera!
  };

  const isPersonModel = () => {
    // modelBRRRRRRRRRRRRR!
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={photoWithStyle.container}>
        <Navbar id="124623" />

        <View style={photoWithStyle.photo}>
          <Text>tu będzie twoje zdjecie z dziekanem</Text>
        </View>
        <View style={photoWithStyle.buttonContainer}>
        <PrimaryButton title={"Potwierdź"} handleOnClick={isPersonModel} />
        <SecondaryButton title={"Powtórz zdjęcie"} handleOnClick={navigateToCamera} />
        </View>
      </View>
      <Pressable onPress={handleModal} style={photoWithStyle.imageContainer}>
        <Image
          style={photoWithStyle.image}
          source={require("../../assets/marek.jpg")}
        />
        <Image
          style={[
            photoWithStyle.image,
            { position: "absolute", opacity: 0.6 },
          ]}
          source={require("../../assets/lupa.png")}
        />
      </Pressable>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="Znajdź dydaktyka ze zdjęcia" />
          <Modal.Body>
            <Image
              style={photoWithStyle.imageBig}
              source={require("../../assets/marek.jpg")}
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

export default PhotoTakenScreen;
