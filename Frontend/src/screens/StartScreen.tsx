import AsyncStorage from "@react-native-async-storage/async-storage";
import {PrimaryButton, Title} from "components/atoms";
import LinkButton from "components/atoms/LinkButton";
import TextInputPersonalized from "components/atoms/TextInputPersonalized";
import primaryColors from "properties/styles/colors";
import {paddingSize} from "properties/styles/vars";
import React, {useState} from "react";
import {Image, SafeAreaView, StyleSheet, View} from "react-native";

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

const StartScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  const navigateMainScreen = async () => {
    AsyncStorage.getItem("backendIP").then((backendIP) => {
      getLoginCheck(backendIP, text).then((loginData) => {
        console.log(loginData);
        if (loginData !== '' && loginData !== undefined) navigation.navigate("MainScreen");

      })
    });


    try {
      await AsyncStorage.setItem("userId", text);
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  const getLoginCheck = async (backendIP: any, id: any) => {
    try {
      console.log(backendIP)
      const response = await fetch(`${backendIP}/login/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await response.json();
      return json.name;
    } catch (error) {
      console.error(error);
    }
  }

  const navigateToRegisterScreen = () => {
    navigation.navigate("RegisterScreen");
  };

  const getInputElement = (text: string) => {
    setText(text);
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
            getInputElement={getInputElement}
            placeholder={"Wpisz swoje id"}
            maxLength={6}
          />
          <PrimaryButton
            inactive={text.length != 6}
            title={"Kontynuuj"}
            handleOnClick={navigateMainScreen}
          ></PrimaryButton>
          <LinkButton
            title="Dołącz do gry!"
            color={primaryColors.lightBlue}
            helperText="Nie masz konta?"
            fontWeight="bold"
            handleOnClick={navigateToRegisterScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default StartScreen;
