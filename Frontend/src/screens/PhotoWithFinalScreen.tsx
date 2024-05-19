import { PrimaryButton, Title } from "components/atoms";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import { CameraCapturedPicture } from "expo-camera";
import { fontSize, paddingSize } from "properties/styles/vars";
import React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    height: 115,
    width: 100,
    alignSelf: "center",
    resizeMode: "contain",
    borderRadius: 1.5,
  },
  imageContainer: {
    top: paddingSize.small,
  },
  buttonContainer: {
    marginTop: -50,
    paddingHorizontal: paddingSize.big,
  },
  photoTaken: {
    width: "70%",
    height: "84%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const PhotoWithFinalScreen = ({ navigation, route }) => {
  const [points, setPoints] = React.useState(0);

  const photo: CameraCapturedPicture = route.params.photo;

  const getCollectionData = async (backendIP: any, id: any) => {
    try {
      console.log(backendIP);
      const response = await fetch(`${backendIP}/scores`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_hash: id, score: points, task_id: 2 }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToPrice = () => {
    AsyncStorage.getItem("backendIP").then((backendIP) => {
      AsyncStorage.getItem("userId").then((userId) => {
        getCollectionData(backendIP, userId).then((score) =>
          navigation.navigate("CollectPrice", { data: score })
        );
      });
    });
  };

  const isPersonModel = () => {
    // modelBRRRbRRRRRRRRRR!
    setPoints(100);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={photoWithStyle.container}>
        <Navbar id="124623" />
        <View style={photoWithStyle.imageContainer}>
          <Image
            style={photoWithStyle.photoTaken}
            source={{ uri: photo.uri }}
          />

          <Text style={photoWithStyle.text}>Zdobywasz</Text>
          <Title title={points + " pkt"} />
          <Text style={photoWithStyle.text}>na 100 mozliwych</Text>
        </View>
        <View style={photoWithStyle.buttonContainer}>
          <PrimaryButton handleOnClick={navigateToPrice} title={"Kontynuuj"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhotoWithFinalScreen;
