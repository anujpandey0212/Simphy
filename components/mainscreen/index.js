import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles';

const Mainscreen = (props) => {   
    return(
        <View style={styles.container}>
           <View style={styles.header}>
               <ImageBackground 
               source={require('../../assets/images/simphy-logo.png')}
               style={styles.simphy_logo}
               
               ></ImageBackground>
           </View>
           <View style={styles.simulation_container}>
               <Text style={styles.header_font}>Featured</Text>
               <View style={styles.line}></View>
               <View style={styles.boxes_container}>
                   <ImageBackground
                   source={require('../../assets/images/Vector.png')}
                   style={styles.side_button_left}
                   ></ImageBackground>
                   <View style={styles.simulation_boxes}></View>
                   <View style={styles.simulation_boxes}></View>
                   <ImageBackground
                   source={require('../../assets/images/Vectorright.png')}
                   style={styles.side_button_right}
                   ></ImageBackground>
               </View>
           </View>
           <View style={styles.simulation_container}>
                <Text style={styles.header_font}>Recent</Text>
                <View style={styles.line}></View>
                <View style={styles.boxes_container}>
                    <ImageBackground
                    source={require('../../assets/images/Vector.png')}
                    style={styles.side_button_left}
                    ></ImageBackground>
                   <View style={styles.simulation_boxes}></View>
                   <View style={styles.simulation_boxes}></View>
                   <ImageBackground
                   source={require('../../assets/images/Vectorright.png')}
                   style={styles.side_button_right}
                   ></ImageBackground>
                </View>
           </View>
           <View style={styles.simulation_container}>
                <Text style={styles.header_font}>Newly added</Text>
                <View style={styles.line}></View>
                <View style={styles.boxes_container}>
                    <ImageBackground
                    source={require('../../assets/images/Vector.png')}
                    style={styles.side_button_left}
                     ></ImageBackground>
                   <View style={styles.simulation_boxes}></View>
                   <View style={styles.simulation_boxes}></View>
                   <ImageBackground
                   source={require('../../assets/images/Vectorright.png')}
                   style={styles.side_button_right}
                   ></ImageBackground>
                </View>
           </View>
        </View>
    );
};

export default Mainscreen;
