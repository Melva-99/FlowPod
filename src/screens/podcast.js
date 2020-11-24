import React, { useEffect, useState } from 'react';
import {Container, Header, Spinner, Item, Input, Icon, Button, Text, View, Body} from 'native-base';
import { Component } from 'react';
import {StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import backend from '../api/backend';
import axios from 'axios'
import env from '../../enviorment';

const {apiKEY, apiURL} = env();

class podcast extends Component {
    render(){
        // const [pod, setPodcast] = useState(null);
        // const [error, setError] = useState(false);

        const getPodcast = async () => {
            // try {
                // const options = {
                //     method: 'GET',
                //     url: `${apiURL}genres?top_level_only=1`,
                //     headers: {
                //       'X-ListenAPI-Key': `${apiKEY}`,
                //     }
                // }
                // axios.request(options).then(function (response) {
                //     console.log(response.data);
                //     setPodcast(response.data)
                // }).catch(function (error) {
                //     console.error(error);
                // });
            // } catch (error) {
            //     console.log(error)
            //     setError(true);
            // }
        };

        // getPodcast();
        // useEffect(() =>{
        //     getPodcast()
        // });

        if(!pod){
            return(
                <View>
                    <Spinner  />
                </View>
            )
        }
        
        return(
            <Container style={styles.fondo}>
                <View style={styles.container}>
                    <ScrollView>
                        <Header searchBar rounded style={styles.container} style={styles.fondo}>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="" />
                            </Item>
                            <Button transparent>
                                <Text>Buscar</Text>
                            </Button>
                        </Header>
                        <View>
                            <Image style={styles.header} source={require('')} />
                        </View>
                    </ScrollView>
                </View>
                <Body>
                    <Text style={styles.body}>BIENVENIDOS A NUESTRO PODCAST</Text>
                    <FlatList 
                        data={pod.genres}
                    />
                </Body>
      </Container>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      paddingVertical:20,
        flex: 0.5,
      },
    header:{
      flexDirection:'row',
      width:'100%',
      height:'100%',
       },
    body: {
        textAlign:'center',
        color:'#ff9b00',
    },
    fondo:{
        backgroundColor:'#363940',
        color:'#ff9b00',
    }
  
});

export default podcast;