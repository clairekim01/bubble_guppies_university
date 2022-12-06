import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

import HomeScreen from './pages/HomeScreen';// Home screen
import AboutScreen from './pages/AboutScreen';// About Screen
import GilScreen from './pages/gil/GilScreen';
import GilOneScreen from './pages/gil/GilOneScreen';
import GilTwoScreen from './pages/gil/GilTwoScreen';
import GilThreeScreen from './pages/gil/GilThreeScreen';
import GilFourScreen from './pages/gil/GilFourScreen';
import GilFiveScreen from './pages/gil/GilFiveScreen';
import GilSixScreen from './pages/gil/GilSixScreen';
import GilNavScreen from './pages/gil/GilNavScreen';

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.



class App extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator> 

          <Stack.Screen
            name="Home"
            component={HomeScreen}
          /> 
          <Stack.Screen
            name="About"
            component={AboutScreen}
          />
          <Stack.Screen
            name="Gil"
            component={GilScreen}
          />
          <Stack.Screen
            name="GilOne"
            component={GilOneScreen}
          />
          <Stack.Screen
            name="GilTwo"
            component={GilTwoScreen}
          />
          <Stack.Screen
            name="GilThree"
            component={GilThreeScreen}
          />
          <Stack.Screen
            name="GilFour"
            component={GilFourScreen}
          />
          <Stack.Screen
            name="GilFive"
            component={GilFiveScreen}
          />
          <Stack.Screen
            name="GilSix"
            component={GilSixScreen}
          />
          <Stack.Screen
            name="GilNav"
            component={GilNavScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;