import AsyncStorage from "@react-native-async-storage/async-storage";
import primaryColors from "properties/styles/colors";
import { fontSize, paddingSize } from "properties/styles/vars";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text } from "react-native";

export const navbarStyle = StyleSheet.create({
  banner: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
  idText: {
    position: "absolute",
    top: paddingSize.xSmall,
    left: paddingSize.xSmall,
    fontSize: fontSize.buttonMobileFontSize,
    color: primaryColors.darkBlue,
  },
  strongText: {
    fontWeight: "700",
    color: primaryColors.goldYellow,
  },
});

const Navbar = (props: { id: string }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userId").then((data) => setId(data ? data : "no id"));
  }, []);

  return (
    <>
      <Text style={navbarStyle.idText}>
        Twoje id: <Text style={navbarStyle.strongText}>#{id}</Text>
      </Text>
      <Image
        style={[navbarStyle.banner]}
        source={require("../../../assets/banner_logo.png")}
      />
    </>
  );
};

export default Navbar;
