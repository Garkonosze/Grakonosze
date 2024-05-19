import {Image, StyleSheet, Text, View} from "react-native";
import {fontSize, paddingSize} from "properties/styles/vars";
import React, {useState} from "react";
import primaryColors from "properties/styles/colors";

interface TaskItemProps {
    c: string,
    item: {
        task_id: number;
        name: string;
        photo: string;
        description: string;
        color: string
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
        borderWidth: 5,
        borderColor: "black",
        resizeMode: 'cover',
    },
    text: {
        color: primaryColors.darkBlue,
        alignSelf: "center",
        fontSize: fontSize.baseMobileFontSize,
        fontWeight: "700",
    },
})

const CollectionItem: React.FC<TaskItemProps> = ({item}) => {
    const [aa, setAa] = useState("../../../assets/unknown.png")

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
    <View style={mainStyle.itemContainer}>
        {item.photo == "../../../assets/marek.jpg" &&
            <Image style={[mainStyle.image, {borderColor: getColor(item.color)}]}
                   source={item.name == "???" ? require("../../../assets/unknown.png") : require("../../../assets/marek.jpg")}/>}
        {item.photo == "../../../assets/zielu.png" &&
            <Image style={[mainStyle.image, {borderColor: getColor(item.color)}]}
                   source={require("../../../assets/zielu.jpg")}/>}
        {item.photo == "../../../assets/idzik.png" &&
            <Image style={[mainStyle.image, {borderColor: getColor(item.color)}]}
                   source={require("../../../assets/idzik.png")}/>}
        {item.photo == "../../../assets/shannon.png" &&
            <Image style={[mainStyle.image, {borderColor: getColor(item.color)}]}
                   source={require("../../../assets/shannon.jpg")}/>}
        {item.photo == "../../../assets/turing.png" &&
            <Image style={[mainStyle.image, {borderColor: getColor(item.color)}]}
                   source={require("../../../assets/turing.jpg")}/>}
        {item.name == "???" &&
            <Image style={[mainStyle.image, {borderColor: getColor(item.color)}]}
                   source={require("../../../assets/unknown.png")}/>}
        <Text style={mainStyle.text}>{item.name}</Text>
    </View>
    )
};

export default CollectionItem;