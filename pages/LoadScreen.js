import React, { Component } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

class LoadScreen extends Component {
    render() {
    return (
    <Pressable style={styles.image} onPress={() => this.props.navigation.navigate('Home')}>
        <Image source={require('../screenImages/BGUHome.png')} style={styles.image}/>
    </Pressable>
    );
    }
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
    },
  });

export default LoadScreen;