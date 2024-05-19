import {PrimaryButton, Title} from "components/atoms";
import LinkButton from "components/atoms/LinkButton";
import TextInputPersonalized from "components/atoms/TextInputPersonalized";
import primaryColors from "properties/styles/colors";
import {paddingSize} from "properties/styles/vars";
import React, {useState} from "react";
import {Image, SafeAreaView, StyleSheet, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [text, setText] = useState("");

  const navigateMainScreen = async () => {
    AsyncStorage.getItem("backendIP").then((backendIP) => {
      signUp(backendIP, text).then((loginData) => {
        console.log(loginData);
        if (loginData !== '' && loginData !== undefined) navigation.navigate("MainScreen");
        try {
          AsyncStorage.setItem("userId", loginData);
        } catch (error) {
          console.error("Error setting item:", error);
        }
      })
    });


  };

  const navigateStartScreen = () => {
    navigation.navigate("StartScreen");
  }

  const getInputElement = (text: string) => {
    setText(text);
  };

  const signUp = async (backendIP: any, name: any) => {
    try {
      // console.log(backendIP)
      const response = await fetch(`${backendIP}/register/${name}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await response.json();
      return json.user.hash;
    } catch (error) {
      console.error(error);
    }
  }

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
              getInputElement={getInputElement}
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
