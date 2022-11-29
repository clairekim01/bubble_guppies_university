import React from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';  

function HomeScreen(props) {
    return (
    <ImageBackground source={require('../assets/logo-og.png')} style={styles.image}>
        <Pressable style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={styles.text}>Start</Text>
        </Pressable>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        position: "absolute",
        top: "75%",
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