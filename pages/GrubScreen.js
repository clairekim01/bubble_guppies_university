import React, { Component } from 'react';
import { StyleSheet, View, Button,ImageBackground} from 'react-native'; // importing components

// Builds the screen for the dining hall with navigation
class GrubScreen extends Component {
  render() {
    const campusMap = require("../screenImages/grubGuppyNav.png"); 
    return (
      <View style={styles.container}>   
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

export default GrubScreen;