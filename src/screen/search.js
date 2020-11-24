import React from 'react';
import { View, Text, Container, Button} from 'native-base';
import {StyleSheet, } from 'react-native';


const podcastSearch = ({route, navigation}) => {
            const {search} = route.params;
    return (
        <Container style={styles.container}>
            <View>
            <Text style={{textAlign:'center',}}>Búsqueda: {search}</Text>
        </View>
        </Container>
    )
    };
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
      },
  });
export default podcastSearch;