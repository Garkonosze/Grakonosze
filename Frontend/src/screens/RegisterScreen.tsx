import { PrimaryButton, Title } from "components/atoms";
import LinkButton from "components/atoms/LinkButton";
import TextInputPersonalized from "components/atoms/TextInputPersonalized";
import primaryColors from "properties/styles/colors";
import { paddingSize } from "properties/styles/vars";
import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.xBig,
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingHorizontal: paddingSize.mediumBig,
    rowGap: paddingSize.small,
  },
  logo: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

const RegisterScreen = ({ navigation }) => {

  const navigateMainScreen = () => {
    navigation.navigate("MainScreen");
  };

  const navigateStartScreen = () => {
    navigation.navigate("StartScreen");
  };

  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Image
          style={mainStyle.logo}
          source={require("../../assets/logo_podstawowe.png")}
        />
        <Title title="Grakonosze" />
        <View style={mainStyle.buttonContainer}>
            <TextInputPersonalized 
            placeholder={"Wpisz swój nick"}
            maxLength={30}/>
          <PrimaryButton
            title={"Dołącz"}
            handleOnClick={navigateMainScreen}
          ></PrimaryButton>
          <LinkButton
          title="Zaloguj się!"
          color={primaryColors.lightBlue}
          helperText="Masz już konto?"
          fontWeight="bold"
          handleOnClick={navigateStartScreen}
        />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RegisterScreen;
