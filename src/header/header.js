import React, {Component} from 'react';
import { Button, StyleSheet, Image, ScrollView , Text, View } from 'react-native';
import Results from '../screens/search_results';

class header extends Component {
    render(){
        return(
            <View style = {styles.header}>
                <Image style={{width:150, height:30}} source={require('../../assets/header_img.png')}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:'100%',
        color:'#ffff',
    },
    headerContent:{
        
    },
});

export default header;