import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";
import Category from "../../components/Category";

const Electro_Dynamics = (props) => {
  return (
    <View style={styles.container}>

      <View style={{flex:1}}>
      <ScrollView >
      <View style={styles.simulation_container}>
        <Text style={styles.header_font}>Subtopic 1</Text>
        <View style={styles.line}></View>
        {/* SCROLL START */}
        <View style={{ height: 250, marginTop: 20 }}>
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
        <Text style={styles.header_font}>Subtopic 2</Text>
        <View style={styles.line}></View>
        {/* SCROLL START */}
        <View style={{ height: 250, marginTop: 20 }}>
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
        <Text style={styles.header_font}>Subtopic 3</Text>
        <View style={styles.line}></View>
        {/* SCROLL START */}
        <View style={{ height: 250, marginTop: 20 }}>
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
      <View style={styles.jugaadh}></View>
      </ScrollView>
      </View>
    </View>
  );
};

export default Electro_Dynamics;