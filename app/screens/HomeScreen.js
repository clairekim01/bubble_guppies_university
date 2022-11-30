import React from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, ImageBackground, TouchableOpacity, Pressable, Modal } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';  

function HomeScreen(props) {
    return (
    <Pressable style={styles.image} onPress={() => alert('The whole screen is now a button')}>
        <Image source={require('../assets/BGUHome.png')} style={styles.image}/>
    </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
    },
    button: {
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        position: "absolute",
        top: "25%",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "blue",
    },
  });

export default HomeScreen;