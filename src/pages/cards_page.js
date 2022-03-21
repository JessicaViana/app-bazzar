import 'react-native-gesture-handler'

import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, FlatList, View, Image } from 'react-native';
import { general, fonts, metrics, colors } from '../styles';
import cards from '../utils/cards_const';
import Carousel from '../components/sliders/carousel';
import Divider from '../components/divider';



export default function CardsPage({ navigation }) {

    return (
        <View style={style.container}>
            <Text style={general.headerTitle}>Payment method</Text>
            <Divider />
            <View style={{ marginBottom: 35 }} />
            <Carousel item={cards} />
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }

})
