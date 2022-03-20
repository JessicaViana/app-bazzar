import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { fonts, general } from '../styles';
import Icon from 'react-native-vector-icons/Feather';


export default function Header() {
    return (
        <View style={style.header}>
            <View style={style.drawer}>
            <Icon name="menu" size={24} style={{marginLeft:5}} />
            </View>
            <View style={style.logo}>
                <Text style={general.headerTitle}>{`BAZZAR`}</Text>
            </View>
            <View style={style.buttons}>
                <TouchableOpacity style={style.icon} >
                    <Icon name="search" size={24} style={style.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={style.icon}>
                 <Icon name="shopping-bag" size={24} style={style.icon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#E6E9EE',
        flexDirection: 'row',
    },
    buttons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent:'flex-end'
    },
    icon: {
        marginRight:8
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawer: {
        flex: 1,
    }

}
)