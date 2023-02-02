import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeList from "./Components/HomeList/HomeList";
 import RecipeInfo from "./Components/RecipeInfo/RecipeInfo";
// import {LevelListScreen} from "../Screen/LevelList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
  headerShown: false
}}>
      <Stack.Screen name="Home" component={HomeList} />
      <Stack.Screen name="RecipeInfo" component={RecipeInfo} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}



