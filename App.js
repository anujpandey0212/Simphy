import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Mainscreen from "./components/mainscreen";
import Electro_Dynamics from "./components/Electro_dynamics";
import Modern_physics from "./components/Modern_Physics";
import { createStackNavigator } from '@react-navigation/stack';
import Optics from "./components/Optics";
import Screenshot from "./components/screenshot";

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

const stack = createStackNavigator();

function simulation_details(){
  return(

      <stack.Navigator>
        <stack.Screen name='screenshot' component={Screenshot}></stack.Screen>
      </stack.Navigator>

  );
}



export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        >
          {/* this is home screen */}
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
        }}
        />

          {/* this is optics screen */}
        <Drawer.Screen name="Optics" component={Optics} 
        options={{
          title: 'Optics', //Set Header Title
          
          headerStyle: {
            backgroundColor: "black", //Set Header color
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        />

          {/* this is modern physics screen */}
        <Drawer.Screen name="Modern_physics" component={Modern_physics} 
        options={{
          title: 'Modern Physics', //Set Header Title
          
          headerStyle: {
            backgroundColor: "black", //Set Header color
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        />

          {/* this is Electro dynamics screen */}
        <Drawer.Screen name="Electro_dynamics" component={Electro_Dynamics} 
        options={{
          title: 'Electro Dynamics', //Set Header Title
          
          headerStyle: {
            backgroundColor: "black", //Set Header color
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        />

          {/* this is about us screen */}
        <Drawer.Screen name="About_us" component={Mainscreen} 
        options={{
          title: 'About Us', //Set Header Title
          
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
