import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../GlobalStyle/colors";
import { useFonts, Barlow_400Regular } from "@expo-google-fonts/barlow";
import { AbrilFatface_400Regular } from "@expo-google-fonts/abril-fatface";
import Header from "./Header/header";
import Body from "./Body/body";

const RecipeInfo = ({ route }) => {
  const navigation = useNavigation();

  const { params } = route.params;


  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.Scrollview}>
        <Header params={params}></Header>
        <Body params={params}></Body>
       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default RecipeInfo;
