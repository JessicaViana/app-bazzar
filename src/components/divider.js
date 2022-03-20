import React from 'react';
import { general, index, colors, fonts } from '../styles';
import { View, Text, StyleSheet, Touchable } from 'react-native';

export default function Divider() {
    return (
        <View style={style.container}>
            <View style={style.line}/>
            <View style={style.rhombus}/>
            <View style={style.line}/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 1,
        flexDirection:'row'
    },
    rhombus: {
        width: 9,
        height: 9,
        transform: [
            { rotate: '45deg' }
        ],
        borderWidth: 0.2,
        color: colors.inputBackground,
        opacity:0.5
    },
    line: {
        width: 62.5,
        borderWidth: 0.19,
        color: colors.inputBackground,
        marginHorizontal:2,
        opacity:0.5
    }
}
)