import 'react-native-gesture-handler'

import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { general, fonts, metrics, colors } from '../styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import FooterSection from '../components/sections/footer_section';

import Divider from '../components/divider';


export default function ContactUs({ navigation }) {

    [search, setSearch] = useState("");


    return (
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} bounces={false}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginBottom: 35 }} />
                <Text style={general.headerTitle}>Contact us</Text>
                <Divider />
                <View style={{ marginBottom: 15 }} />
                <Icon1 name="chat-processing-outline" size={50} color={colors.secondary} />
                <Text style={style.text1}>
                    {`Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.`}
                </Text>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Chat with us</Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 15 }} />
                <Text style={general.headerTitle}>Contact us</Text>
                <Divider />
                <View style={{ marginBottom: 15 }} />
                <Icon2 name="envelope-open-text" size={50} color={colors.secondary} />
                <Text style={style.text1}>
                    {`You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.`}
                </Text>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Text us</Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 10 }} />
                <Text style={general.headerTitle}>Contact us</Text>
                <Divider />
                <View style={{ marginBottom: 15 }} />
                <Icon2 name="twitter" size={50} color={colors.secondary} />
                <Text style={style.text1}>
                    {`To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!`}
                </Text>
                <FooterSection/>

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
        marginHorizontal: 20,
        lineHeight:23,
        fontSize: fonts.bodyLarge
    },
    button: {
        backgroundColor: colors.titleActive,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    textButton: {
        color: colors.offWhite,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.bodyLarge,
        textTransform: 'uppercase',
        marginHorizontal: 20
    },

})
