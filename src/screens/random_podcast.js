import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView , View } from 'react-native';
import {Header, Spinner, Item, Input, Icon, Button, Text, View, H1, Body} from 'native-base';


class randomPodcast extends Component {
    render(){
        return(
            <View style = {{flex:1, backgroundColor:'#363940',}}>
                <ScrollView>
                    <H1>Prueba uno de nuestros podcast</H1>
                    <View>
                        <Image source={require('../../assets/thumbnail.jpg')} />
                        <Viwe>
                            <Text>The Daily Show With Trevor Noah: Ears Edition</Text>
                            <Text>By iHeartRadio & Comedy Central</Text>
                        </Viwe>
                    </View>
                    <Text>Roy Wood Jr. discusses Black male support for President Trump, Jordan Klepper chats with Trump rally-goers in Lancaster, PA, and Trevor talks to vice presidential candidate</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#363940',
    },
  });

export default randomPodcast;