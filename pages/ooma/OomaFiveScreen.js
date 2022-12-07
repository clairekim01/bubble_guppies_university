import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,ImageBackground, Image} from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class OomaFiveScreen extends Component {
  render() {
    const campusMap = require("../../screenImages/academicRoom5.png"); 
    return (
      <View style={styles.container}>
        <Image source = {campusMap} style = {styles.header} resizeMode='contain'>
        </Image>
        <View style={styles.bottomContainer}>
        <Button
            title="View on Map"
            onPress={() => this.props.navigation.navigate('OomaNav')}
        /> 
         <Button
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
        /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        flex:1,
        alignSelf: 'center',
        width: '100%',
        height: null, 
        position: 'relative',
        bottom:0
    },
    bottomContainer: {
        position: 'absolute',
        bottom:10,
        left:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });

export default OomaFiveScreen;