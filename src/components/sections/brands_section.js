import React from 'react';
import { general, index, colors, fonts } from '../styles';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import brands from '../../utils/brands_const';
import Divider from './../divider';

export default function BrandSection() {
    return (
        <View>
            <Divider />
            <View style={style.container}>
                {brands.map((item) =>
                    <TouchableOpacity >
                        <Image source={item.image} style={style.image} />
                    </TouchableOpacity>)}
            </View>
            <Divider />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 25,
        alignItems: 'center',
    },
    image: {
        marginHorizontal: 10,
        marginBottom: 10
    },


}
)