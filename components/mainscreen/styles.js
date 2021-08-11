import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#010202',
        overflow:'hidden',
        
    },
   header:{
       width:'100%',
       height:100,
       backgroundColor:'#010202',
   },
   notch:{
    width:'100%',
    height:35,
    backgroundColor:'#100F0F',
   },
   simphy_logo:{
       height:41,
       width:150,
       marginTop:10,
       alignSelf:'center',
   },
   simulation_container:{
    height:'24%',
    width:'95%',
    backgroundColor:'#4779C4',
    marginTop:30,
    marginLeft:10,
    marginRight:10,
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
   boxes_container:{
    display:'flex',
    flexDirection:'row',
    height:'65%',
    width:'50%',
    marginTop:20,
   },
   simulation_boxes:
   {
       height:"100%",
       width:'90%',
       backgroundColor:'#83AFF0',
       marginLeft:10,
   }
});

export default styles;