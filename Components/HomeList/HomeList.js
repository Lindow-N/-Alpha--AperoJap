import React from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo.png";
import Data from "../../assets/Data.json";
import colors from "../../GlobalStyle/colors";
import { useFonts, Barlow_400Regular } from "@expo-google-fonts/barlow";
import { AbrilFatface_400Regular } from "@expo-google-fonts/abril-fatface";

const HomeList = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

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
        <Image style={styles.Logo} source={Logo} />
        <View style={styles.BodyContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Recherchez ..."
            blurOnSubmit={false}
          ></TextInput>

          {Data.Categorie.map((Categorie, idx) => {
            return (
              <View key={idx} style={styles.ListContainer}>
                <View style={styles.TitleContainer}>
                  <Text key={idx} style={styles.Titles}>
                    {Categorie.Title}{" "}
                  </Text>
                </View>

                {Data.Categorie[idx].receipts.map((receipts, idx2) => {
                  return (
                    <TouchableOpacity
                      key={idx2}
                      onPress={() => {
                        navigation.navigate("RecipeInfo", {
                          params: Data.Categorie[idx].receipts[idx2],
                          img:`../../assets/DataImg/${Data.Categorie[idx].receipts[idx2].Title}.png`,
                        });
                      }}
                    >
                      <Text key={idx2} style={styles.Titles2}>
                        {receipts.Title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>

        <View style={styles.FooterContainer}>
          <View style={styles.FooterContainer2}>
            <Text style={styles.FooterTitles}>Lindow</Text>
          </View>
          <Text style={styles.FooterTitles2}>Mentions légales</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Logo: {
    width: 240,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  BodyContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#E1E1E1",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: colors.SmokyBlack,
  },
  ListContainer: {
    marginHorizontal: 12,
  },
  TitleContainer: {
    borderWidth: 2,
    borderColor: colors.SmokyBlack,
    borderRadius: 2,
    paddingVertical: 10,
    marginVertical: 20,
  },
  Titles: {
    color: colors.SmokyBlack,
    fontSize: 36,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "AbrilFatface_400Regular",
  },
  Titles2: {
    color: colors.SmokyBlack,
    fontSize: 22,
    paddingLeft: 10,
    fontFamily: "Barlow_400Regular",
  },
  FooterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  FooterContainer2: {
    borderBottomWidth: 3,
    width: "75%",
    display: "flex",
    alignItems: "center",
  },
  FooterTitles: {
    color: colors.SmokyBlack,
    fontSize: 36,
    fontFamily: "AbrilFatface_400Regular",
    marginBottom: 10,
  },
  FooterTitles2: {
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: 22,
    fontFamily: "AbrilFatface_400Regular",
    marginTop: 10,
  },
});

export default HomeList;
