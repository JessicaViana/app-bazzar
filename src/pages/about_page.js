import 'react-native-gesture-handler'

import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, FlatList, View, Image } from 'react-native';
import { general, fonts, metrics, colors } from '../styles';
import SearchField from '../components/search_field'
import CategoriesSection from '../components/categories_section'
import CategoriesCards from '../components/cards/categories_card'
import Icon from 'react-native-vector-icons/Feather';
import ProductsCard from '../components/cards/products_card';
import categories from '../utils/categories_const';
import products from '../utils/products_const';
import colection from '../utils/colection_const'


export default function About({ navigation }) {

    [search, setSearch] = useState("");


    return (
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} bounces={false}>
            <View style={{ alignItems: 'center', margin:55 }}>
                <Text style={general.sectionTitle}>{`BAZZAR`}</Text>
                <Text style={style.text}>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</Text>
            </View>
            <Image source={require('../../assets/images/banner-1.png')} style={{width: '100%'}} />

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

})
