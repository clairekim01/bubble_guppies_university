import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class GilScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Gil page</Text>
        <Text>Which room would you like to navigate to?</Text>
        <Button
            title="1"
            onPress={() => this.props.navigation.navigate('GilOne')}
        />
        <Button
            title="2"
            onPress={() => this.props.navigation.navigate('GilTwo')}
        />
        <Button
            title="3"
            onPress={() => this.props.navigation.navigate('GilThree')}
        />
        <Button
            title="4"
            onPress={() => this.props.navigation.navigate('GilFour')}
        />
        <Button
            title="5"
            onPress={() => this.props.navigation.navigate('GilFive')}
        />
        <Button
            title="6"
            onPress={() => this.props.navigation.navigate('GilSix')}
        />
        <Button
            title="None"
            onPress={() => this.props.navigation.navigate('GilNone')}
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GilScreen;