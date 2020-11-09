import 'react-native-gesture-handler';
import React from 'react';
import inicio from './src/screen/inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerShown: false}}>
        <Stack.Screen
          name=" "
          component={inicio}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;