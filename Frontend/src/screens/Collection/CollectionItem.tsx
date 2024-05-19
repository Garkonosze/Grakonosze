import {Image, StyleSheet, Text, View} from "react-native";
import {fontSize, paddingSize} from "properties/styles/vars";
import React from "react";
import primaryColors from "properties/styles/colors";

interface TaskItemProps {
    item: {
        task_id: number;
        name: string;
        photo: string;
        description: string;
    };
}

export const mainStyle = StyleSheet.create({
    container: {
        paddingHorizontal: paddingSize.medium,
        paddingVertical: paddingSize.mediumBig,
        rowGap: paddingSize.mediumBig,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    text: {
        color: primaryColors.darkBlue,
        alignSelf: "center",
        fontSize: fontSize.baseMobileFontSize,
        fontWeight: "700",
    },
})

const CollectionItem: React.FC<TaskItemProps> = ({item}) => (
    <View style={mainStyle.itemContainer}>
        <Text>{item.photo}</Text>
        <Image style={mainStyle.image} source={require("../../../assets/marek.jpg")}/>
        <Text style={mainStyle.text}>{item.name}</Text>
    </View>
);

export default CollectionItem;