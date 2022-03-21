import 'react-native-gesture-handler'

import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, FlatList, View, Image } from 'react-native';
import { general, fonts, metrics, colors } from '../styles';
import SearchField from '../components/search_field'
import CategoriesSection from '../components/sections/categories_section'
import CategoriesCards from '../components/cards/categories_card'
import Icon from 'react-native-vector-icons/AntDesign';
import ProductsCard from '../components/cards/products_card';
import categories from '../utils/categories_const';
import products from '../utils/products_const';
import colection from '../utils/colection_const'
import Divider from '../components/divider';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function About({ navigation }) {

    [search, setSearch] = useState("");


    return (
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} bounces={false}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginBottom: 35 }} />
                <Text style={general.headerTitle}>Our Story</Text>
                <Divider />
                <Text style={style.text1}>
                    {`Consectetur dolor est amet fugiat culpa ex nisi enim id ad. Exercitation esse cupidatat incididunt cupidatat anim qui deserunt reprehenderit cupidatat elit sint consequat aliqua duis.
                    \nPariatur anim occaecat occaecat et ea culpa.Eu eiusmod anim qui aute officia officia pariatur commodo ipsum anim tempor in. Reprehenderit dolor voluptate veniam ex.`}
                </Text>
                <Image source={require('../../assets/images/ourstory_image.png')} style={{ width: '100%' }} />
                <View style={{ marginBottom: 35 }} />
                <Text style={general.headerTitle}>Sign Up</Text>
                <Divider />
                <Text style={style.text2}>
                    Receive early access to new arrivals, sales, exclusive content, events and much more!
                </Text>
                <TextInput style={style.textInput} placeholder='Email adress' />
                <View style={{ marginBottom: 35 }} />
                <View style={{width:'100%',justifyContent:'center',
        alignContent:'center',
        flex:1,
        }}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Submit</Text>
                    <Icon style={style.textButton} name="arrowright" size={20} color={colors.offWhite} />
                </TouchableOpacity>

                </View>
            </View>

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
        justifyContent: 'center',
        margin: 7,
        backgroundColor: '#F9F9F9',
        height: 40,
        width: 100,
    },
    text1: {
        fontFamily: fonts.fontFamily,
        alignItems: 'center',
        color: '#333333',
        marginVertical: 20,
        marginHorizontal: 10,
        fontSize: fonts.bodyLarge
    },
    text2: {
        fontFamily: fonts.fontFamily,
        alignItems: 'center',
        color: colors.placeholder,
        marginVertical: 15,
        marginHorizontal: 50,
        fontSize: fonts.bodyMedium,
        textAlign: 'center'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: colors.placeholder,
        fontFamily: fonts.fontFamily,
        width: '90%',
        marginHorizontal: 10,
        color: colors.placeholder,
        opacity: 0.7
    },
    button: {
        backgroundColor: colors.titleActive,
        height: 56,
        justifyContent:'center',
        alignContent:'center',
        flex:1,
        alignItems:'center',
        flexDirection:'row'
    },
    textButton: {
        color: colors.offWhite,
        fontFamily: fonts.fontFamily,
        fontSize:fonts.bodyLarge,
        textTransform:'uppercase',
        marginRight:20
    },

})
