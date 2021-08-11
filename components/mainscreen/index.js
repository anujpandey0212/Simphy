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
           <View style={styles.simulation_container}>
               <Text style={styles.header_font}>Featured</Text>
               <View style={styles.line}></View>
               <View style={styles.boxes_container}>
                   <View style={styles.simulation_boxes}></View>
                   <View style={styles.simulation_boxes}></View>
               </View>
           </View>
           <View style={styles.simulation_container}>
                <Text style={styles.header_font}>Recent</Text>
                <View style={styles.line}></View>
                <View style={styles.boxes_container}>
                   <View style={styles.simulation_boxes}></View>
                   <View style={styles.simulation_boxes}></View>
                </View>
           </View>
           <View style={styles.simulation_container}>
                <Text style={styles.header_font}>Newly added</Text>
                <View style={styles.line}></View>
                <View style={styles.boxes_container}>
                   <View style={styles.simulation_boxes}></View>
                   <View style={styles.simulation_boxes}></View>
                </View>
           </View>
        </View>
    );
};

export default Mainscreen;
