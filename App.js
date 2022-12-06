/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import mainScreen from './mainScreen.js';

export default function App() {
  return (
    <mainScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React from 'react';
import MainScreen from './mainScreen.js';
import DropDown from './dropdownScreen';
import onClickOutside from './test.js';
import TestButton from './testButton';
import FuncButt from './testFuncButt';

const App = () => {
   return (
      <FuncButt/>
   )
}
export default App