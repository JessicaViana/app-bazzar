import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, FlatList, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../styles';

export default function SliderHeader() {
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/images/header-1.png')} style={style.image} />

            <Text style={style.textTitleBanner}>
                {`LUXURY\n FASHION\n &ACESSORIES.`}
            </Text>

            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>EXPLORE COLLECTION</Text>
            </TouchableOpacity>
            <View style={style.viewPadding} />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    viewPadding: {
        paddingTop: 50,
        zIndex: -1
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: 600,
        zIndex: 0,
        // height: '100%',

    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 253,
        height: 40,
        borderRadius: 30,
        zIndex: 1,
        blurRadius: 50,
        blurType: 'light',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 160,
    },
    textButton: {
        fontSize: fonts.subtitle1,
        color: colors.offWhite,
        fontFamily: fonts.fontFamily,
        alignSelf: 'center',
    },
    textTitleBanner: {
        fontSize:38.66,
        color: colors.body,
        fontFamily: fonts.fontFamilyItalic,
        alignSelf: 'center',
        zIndex: 2,
        flex: 1,
        opacity: 0.7,
        marginTop: 235,
        lineHeight: 45,


    }
})