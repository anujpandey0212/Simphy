import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView ,StyleSheet} from "react-native";
// import styles from "./styles";
// import Category from "../../components/Category";

const Screenshot = (props) => {
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
              imageUri={require("../assets/images/earth.png")}
              name="Simulation 1"
              color="white"
            />
            <Category
              imageUri={require("../assets/images/earth.png")}
              name="Simulation 2"
            />
            <Category
              imageUri={require("../assets/images/earth.png")}
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
              imageUri={require("../assets/images/earth.png")}
              name="Simulation 1"
              color="white"
            />
            <Category
              imageUri={require("../assets/images/earth.png")}
              name="Simulation 2"
            />
            <Category
              imageUri={require("../assets/images/earth.png")}
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
              imageUri={require("../assets/images/earth.png")}
              name="Simulation 1"
              color="white"
            />
            <Category
              imageUri={require("../assets/images/earth.png")}
              name="Simulation 2"
            />
            <Category
              imageUri={require("../assets/images/earth.png")}
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

export default Screenshot;

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#010202',
        overflow:'hidden',
        
    },
   simulation_container:{
    height:'28%',
    width:'95%',
    backgroundColor:'#4779C4',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    borderRadius:9,
    zIndex:-1,
   },
   header_font:{
    color:'white',
    fontSize:20,
    paddingTop:5,
    paddingLeft:10,
   },
   line:{
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginLeft:10,
    marginRight:10,
    paddingTop:3,
   },
   jugaadh:{
       height:180,
       width:'100%',
   }

});

