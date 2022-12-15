import React, { Component } from 'react';
import { StyleSheet, View, Button,ImageBackground} from 'react-native'; // importing components

//Sets up and builds the RAC map screen
class RacScreen extends Component {
  render() {
    const campusMap = require("../screenImages/racNav.png"); 
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

export default RacScreen;