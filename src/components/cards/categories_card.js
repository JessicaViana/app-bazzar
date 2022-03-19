import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { fonts } from '../../styles';

export default function CategoriesCards({categories}) {
    return (
        <ScrollView style={style.carrousel} horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={false}>
            {categories.map((item) =>
            <TouchableOpacity style={style.card}>
                <Text style={style.text}>{item.name}</Text>
            </TouchableOpacity>)}
        </ScrollView>
    );
}


const style = StyleSheet.create({
    carrousel: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        margin: 7,
        backgroundColor: '#F9F9F9',
        height:40,
        width:100,
    },
    text:{
        fontFamily: fonts.fontFamily,
        alignItems: 'center',
        margin:2,
        color:'#333333'
    }

}
)