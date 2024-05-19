import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { PrimaryButton } from "components/atoms";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";
import { fontSize, paddingSize } from "properties/styles/vars";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    justifyContent: "center",
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.mediumBig,
  },
  text: {
    color: primaryColors.darkBlue,
    fontSize: fontSize.buttonMobileFontSize,
    textAlign: "left",
    paddingTop: paddingSize.mediumBig,
  },
});

const PhotoLevelScreen = ({ navigation }) => {
  
  const navigateToPhotoWithIntroScreen = () => {
    navigation.navigate("PhotoWithIntroScreen");
  };

  const buttons = [
    { title: "Dziekan", label: "Na diamentową odznakę" },
    { title: "Doktor", label: "Na złotą odznakę" },
    { title: "Magister", label: "Na srebną odznakę" },
    { title: "Student", label: "Na brązową odznakę" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Navbar id="124623" />
        <View style={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <View key={index} style={{ marginBottom: paddingSize.small }}>
              <Text style={styles.text}>{button.label}</Text>
              <PrimaryButton title={button.title} handleOnClick={navigateToPhotoWithIntroScreen} />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PhotoLevelScreen;
