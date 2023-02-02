import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../GlobalStyle/colors";
import { useFonts, Barlow_400Regular } from "@expo-google-fonts/barlow";
import { AbrilFatface_400Regular } from "@expo-google-fonts/abril-fatface";
import List from "./List";

const Body = ({ params }) => {
  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
 
  let j =1;
  const listItems = params.data.Steps.map((ListData,i) =>
  <View  key={i}>
    <View style={styles.circle}><Text style={styles.circleText}>{j++}</Text></View>
    <Text key={i} style={styles.ListDataText}>{ListData}</Text>
  </View>
  );
  
  return (
    <View style={styles.MainContainer}>
        <View style={styles.MainContainer2}>
        <View style={styles.BodyContainerCP}>
        <Text style={styles.BodyTitle}>Ingrédients</Text>
      </View>
      <Text style={styles.NbTitle}>Pour {params.data.NB} personnes :</Text>

      <List ListData={params.data.ingredients}></List>
        </View>
      

      <View>{listItems}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    MainContainer2:{
        paddingHorizontal:"15%",
    },
    circle : {
        backgroundColor:'#111',
        borderRadius:50,
        width: 100,
        height: 100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft: "auto",
        marginRight: "auto",
    },
    BodyTitle: {
        color: colors.SmokyBlack,
        fontSize: 36,
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "AbrilFatface_400Regular",
        marginVertical:'5%'
        
      },
      NbTitle:{
        fontFamily: "AbrilFatface_400Regular",
        color: colors.SmokyBlack,
        fontSize:24,
        textDecorationLine:'underline',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '10%',
      },
      BodyContainerCP: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: colors.SmokyBlack,
      },
      circleText:{
        fontSize: 36,
        fontFamily: "AbrilFatface_400Regular",
        color:colors.white,
      },
      ListDataText:{
        marginVertical:'10%',
        paddingHorizontal:"15%",
        fontFamily: "Barlow_400Regular",
        fontStyle: 'italic',
        fontSize:20,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign:'center',
      }
});

export default Body;
