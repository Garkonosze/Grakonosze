import { PrimaryButton } from "components/atoms";
import SecondaryButton from "components/atoms/SecondaryButton";
import { Modal } from "components/molecules/Modal";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import { CameraCapturedPicture } from 'expo-camera';
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
    marginTop: 28,
  },
  image: {
    height: 115,
    width: 100,
    alignSelf: "center",
    resizeMode: "contain",
    borderRadius: 1.5,
  },
  imageContainer: {
    position: "absolute",
    left: paddingSize.big,
    bottom: 250,
    borderColor: primaryColors.goldYellow,
    borderWidth: 2.5,
    borderRadius: borderRadiusSize.small,
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.big,
    paddingVertical: paddingSize.small,
    gap: paddingSize.mediumBig,
  },
    photoTaken: {
    width: "70%",
    height: "84%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  imageBig: {
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const PhotoTakenScreen = ({ navigation, route }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const photo: CameraCapturedPicture = route.params.photo;
  
  const navigateToCamera = () => {
    navigation.navigate("CameraGame");
  };

  const navigateToPhotoWithFinal = () => {
    navigation.navigate("PhotoWithFinalScreen", {photo: photo});
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={photoWithStyle.container}>
        <Navbar id="124623" />
        <View  style={photoWithStyle.container}>
          <Image
            style={photoWithStyle.photoTaken}
            source={{uri: photo.uri}}
          />
          <Text style={photoWithStyle.text}>Jeżeli jesteś zadowolony potwierdź swoje zdjęcie</Text>
        </View>
        <View style={photoWithStyle.buttonContainer}>
        <PrimaryButton title={"Potwierdź"} handleOnClick={navigateToPhotoWithFinal} inactive={isModalVisible} />
        <SecondaryButton title={"Powtórz zdjęcie"} handleOnClick={navigateToCamera} inactive={isModalVisible}/>
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
