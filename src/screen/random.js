import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView , View } from 'react-native';
import {Header, Spinner, Item, Input, Icon, Button, Text, H1, Body} from 'native-base';


class randomPodcast extends Component {
    render(){
        return(
            <View style = {{flex:1,}}>
                <ScrollView>
                    <H1 style={{padding:30, textAlign:'center'}}>Prueba uno de nuestros podcast</H1>
                    <View>
                        <Image style={{width:300,height:350,alignSelf:'center'}}source={require('../../assets/thumbnail.png')} />
                        <View>
                            <Text style={{padding:30, textAlign:'center'}}>The Daily Show With Trevor Noah: Ears Edition</Text>
                            <Text style={{padding:30, textAlign:'center'}}>By iHeartRadio & Comedy Central</Text>
                        </View>
                    </View>
                    <Text style={{padding:30, textAlign:'center'}}>Roy Wood Jr. discusses Black male support for President Trump, Jordan Klepper chats with Trump rally-goers in Lancaster, PA, and Trevor talks to vice presidential candidate</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
  });

export default randomPodcast;