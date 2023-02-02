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
import images from "../../../assets/Images";

const ImageRecipe = ( {ImageTitle} ) => {

  return (
<Image style={styles.HeaderImg} source={ images[ImageTitle]} alt="image" />

  );
};
const styles = StyleSheet.create({
    HeaderImg: {
      width: 230,
      height: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },

  });
export default ImageRecipe;



 