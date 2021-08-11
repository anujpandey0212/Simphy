import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles';

const Mainscreen = (props) => {   
    return(
        <View style={styles.container}>
           <View style={styles.header}>
               <View style={styles.notch}></View>
               <ImageBackground 
               source={require('../../assets/images/simphy-logo.png')}
               style={styles.simphy_logo}
               
               ></ImageBackground>
           </View>
        </View>
    );
};

export default Mainscreen;
