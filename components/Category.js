import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ zIndex:30,flex:1,height: 230, width: 200, marginLeft: 20, borderWidth: 1, borderColor: '#dddddd' , backgroundColor: 'black',borderRadius:5}}>
                <View style={{ flex: 2}}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderTopRightRadius:5,borderTopLeftRadius:5 }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ flex: 1,color: '#ffffff',fontWeight:'bold'}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});