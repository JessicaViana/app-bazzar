import React from 'react';
import { general, index, colors, fonts } from '../../styles';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import social from '../../utils/social_const';
import CategoriesSection from './categories_section';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Divider from '../divider';
import FooterSection from '../sections/footer_section';


export default function SocialSection() {
    return (
        <View style={style.container}>
            <CategoriesSection title={'Follow Us'} />
            <Icon name="instagram" size={24} style={{ margin: 10 }} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={social}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={style.button}>
                            <Image source={item.image} />
                        </TouchableOpacity>
                    );
                }} />
            <FooterSection/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7
    },
    socialIcon: {
        marginHorizontal: 20
    },
    groupIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 40
    },
    text: {
        textAlign: 'center',
        marginHorizontal: 70,
        marginVertical: 20,
        fontFamily: fonts.fontFamily,
        lineHeight: 30,
        color: colors.body
    },
    groupFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginHorizontal:90
    },
    textFooter:{
        fontFamily: fonts.fontFamily,
        color: colors.label,
        margin:10
    }
}
)