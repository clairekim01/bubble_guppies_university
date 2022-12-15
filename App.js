import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

import HomeScreen from './pages/HomeScreen';// Home screen
import AboutScreen from './pages/AboutScreen';// About Screen
// gil screen
import GilScreen from './pages/gil/GilScreen';
import GilOneScreen from './pages/gil/GilOneScreen';
import GilTwoScreen from './pages/gil/GilTwoScreen';
import GilThreeScreen from './pages/gil/GilThreeScreen';
import GilFourScreen from './pages/gil/GilFourScreen';
import GilFiveScreen from './pages/gil/GilFiveScreen';
import GilSixScreen from './pages/gil/GilSixScreen';
import GilNavScreen from './pages/gil/GilNavScreen';
import GilNoneScreen from './pages/gil/GilNoneScreen';
// nonny screen
import NonnyScreen from './pages/nonny/NonnyScreen';
import NonnyOneScreen from './pages/nonny/NonnyOneScreen';
import NonnyTwoScreen from './pages/nonny/NonnyTwoScreen';
import NonnyThreeScreen from './pages/nonny/NonnyThreeScreen';
import NonnyFourScreen from './pages/nonny/NonnyFourScreen';
import NonnyFiveScreen from './pages/nonny/NonnyFiveScreen';
import NonnySixScreen from './pages/nonny/NonnySixScreen';
import NonnyNavScreen from './pages/nonny/NonnyNavScreen';
import NonnyNoneScreen from './pages/nonny/NonnyNoneScreen';
//deema screen
import DeemaScreen from './pages/deema/DeemaScreen';
import DeemaOneScreen from './pages/deema/DeemaOneScreen';
import DeemaTwoScreen from './pages/deema/DeemaTwoScreen';
import DeemaThreeScreen from './pages/deema/DeemaThreeScreen';
import DeemaFourScreen from './pages/deema/DeemaFourScreen';
import DeemaFiveScreen from './pages/deema/DeemaFiveScreen';
import DeemaSixScreen from './pages/deema/DeemaSixScreen';
import DeemaNavScreen from './pages/deema/DeemaNavScreen';
import DeemaNoneScreen from './pages/deema/DeemaNoneScreen';
//ooma screen
import OomaScreen from './pages/ooma/OomaScreen';
import OomaOneScreen from './pages/ooma/OomaOneScreen';
import OomaTwoScreen from './pages/ooma/OomaTwoScreen';
import OomaThreeScreen from './pages/ooma/OomaThreeScreen';
import OomaFourScreen from './pages/ooma/OomaFourScreen';
import OomaFiveScreen from './pages/ooma/OomaFiveScreen';
import OomaSixScreen from './pages/ooma/OomaSixScreen';
import OomaNavScreen from './pages/ooma/OomaNavScreen';
import OomaNoneScreen from './pages/ooma/OomaNoneScreen';
//goby screen
import GobyScreen from './pages/goby/GobyScreen';
import GobyOneScreen from './pages/goby/GobyOneScreen';
import GobyTwoScreen from './pages/goby/GobyTwoScreen';
import GobyThreeScreen from './pages/goby/GobyThreeScreen';
import GobyFourScreen from './pages/goby/GobyFourScreen';
import GobyFiveScreen from './pages/goby/GobyFiveScreen';
import GobySixScreen from './pages/goby/GobySixScreen';
import GobyNavScreen from './pages/goby/GobyNavScreen';
import GobyNoneScreen from './pages/goby/GobyNoneScreen';
// dining
import GrubScreen from './pages/GrubScreen';
import FrenzyScreen from './pages/FrenzyScreen';
//anemone
import AnemoneOneScreen from './pages/anemone/AnemoneOneScreen';
import AnemoneTwoScreen from './pages/anemone/AnemoneTwoScreen';
import AnemoneThreeScreen from './pages/anemone/AnemoneThreeScreen';
import AnemoneFourScreen from './pages/anemone/AnemoneFourScreen';
//other
import RacScreen from './pages/RacScreen';
import LibraryScreen from './pages/LibraryScreen';
import LoadScreen from './pages/LoadScreen';
import DiningScreen from './pages/DiningScreen';
import ClubScreen from './pages/ClubScreen';
import CalendarScreen from './pages/CalendarScreen';

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.



