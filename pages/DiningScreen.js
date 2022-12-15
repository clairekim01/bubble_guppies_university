import React, { useState, Component } from "react";
import { StyleSheet, Text, StatusBar, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native'; //important imports
import { DININGDATA } from '../constants/dining' //our dining data

//For a better UI to show which button was selected
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

//Displays list of dining options and when the button is pressed gives the user a pop up of information
const DiningApp = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id), Alert.alert(item.name, item.info)}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={DININGDATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
        />
    </SafeAreaView>
  );
};

// For navigation on home screen
class DiningScreen extends Component {
  render() {
    return <DiningApp/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#c6bafe",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default DiningScreen;