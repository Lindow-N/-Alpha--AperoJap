import React from "react";
import colors from "../../../GlobalStyle/colors";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";

const List = ({ ListData }) => {
  const listItems = ListData.map((ListData, i) => (
    <View key={i} style={styles.ListView}>
      <Text key={i++} style={styles.ListPoint}>
        .
      </Text>
      <Text style={styles.ListTitle} key={i}>
        {" "}
        {ListData}
      </Text>
    </View>
  ));
  return <View style={styles.ListView2}>{listItems}</View>;
};

const styles = StyleSheet.create({
  ListView: {
    display: "flex",
    flexDirection: "row",
  },
  ListView2:{
    marginTop:'10%',
    marginBottom:'25%'
  },
  ListTitle: {
    fontFamily: "Barlow_400Regular",
    color: colors.SmokyBlack,
    fontSize: 18,
  },
  ListPoint: {
    fontFamily: "Barlow_400Regular",
    color: colors.SmokyBlack,
    fontSize: 18,
    marginRight:'3%'
  },
});
export default List;
