import React from "react";
import {View, StyleSheet, Image, Text, SafeAreaView} from "react-native";
import {fontSize, paddingSize} from "properties/styles/vars";
import {PrimaryButton, Title} from "components/atoms";
import Navbar from "components/molecules/Navbar";
import primaryColors from "properties/styles/colors";

export const mainStyle = StyleSheet.create({
    container: {
        paddingHorizontal: paddingSize.medium,
        paddingVertical: paddingSize.mediumBig,
        rowGap: paddingSize.mediumBig,
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
    },
    smallText:{
        color: primaryColors.darkBlue,
        alignSelf: "center",
        fontSize: fontSize.buttonMobileFontSize,
        fontWeight: "500",
    },
    coinName:{
        color: primaryColors.darkBlue,
        alignSelf: "center",
        fontSize: fontSize.h2MobileFontSize,
        fontWeight: "700",
    }
})

const CollectPrice = ({navigation}) =>{

    const navigateToMainScreen = () => {
        navigation.navigate("MainScreen");
    };

    return (
        <View style={[{ flex: 1 }]}>
            <SafeAreaView style={mainStyle.container}>
                <Navbar id={"124623"} />
                <Image
                    style={mainStyle.logo}
                    source={require("../../assets/logo_podstawowe.png")}
                />
                <Image
                    style={mainStyle.coin}
                    source={require("../../assets/marek.jpg")}
                />
                <Title title={"Brawo!"}/>
                <Text style={mainStyle.smallText}>
                    {"Zdobywasz diamentowego"}
                </Text>
                <Text style={mainStyle.coinName}>
                    {"Garka"}
                </Text>
                <View style={mainStyle.buttonContainer}>

                    <PrimaryButton
                        title={"Odbierz bonus"}
                        handleOnClick={navigateToMainScreen}
                    ></PrimaryButton>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default CollectPrice;



