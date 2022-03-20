import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, Text,View } from 'react-native';
import { colors, fonts } from '../../styles';

export default function CategoriesCards({categories}) {
    return (
        <View style={style.carrousel} horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={false}>
            {categories.map((item) =>
            <TouchableOpacity style={style.card}>
                <Text style={style.text}>{item.name}</Text>
            </TouchableOpacity>)}
        </View>
    );
}


const style = StyleSheet.create({
    carrousel: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        margin:5
    },
    card: {
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        margin: 4,
        backgroundColor: colors.inputBackground,
        height:32,
        // width:100,
    },
    text:{
        fontFamily: fonts.fontFamily,
        alignItems: 'center',
        margin:2,
        color:'#333333',
        marginHorizontal:10

    }

}
)