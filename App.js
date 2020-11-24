import 'react-native-gesture-handler';
import React, {Component} from 'react';
import podcast from './src/screen/inicio';
import { StyleSheet, Image, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import generos from './src/screen/generos';
import random from './src/screen/random';




const Stack = createStackNavigator();
const Footer = createBottomTabNavigator();

class App extends Component {
  render(){
    createBottomTab = () =>(
      <Footer.Navigator>
        <Footer.Screen 
          name='Home'
          component={podcast}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({}) => (
              <Entypo name="home" size={24} color="black" />
            ),
          }}
        />
        <Footer.Screen 
        name='Random'
        component={random}
        options={{
          tabBarLabel: 'Random',
          tabBarIcon: ({}) => (
            <Image style={{width:35,height:35,}} source = {require('./assets/FlowPod.png')}/>
          ),
        }}
      />
        <Footer.Screen 
          name='Generos'
          component={generos}
          options={{
            tabBarLabel: 'Generos',
            tabBarIcon: ({}) => (
              <FontAwesome5 name="list" size={24} color="black" />
            ),
          }}
        />
      </Footer.Navigator>
    )
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Podcast" children={createBottomTab}
          options={{
            headerTitle:
            <Image resizeMode="cover"
            style={ {
              width: 130, 
              height: 50,
              resizeMode:'contain',
           alignItems: 'center',
            }} source = {require('./assets/header_img.png')}/>,
            headerStyle: { backgroundColor: '#363940',shadowColor: 'transparent',shadowRadius: 0, },
          }}/>
          <Stack.Screen name="Random" children={createBottomTab}/>
          <Stack.Screen name="Búsqueda" children={createBottomTab}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  
});

export default App;