class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: '#c6bafe' } }}>
          <Stack.Screen
            name="BGU"
            component={LoadScreen}
            options={{headerShown: false}}
          /> 
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
            name="GilNone"
            component={GilNoneScreen}
          />
          <Stack.Screen
            name="GilNav"
            component={GilNavScreen}
          />
          <Stack.Screen
            name="Nonny"
            component={NonnyScreen}
          />
            <Stack.Screen
            name="NonnyOne"
            component={NonnyOneScreen}
          />
            <Stack.Screen
            name="NonnyTwo"
            component={NonnyTwoScreen}
          />
            <Stack.Screen
            name="NonnyThree"
            component={NonnyThreeScreen}
          />
            <Stack.Screen
            name="NonnyFour"
            component={NonnyFourScreen}
          />
            <Stack.Screen
            name="NonnyFive"
            component={NonnyFiveScreen}
          />
            <Stack.Screen
            name="NonnySix"
            component={NonnySixScreen}
          />
            <Stack.Screen
            name="NonnyNone"
            component={NonnyNoneScreen}
          />
            <Stack.Screen
            name="NonnyNav"
            component={NonnyNavScreen}
          />
          <Stack.Screen
            name="Deema"
            component={DeemaScreen}
          />
          <Stack.Screen
            name="DeemaOne"
            component={DeemaOneScreen}
          />
          <Stack.Screen
            name="DeemaTwo"
            component={DeemaTwoScreen}
          />
          <Stack.Screen
            name="DeemaThree"
            component={DeemaThreeScreen}
          />
          <Stack.Screen
            name="DeemaFour"
            component={DeemaFourScreen}
          />
          <Stack.Screen
            name="DeemaFive"
            component={DeemaFiveScreen}
          />
          <Stack.Screen
            name="DeemaSix"
            component={DeemaSixScreen}
          />
          <Stack.Screen
            name="DeemaNone"
            component={DeemaNoneScreen}
          />
          <Stack.Screen
            name="DeemaNav"
            component={DeemaNavScreen}
          />
          <Stack.Screen
            name="Ooma"
            component={OomaScreen}
          />
          <Stack.Screen
            name="OomaOne"
            component={OomaOneScreen}
          />
          <Stack.Screen
            name="OomaTwo"
            component={OomaTwoScreen}
          />
          <Stack.Screen
            name="OomaThree"
            component={OomaThreeScreen}
          />
          <Stack.Screen
            name="OomaFour"
            component={OomaFourScreen}
          />
          <Stack.Screen
            name="OomaFive"
            component={OomaFiveScreen}
          />
          <Stack.Screen
            name="OomaSix"
            component={OomaSixScreen}
          />
          <Stack.Screen
            name="OomaNone"
            component={OomaNoneScreen}
          />
          <Stack.Screen
            name="OomaNav"
            component={OomaNavScreen}
          />
          <Stack.Screen
            name="Goby"
            component={GobyScreen}
          />
          <Stack.Screen
            name="GobyOne"
            component={GobyOneScreen}
          />
          <Stack.Screen
            name="GobyTwo"
            component={GobyTwoScreen}
          />
          <Stack.Screen
            name="GobyThree"
            component={GobyThreeScreen}
          />
          <Stack.Screen
            name="GobyFour"
            component={GobyFourScreen}
          />
          <Stack.Screen
            name="GobyFive"
            component={GobyFiveScreen}
          />
          <Stack.Screen
            name="GobySix"
            component={GobySixScreen}
          />
          <Stack.Screen
            name="GobyNone"
            component={GobyNoneScreen}
          />
          <Stack.Screen
            name="GobyNav"
            component={GobyNavScreen}
          />
          <Stack.Screen
            name="AneOne"
            component={AnemoneOneScreen}
          />
          <Stack.Screen
            name="AneTwo"
            component={AnemoneTwoScreen}
          />
          <Stack.Screen
            name="AneThree"
            component={AnemoneThreeScreen}
          />
          <Stack.Screen
            name="AneFour"
            component={AnemoneFourScreen}
          />
          <Stack.Screen
            name="RacScreen"
            component={RacScreen}
          />
          <Stack.Screen
            name="LibScreen"
            component={LibraryScreen}
          />
          <Stack.Screen
            name="GrubScreen"
            component={GrubScreen}
          />
          <Stack.Screen
            name="FrenzyScreen"
            component={FrenzyScreen}
          />
          <Stack.Screen
            name="DiningScreen"
            component={DiningScreen}
          />
          <Stack.Screen
            name="ClubScreen"
            component={ClubScreen}
          />
          <Stack.Screen
            name="CalendarScreen"
            component={CalendarScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;
