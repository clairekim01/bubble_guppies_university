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
          onPress={() => Alert.alert('Nonny button pressed')}
        />
        <Button
          title="Deema"
          onPress={() => Alert.alert('Deema button pressed')}
        />
        <Button
          title="Ooma"
          onPress={() => Alert.alert('Ooma button pressed')}
        />
        <Button
          title="Goby"
          onPress={() => Alert.alert('Goby button pressed')}
        />
        <Button
          title="Grub Guppy"
          onPress={() => Alert.alert('Grub Guppy button pressed')}
        />
        <Button
          title="Feeding Frenzy Cafe"
          onPress={() => Alert.alert('Feeding Frenzy Cafe button pressed')}
        />
        <Button
          title="Anemone 1"
          onPress={() => Alert.alert('Anemone 1 button pressed')}
        />
        <Button
          title="Anemone 2"
          onPress={() => Alert.alert('Anemone 2 button pressed')}
        />
        <Button
          title="Anemone 3"
          onPress={() => Alert.alert('Anemone 3 button pressed')}
        />
        <Button
          title="Anemone 4"
          onPress={() => Alert.alert('Anemone 4 button pressed')}
        />
        <Button
          title="Library"
          onPress={() => Alert.alert('Library button pressed')}
        />
        <Button
          title="Rac"
          onPress={() => Alert.alert('Rac button pressed')}
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