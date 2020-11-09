import React from 'react';
import {Container, Header, Spinner, Item, Input, Icon, Button, Text, View } from 'native-base';
import {StyleSheet, ScrollView, Image} from 'react-native';


const podcast = () => {
    return (
      <Container>
        <View style={styles.container}>
            <ScrollView>
          <View style = {styles.container}>
                <Image style={{width:150, height:30}} source={require('../../assets/header_img.png')} />
              </View>
              <Header searchBar rounded style={styles.container}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="" />
          </Item>
          <Button transparent>
            <Text>Buscar</Text>
          </Button>
        </Header>
              <View>
              <Image style={styles.header} source={require('../../assets/inicio.png')} />
              </View>
          </ScrollView>
          </View>
      </Container>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
      flex: 1,
      backgroundColor:'#363940',
      color:'#ff9b00',
    },
  header:{
    flexDirection:'row',
    width:'100%',
    height:'100%',
     },
});
export default podcast;