import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Podcast from './src/screens/podcast';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Header from './src/header/header';
import ResultHeader from './src/header/result_header';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Results from './src/screens/search_results';
import Random from './src/screens/random_podcast';

const Stack = createStackNavigator();
const Footer = createMaterialBottomTabNavigator();

class App extends Component {
  render(){
    createBottomTab = () =>(
      <Footer.Navigator
      initialRouteName="Home"
      activeColor="white"
      shifting={true}
      style={{ backgroundColor: '#212226' }}
      >
        <Footer.Screen 
          name='Home'
          component={Podcast}
          options={{
            tabBarLabel: 'Inicio',
            tabBarColor:'#212226',
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Footer.Screen 
          name='Random' 
          component={Random}
          options={{
            tabBarLabel: '',
            tabBarColor:'#2c2f33',
            tabBarIcon: ({}) => (
              <Image style={{width:35, height:35}}source={require('./assets/FlowPod.png')}/>
            ),
            }} 
        />
        <Footer.Screen
          name='Generos'
          component={Results}
          options={{
            tabBarLabel: 'Generos',
            tabBarColor:'#23272a',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="list" size={24} color={color} />
            ),
          }}
        />
      </Footer.Navigator>
    )
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Podcast" children={createBottomTab} options={{headerTitle: () => <Header />, headerStyle:{backgroundColor:'#363940'}}}/>
          <Stack.Screen name="Generos" children={createBottomTab} options={{headerTitle: () => <ResultHeader />, headerStyle:{backgroundColor:'#363940'}}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  footer:{
    backgroundColor:'#212226',
    width:'100%',
    height:'100%',
    color:'#ffff',
  },
});

export default App;