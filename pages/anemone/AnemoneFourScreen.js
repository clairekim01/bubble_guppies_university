import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,ImageBackground} from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class AnemoneFourScreen extends Component {
  render() {
    const campusMap = require("../../screenImages/anemone4Nav.png"); 
    return (
      <View style={styles.container}>
        <Text>You are on the Anemone Four Nav Screen page</Text>   
        <ImageBackground source = {campusMap} style = {styles.header} resizeMode='stretch'>
        </ImageBackground>
        <View style={styles.bottomContainer}>
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
      backgroundColor: '#c6bafe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        backgroundColor: '#c6bafe',
        alignSelf: 'center',
        height: '100%',
        width:'100%', 
        position: 'absolute',
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

export default AnemoneFourScreen;