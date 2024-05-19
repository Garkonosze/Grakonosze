import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {fontSize, paddingSize} from "properties/styles/vars";
import {PrimaryButton, Title} from "components/atoms";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";

export const mainStyle = StyleSheet.create({
  container: {
    paddingHorizontal: paddingSize.medium,
    paddingVertical: paddingSize.mediumBig,
    rowGap: paddingSize.mediumBig,
    flex: 1,
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
  coin: {
    height: 150,
    width: 150,
    borderRadius: 300,
    alignSelf: "center",
    borderWidth: 5,
  },
  smallText: {
    color: primaryColors.darkBlue,
    alignSelf: "center",
    fontSize: fontSize.buttonMobileFontSize,
    fontWeight: "500",
  },
  coinName: {
    color: primaryColors.darkBlue,
    alignSelf: "center",
    fontSize: fontSize.h2MobileFontSize,
    fontWeight: "700",
  },
});

const CollectPrice = ({ navigation, route }) => {
  const navigateToMainScreen = () => {
    navigation.navigate("MainScreen");
  };

  const getColor = (color: string) => {
    console.log(color)
    if (color == "gold") {
      return "#FFD700";
    } else if (color == "diamond") {
      return "#b9f2ff";
    } else if (color == "bronze") {
      return "#CD7F32"
    } else if (color == "silver") {
      return "#C0C0C0"
    }

    return "black"
  }

  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Navbar id={"124623"} />
        <Image
          style={mainStyle.logo}
          source={require("../../assets/logo_podstawowe.png")}
        />
        {route.params.data.photo == "../../../assets/marek.jpg" &&
            <Image style={[mainStyle.coin, {borderColor: getColor(route.params.data.color)}]}
                   source={route.params.data.name == "???" ? require("../../assets/unknown.png") : require("../../assets/marek.jpg")}/>}
        {route.params.data.photo == "../../../assets/zielu.png" &&
            <Image style={[mainStyle.coin, {borderColor: getColor(route.params.data.color)}]}
                   source={require("../../assets/zielu.jpg")}/>}
        {route.params.data.photo == "../../../assets/idzik.png" &&
            <Image style={[mainStyle.coin, {borderColor: getColor(route.params.data.color)}]}
                   source={require("../../assets/idzik.png")}/>}
        {route.params.data.photo == "../../../assets/shannon.png" &&
            <Image style={[mainStyle.coin, {borderColor: getColor(route.params.data.color)}]}
                   source={require("../../assets/shannon.jpg")}/>}
        {route.params.data.photo == "../../../assets/turing.png" &&
            <Image style={[mainStyle.coin, {borderColor: getColor(route.params.data.color)}]}
                   source={require("../../assets/turing.jpg")}/>}
        {route.params.data.name == "???" &&
            <Image style={[mainStyle.coin, {borderColor: getColor(route.params.data.color)}]}
                   source={require("../../assets/unknown.png")}/>}

        <Title title={"Brawo!"} />
        <Text style={mainStyle.smallText}>{`Zdobywasz ${route.params.data.color}`}</Text>
        <Text style={mainStyle.coinName}>{route.params.data.name}</Text>
        <View style={mainStyle.buttonContainer}>
          <PrimaryButton
            title={"Odbierz bonus"}
            handleOnClick={navigateToMainScreen}
          ></PrimaryButton>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CollectPrice;
