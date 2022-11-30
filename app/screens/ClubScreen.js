import React, { useState } from "react";
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity  } from 'react-native';
import { CLUBDATA } from '../constants/clubs'

const DATA = [
    {
        id: "ZD-C1",
        name: "Board Game Club",
        desc: "Members can come to meet new people and learn new games. Bring your own games for people to play or come to play the collection of games provided by the club!",
        datetime: "Thursday 7:00pm - 9:00pm",
        location: "Zach Hall - 112",
    },
    {
        id: "CK-C1",
        name: "hackUMBC",
    },
    {
        id: "CK-C2",
        name: "UX/UI Engineering",
    },
    {
        id: "CK-C3",
        name: "Cafe Hopping",
    },
    {
        id: "OK-C1",
        name: "Muslim Student Association",
    },
    {
        id: "OK-C2",
        name: "Car Club",
    },
    {
        id: "OK-C3",
        name: "Gaming Club",
    },
    {
        id: "YC-C1",
        name: "Photography Club",
    },
    {
        id: "YC-C2",
        name: "Chess Club",
    },
    {
        id: "YC-C3",
        name: "Tennis Club",
    },
    {
        id: "ZD-C2",
        name: "Basketball Club",
    },
    {
        id: "ZD-C3",
        name: "Cooking Club",
    }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

export default App;