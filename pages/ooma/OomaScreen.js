import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class OomaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Ooma page</Text>
        <Text>Which room would you like to navigate to?</Text>
        <Button
            title="1"
            onPress={() => this.props.navigation.navigate('OomaOne')}
        />
        <Button
            title="2"
            onPress={() => this.props.navigation.navigate('OomaTwo')}
        />
        <Button
            title="3"
            onPress={() => this.props.navigation.navigate('OomaThree')}
        />
        <Button
            title="4"
            onPress={() => this.props.navigation.navigate('OomaFour')}
        />
        <Button
            title="5"
            onPress={() => this.props.navigation.navigate('OomaFive')}
        />
        <Button
            title="6"
            onPress={() => this.props.navigation.navigate('OomaSix')}
        />
        <Button
            title="None"
            onPress={() => this.props.navigation.navigate('OomaNone')}
        />
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
      backgroundColor: '#c6bafe',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default OomaScreen;