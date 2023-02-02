import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../GlobalStyle/colors";
import { useFonts, Barlow_400Regular } from "@expo-google-fonts/barlow";
import { AbrilFatface_400Regular } from "@expo-google-fonts/abril-fatface";
import ImageRecipe from "./img";

const Header = ({ params }) => {
  const [ImageTitle, setImageTitle] = useState(params.Title);
  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderTitle}>{params.Title}</Text>

      <ImageRecipe ImageTitle={ImageTitle} />

      <View style={styles.HeaderContainerCP}>
        <View style={styles.HeaderContainerCP1}>
          <View style={styles.HeaderContainerCPUnderline}>
            <Text style={styles.HeaderText}>Préparation</Text>
          </View>

          <Text style={styles.HeaderText2}>{params.data.Prep} min</Text>
        </View>
        <View style={styles.HeaderContainerCP2}>
          <View style={styles.HeaderContainerCPUnderline}>
            <Text style={styles.HeaderText}>Cuisson</Text>
          </View>

          <Text style={styles.HeaderText2}>{params.data.Cook} min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    margin: "10%",
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "rgba(17, 17, 17, .6)",
    flex: 1,
  },
  HeaderTitle: {
    color: colors.SmokyBlack,
    fontSize: 36,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "AbrilFatface_400Regular",
    marginBottom: "10%",
  },

  HeaderContainerCP: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: colors.SmokyBlack,
    marginTop: "10%",
    display: "flex",
    flexDirection: "row",
    paddingVertical: "2%",
  },
  HeaderContainerCP1: {
    width: "50%",
    display: "flex",
  },
  HeaderContainerCPUnderline: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(17, 17, 17, .6)",
    paddingVertical: "5%",
  },
  HeaderContainerCP2: {
    width: "50%",
  },
  HeaderText: {
    color: colors.SmokyBlack,
    fontSize: 18,
    fontFamily: "AbrilFatface_400Regular",
    marginLeft: "auto",
    marginRight: "auto",
  },
  HeaderText2: {
    fontSize: 16,
    color: "rgba(17, 17, 17, .7)",
    fontFamily: "AbrilFatface_400Regular",
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: "5%",
  },
});

export default Header;
