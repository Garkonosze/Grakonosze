import {StyleSheet} from "react-native";
import {paddingSize} from "properties/styles/vars";

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
})

const CollectionItem = ({items}) => {

}

export default CollectionItem;