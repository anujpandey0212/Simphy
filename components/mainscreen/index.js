import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";
import Category from "../../components/Category";

const Mainscreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.notch}></View>
        <ImageBackground
          source={require("../../assets/images/simphy-logo.png")}
          style={styles.simphy_logo}
        ></ImageBackground>
      </View>

      <View style={{flex:1}}>
      <ScrollView >
      <View style={styles.simulation_container}>
        <Text style={styles.header_font}>Newly added</Text>
        <View style={styles.line}></View>
        {/* SCROLL START */}
        <View style={{ height: 200, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 1"
              color="white"
            />
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 2"
            />
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 3"
            />
          </ScrollView>
        </View>
        {/* scroll end */}
      </View>

      <View style={styles.simulation_container}>
        <Text style={styles.header_font}>Recent</Text>
        <View style={styles.line}></View>
        {/* SCROLL START */}
        <View style={{ height: 200, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 1"
              color="white"
            />
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 2"
            />
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 3"
            />
          </ScrollView>
        </View>
        {/* scroll end */}
      </View>
      


      <View style={styles.simulation_container}>
        <Text style={styles.header_font}>Newly added</Text>
        <View style={styles.line}></View>
        {/* SCROLL START */}
        <View style={{ height: 200, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 1"
              color="white"
            />
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 2"
            />
            <Category
              imageUri={require("../../assets/images/earth.png")}
              name="Simulation 3"
            />
          </ScrollView>
        </View>
        {/* scroll end */}
        
      </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default Mainscreen;
