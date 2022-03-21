import React, { useRef, useState,ViewToken } from 'react';
import { View, StyleSheet, Dimensions, Image, FlatList,} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel'

function  renderItem({item}){
    return(
        <View>
            <Image source={item.image} style={{width:'100%', height:225}}/>
        </View>
    );
}

export default function Carousel({item}) {
    return (
        <View style={style.container}>
            <SnapCarousel
            data={item}
            sliderWidth={390}
            itemWidth={354}
            layoutCardOffset={`9`}
            renderItem={renderItem}

            />
        </View>


    );
}

const style = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
    },
    imageIndexes: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingRight: 24,
    },
    imageIndex: {
        width: 6,
        // height: 6,
        backgroundColor: 'black', // ${({active}) => active ? 'black' : 'gray'};
        marginLeft: 8,
        borderRadius: 3
    },
    bannerImageWrapper: {
        width: '100%', // ${width},
        // height: 200,
    },
    bannerImage: {
        width: '100%',
        height: 130
    },
    styleWithoutFocus: {},
    styleWithFocus: {},

}
)