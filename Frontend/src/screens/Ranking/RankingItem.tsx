import {Image, StyleSheet, Text, View} from "react-native";
import {fontSize, paddingSize} from "properties/styles/vars";
import React from "react";
import primaryColors from "properties/styles/colors";

interface TaskItemProps {
    item: {
        name: string;
        hash: string;
        score: number;
        place: number;
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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

const RankingItem: React.FC<TaskItemProps> = ({item}) => (
    <View style={mainStyle.itemContainer}>
        <Text style={mainStyle.text}>{item.place}</Text>
        <Text style={mainStyle.text}>{item.name}</Text>
        <Text style={mainStyle.text}>{item.score}</Text>
    </View>
);

export default RankingItem;