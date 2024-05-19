import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { paddingSize } from "properties/styles/vars";
import Navbar from "components/molecules/Navbar";
import React, { useEffect, useState } from "react";
import CollectionItem from "./CollectionItem";
import { Title } from "components/atoms";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = {
  tasks: [
    {
      task_id: 1,
      name: "Alan Turing",
      photo: "../../../assets/marek.jpg",
      description: "Lorem ipsum blablabla",
    },
    {
      task_id: 2,
      name: "Garek",
      photo: "../../../assets/marek.jpg",
      description: "Lorem ipsum blablabla",
    },
    {
      task_id: 3,
      name: "Prof. Krzysztof Zielinski",
      photo: "../../../assets/marek.jpg",
      description: "Lorem ipsum blablabla",
    },
    {
      task_id: 4,
      name: "Claude E. Shannon",
      photo: "../../../assets/marek.jpg",
      description: "Lorem ipsum blablabla",
    },
    {
      task_id: 5,
      name: "Michał Idzik",
      photo: "../../assets/idzik.png",
      description: "Lorem ipsum blablabla",
    },
  ],
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
    marginTop: 50,
  },
});

const CollectionView: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userId").then((data) => setId(data ? data : "no id"));
  }, []);
  return (
    <View style={[{ flex: 1 }]}>
      <SafeAreaView style={mainStyle.container}>
        <Navbar id={id} />
        <View style={mainStyle.title}>
          <Title title={"Kolekcja"} />
          <FlatList
            data={data.tasks}
            renderItem={({ item }) => <CollectionItem item={item} />}
            keyExtractor={(item) => item.task_id.toString()}
            numColumns={3}
            contentContainerStyle={mainStyle.container}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CollectionView;
