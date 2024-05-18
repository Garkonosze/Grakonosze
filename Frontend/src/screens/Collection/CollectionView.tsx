import {Image, SafeAreaView, StyleSheet, View} from "react-native";
import {paddingSize} from "properties/styles/vars";
import Navbar from "components/molecules/Navbar";
import React from "react";
import CollectionItem from "./CollectionItem";

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
})

const CollectionView = ({navigation}) => {
    return (
        <View style={[{flex: 1}]}>
            <SafeAreaView style={mainStyle.container}>
                <Navbar id={"124623"}/>
                <Image
                    style={mainStyle.logo}
                    source={require("../../../assets/logo_podstawowe.png")}
                />
                <CollectionItem items={items}/>
            </SafeAreaView>
        </View>
    );
}

export default CollectionView;