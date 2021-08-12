import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainscreen from './components/mainscreen'

import 'react-native-gesture-handler';

// Imports for drawer support //
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
// Imports for drawer support //
const MyTheme = {
  dark: true,
   colors:{
     background: '#010202',
     text: 'white',
     primary: 'white',
   },
  
};

// Changed it according to implementation.
// HomePage will be initial route name.
export default function App() {
  return (
  <NavigationContainer theme={MyTheme}>
  <Drawer.Navigator 
  initialRouteName="Home"
  screenOptions={{
    drawerStyle: {
      backgroundColor: '#010202',
      
    },
  }}
  >
    <Drawer.Screen name="Home" component={Mainscreen} />
    <Drawer.Screen name="Notifications" component={Mainscreen} />
  </Drawer.Navigator>
</NavigationContainer> 

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
