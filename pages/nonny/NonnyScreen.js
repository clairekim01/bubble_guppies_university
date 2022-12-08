import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class NonnyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Nonny page</Text>
        <Text>Which room would you like to navigate to?</Text>
        <Button
            title="1"
            onPress={() => this.props.navigation.navigate('NonnyOne')}
        />
        <Button
            title="2"
            onPress={() => this.props.navigation.navigate('NonnyTwo')}
        />
        <Button
            title="3"
            onPress={() => this.props.navigation.navigate('NonnyThree')}
        />
        <Button
            title="4"
            onPress={() => this.props.navigation.navigate('NonnyFour')}
        />
        <Button
            title="5"
            onPress={() => this.props.navigation.navigate('NonnyFive')}
        />
        <Button
            title="6"
            onPress={() => this.props.navigation.navigate('NonnySix')}
        />
        <Button
            title="None"
            onPress={() => this.props.navigation.navigate('NonnyNone')}
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

export default NonnyScreen;