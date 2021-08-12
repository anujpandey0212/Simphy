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
   
   simphy_logo:{
       height:41,
       width:150,
       marginTop:10,
       alignSelf:'center',
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

export default styles;