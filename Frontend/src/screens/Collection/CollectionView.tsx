import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View, Text} from "react-native";
import {paddingSize} from "properties/styles/vars";
import Navbar from "components/molecules/Navbar";
import React, {useEffect, useState} from "react";
import CollectionItem from "./CollectionItem";
import {Title} from "components/atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CollectionItemData} from "properties/model/CollectionItemData";

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
    title: {
        marginTop: 50
    }
})

const CollectionView: React.FC<{ navigation: any }> = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<CollectionItemData[]>([]);

    const getCollectionData = async (backendIP: any, id: any) => {
        try {
            console.log(backendIP)
            const response = await fetch(`${backendIP}/collection/${id}`);
            const json = await response.json();
            setData(json.collection);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        AsyncStorage.getItem("backendIP").then((data) => {
        AsyncStorage.getItem("userId").then((d) => {
        console.log(data)    
            getCollectionData(data, d);
        });
        }); 
    }, [])


    return (
        <View style={[{flex: 1}]}>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                <SafeAreaView style={mainStyle.container}>
                    <Navbar id={"124623"}/>
                    <View style={mainStyle.title}>
                        <Title title={"Kolekcja"}/>
                        <FlatList
                            data={data}
                            renderItem={({item}) => <CollectionItem item={item}/>}
                            keyExtractor={item => item.task_id.toString()}
                            numColumns={3}
                            contentContainerStyle={mainStyle.container}
                        />
                    </View>
                </SafeAreaView>
            )}
        </View>
    );
}

export default CollectionView;