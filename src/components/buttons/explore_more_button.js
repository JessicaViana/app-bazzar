import React from 'react';
import { general, index, colors, fonts } from '../../styles';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function ExploreMoreButton() {
    return (
        <View style={style.container}>
        <TouchableOpacity style={style.button}>
            <Text style={style.textButton}>Explore More</Text>
            <Icon style={style.textButton} name="arrowright" size={20} style={style.icon} />
        </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        margin:30
    },
    button:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    textButton: {
        fontSize: fonts.subtitle1,
        color: colors.offWhite,
        fontFamily: fonts.fontFamily,
        alignSelf: 'center',
        color: colors.titleActive,
        margin:10
    },

})