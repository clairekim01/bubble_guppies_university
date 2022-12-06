//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'; // importing components

// The home screen contains the text “You are on the home page” and a button.
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text  style={styles.title}>Which Building would you like to navigate to?</Text>
        <Button
            title="About page"
            onPress={() => this.props.navigation.navigate('About')}
        />
        <Button
          title="Gil"
          onPress={() => this.props.navigation.navigate('Gil')}
        />
        <Button
          title="Nonny"
          onPress={() => this.props.navigation.navigate('Nonny')}
        />
        <Button
          title="Deema"
          onPress={() => this.props.navigation.navigate('Deema')}
        />
        <Button
          title="Ooma"
          onPress={() => this.props.navigation.navigate('Ooma')}
        />
        <Button
          title="Goby"
          onPress={() => this.props.navigation.navigate('Goby')}
        />
        <Button
          title="Grub Guppy"
          onPress={() => this.props.navigation.navigate('GrubScreen')}
        />
        <Button
          title="Feeding Frenzy Cafe"
          onPress={() => this.props.navigation.navigate('FrenzyScreen')}
        />
        <Button
          title="Anemone 1"
          onPress={() => this.props.navigation.navigate('AneOne')}
        />
        <Button
          title="Anemone 2"
          onPress={() => this.props.navigation.navigate('AneTwo')}
        />
        <Button
          title="Anemone 3"
          onPress={() => this.props.navigation.navigate('AneThree')}
        />
        <Button
          title="Anemone 4"
          onPress={() => this.props.navigation.navigate('AneFour')}
        />
        <Button
          title="Library"
          onPress={() => this.props.navigation.navigate('LibScreen')}
        />
        <Button
          title="Rac"
          onPress={() => this.props.navigation.navigate('RacScreen')}
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
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize: 18
    },
  });

export default HomeScreen;