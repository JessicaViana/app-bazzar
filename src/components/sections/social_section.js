import React from 'react';
import { general, index, colors, fonts } from '../../styles';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import social from '../../utils/social_const';
import CategoriesSection from './categories_section';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Divider from '../divider';


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
            <View style={style.groupIcons}>
                <TouchableOpacity>
                    <IconEntypo name="twitter" size={24} color={colors.body} style={style.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconEntypo name="instagram-with-circle" size={24} color={colors.body} style={style.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconEntypo name="youtube" size={24} color={colors.body} style={style.socialIcon} />
                </TouchableOpacity>
            </View>
            <Divider />
            <Text style={style.text}>{'support@openui.design\n+60 825 876\n08:00 - 22:00 - Everyday'}
            </Text>
            <Divider />
            <View style={style.groupFooter}>
                <TouchableOpacity>
                    <Text style={style.text}>About
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.text}>Contact
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.text}>Blog
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#E6E6E6', width:'100%',alignItems: 'center',}}>
                <Text style={style.textFooter}>Copyright© OpenUI All Rights Reserved.</Text>
            </View>
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