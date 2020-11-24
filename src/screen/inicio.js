import React, { useEffect, useState } from 'react';
import {Container, Header, Spinner, Item, Input, Icon, Button, Text, View, Body, Content, FlatList, CardItem,Card,H1} from 'native-base';
import {StyleSheet, ScrollView, Image,} from 'react-native';
import backend from '../api/backend';
import getEnvVars from '../../enviorment';
import axios from "axios";

//const { apiKEY,apiURL} = getEnvVars();

const podcast =({navigation}) => {
  const[search,setSearch]=useState("")
  /*const[pod,setPodcast]=useState(null)

  const getPodcast = async()=>{
    const options = {
      method: 'GET',
      url: `${apiURL}best_podcasts?genre_id=93&page=2&region=us&safe_mode=0`,
      headers: {
        'X-ListenAPI-Key':`${apiKEY}`
      }
    };
    
    axios.request(options).then(function (response) {
      setPodcast(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  getPodcast();

    if(!pod){
        return(
            <View >
                <Spinner color='blue'/>
            </View>
        )
    }*/
    return (
      <Container style={styles.fondo}>
        <View style={styles.container}>
              <Header searchBar rounded style={{backgroundColor:'#363940'}}>
          <Item>
            <Icon name="ios-search"/>
            <Input placeholder="" value={search} onChangeText={setSearch}/>
          </Item>
          <Button transparent icon onPress={() => {navigation.navigate('Búsqueda', {search})}}>
            <Text style={{color:'#ff9b00'}}>Buscar</Text>
          </Button>
        </Header>
              <View>
              <Image style={styles.header} source={require('../../assets/inicio.png')} />
              </View>
          </View>
          <Text style={{fontSize:30, paddingTop:30, textAlign:'center'}}>LOS MEJORES PODCAST</Text>
          <Body>
            <Content>
              <View>
              <H1 style={{textAlign:'center'}}>Leyendas Legendarias</H1>
              <Image style={{width:200, height:200, alignSelf:'center'}} source={require('../../assets/leyendas.png')} />
              <Text style={{textAlign:'justify', padding:30}}>Bienvenidos a Leyendas Legendarias, un podcast de comedia donde cada semana 
                exploraremos casos de crimen real, fenómenos paranormales o eventos históricos 
                tan peculiares, notorios y fantásticos que se ganaron el título de Leyendas Legendarias.</Text>
              </View>
              <View>
              <H1 style={{textAlign:'center'}}>Dementes</H1>
              <Image style={{width:200, height:200,alignSelf:'center'}} source={require('../../assets/dementes.jpg')} />
              <Text style={{textAlign:'justify', padding:30}}>Dementes Unschool es el lugar para aprender lo que no aprendes en la escuela ni en la universidad. 
                Aquí vas a encontrar cursos de temas como: Storytelling, Podcasting, Content Creation, Branding Personal, 
                Innovación y Creatividad.</Text>
              </View>
            </Content>
          </Body>
      </Container>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingVertical:0,
      flex: 0.5,
    },
  header:{
    flexDirection:'row',
    width:'100%',
    height:150,
     },
     body: {
      textAlign:'center',
      color:'#ff9b00',
      },
      fondo:{
      backgroundColor:'white',
      color:'#ff9b00',
      }

});
export default podcast;