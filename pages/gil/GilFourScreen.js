import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class GilFourScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the four page</Text>
        <Button
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
        /> 

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
  });

export default GilFourScreen;