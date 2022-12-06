import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class GobyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Goby page</Text>
        <Text>Which room would you like to navigate to?</Text>
        <Button
            title="1"
            onPress={() => this.props.navigation.navigate('GobyOne')}
        />
        <Button
            title="2"
            onPress={() => this.props.navigation.navigate('GobyTwo')}
        />
        <Button
            title="3"
            onPress={() => this.props.navigation.navigate('GobyThree')}
        />
        <Button
            title="4"
            onPress={() => this.props.navigation.navigate('GobyFour')}
        />
        <Button
            title="5"
            onPress={() => this.props.navigation.navigate('GobyFive')}
        />
        <Button
            title="6"
            onPress={() => this.props.navigation.navigate('GobySix')}
        />
        <Button
            title="None"
            onPress={() => this.props.navigation.navigate('GobyNone')}
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

export default GobyScreen;