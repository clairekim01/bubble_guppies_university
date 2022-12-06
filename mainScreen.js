import React, { Component} from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
const style = StyleSheet.create({
    header: {
        backgroundColor: '#c6bafe',
        alignSelf: 'center',
        height: '100%',
        width:'100%', 
        position: 'absolute',
        bottom:0
    },
    container:{
        flex:1,
        backgroundColor:'white',
        padding:16,
        justifyContent:'center',
        alignContent:'center'
    },
    dropdown:{
        height:50,
        borderColor:'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal:8
    }
});

const MainScreen = () => {
    const campusMap = require("./screenImages/campusMap.png");    
    return( 
    <ImageBackground source = {campusMap} style = {style.header} resizeMode='stretch'>
    </ImageBackground>
);
} 

export default MainScreen;