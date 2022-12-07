import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class DeemaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Deema page</Text>
        <Text>Which room would you like to navigate to?</Text>
        <Button
            title="1"
            onPress={() => this.props.navigation.navigate('DeemaOne')}
        />
        <Button
            title="2"
            onPress={() => this.props.navigation.navigate('DeemaTwo')}
        />
        <Button
            title="3"
            onPress={() => this.props.navigation.navigate('DeemaThree')}
        />
        <Button
            title="4"
            onPress={() => this.props.navigation.navigate('DeemaFour')}
        />
        <Button
            title="5"
            onPress={() => this.props.navigation.navigate('DeemaFive')}
        />
        <Button
            title="6"
            onPress={() => this.props.navigation.navigate('DeemaSix')}
        />
        <Button
            title="None"
            onPress={() => this.props.navigation.navigate('DeemaNone')}
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

export default DeemaScreen;