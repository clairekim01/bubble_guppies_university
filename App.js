import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import Constants from 'expo-constants';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import ClubScreen from './app/screens/ClubScreen';


export default function App() {
  return (
  //<NavigationContainer>
  //<HomeScreen/>
  <ClubScreen/>
  //</NavigationContainer>
  );
}
