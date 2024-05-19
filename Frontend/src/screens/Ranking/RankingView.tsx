import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {paddingSize} from "properties/styles/vars";
import RankingItem from "./RankingItem";
import Navbar from "components/molecules/Navbar";
import React, {useEffect, useState} from "react";
import {Title} from "components/atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Termometer from "components/molecules/Termometer";

const data = {
    scoreboard: [
        {name: "Remek", hash: "420420", score: 250, place: 1 },
        {name: "Ola", hash: "123456",score: 10, place: 2},
        {name: "Amaduesz", hash: "310056", score: 0, place: 3},
        {name: "Kacper", hash: "123457", score: 0, place: 4},
        {name: "Igor", hash: "123458", score: 0, place: 5},
        {name: "Karolina", hash: "123459", score: 0, place: 6},
        {name: "Szymon", hash: "123460", score: 0, place: 7},
        {name: "Ktoś", hash: "123461", score: 0, place: 8},
        {name: "Jeszcze ktoś", hash: "123462", score: 0, place: 9},
        {name: "Ziomek", hash: "123463", score: 0, place: 10}
    ]
};

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
    },
    scoreboard: {
        paddingHorizontal: paddingSize.medium,
        paddingVertical: paddingSize.mediumBig,
        rowGap: paddingSize.medium,
        width: '70%'
    }
})

const RankingView: React.FC<{ navigation: any }> = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [scoreData, setScoreData] = useState<number>(0);

    const getCollectionData = async (backendIP: any, id: any) => {
        try {
            console.log(backendIP)
            const response = await fetch(`${backendIP}/scores/${id}`);
            const json = await response.json();
            setData(json.scoreboard);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    const getScore = async (backendIP: any, id: any) => {
        try {
            console.log(backendIP)
            const response = await fetch(`${backendIP}/scoreboard/${id}`);
            const json = await response.json();
            setScoreData(json.score);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        AsyncStorage.getItem("backendIP").then((backendIP) => {
        AsyncStorage.getItem("userId").then((userId) => {
            getCollectionData(backendIP, userId)
            getScore(backendIP, userId)
        });
        }); 
    }, [])


    return (
        <View style={[{flex: 1}]}>
            <SafeAreaView style={mainStyle.container}>
                <Navbar id={"124623"}/>
                <View style={mainStyle.title}>
                    <Title title={"Ranking"}/>
                    {data && <FlatList
                        data={data}
                        renderItem={({item}) => <RankingItem item={item}/>}
                        keyExtractor={item => item.place.toString()}
                        numColumns={1}
                        contentContainerStyle={mainStyle.scoreboard}
                    />}
                </View>
            </SafeAreaView>
            <Termometer progress={scoreData}/>

        </View>

    );
}

export default RankingView;