import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Mainscreen from "./components/mainscreen";

import "react-native-gesture-handler";

// Imports for drawer support //
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

const Drawer = createDrawerNavigator();

// Imports for drawer support //

// const MyTheme = {
//   dark: true,
//    colors:{
//      background: 'black',
//      text: 'white',
//      primary: 'white',
//      primary: 'red',
//     text: 'rgb(255, 255, 255)',
//     border: 'rgb(199, 199, 204)',
//     notification: 'rgb(255, 69, 58)',
//    },

// };



// Changed it according to implementation.
// HomePage will be initial route name.
export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        
      >
        <Drawer.Screen name="Home" component={Mainscreen}

        options={{
          title: 'Home', //Set Header Title
          
          headerStyle: {
            backgroundColor: "black", //Set Header color
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}/>

        <Drawer.Screen name="Notifications" component={Mainscreen} 
        options={{
          title: 'Notifications', //Set Header Title
          
          headerStyle: {
            backgroundColor: "black", //Set Header color
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
