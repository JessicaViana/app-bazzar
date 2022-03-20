import React from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity } from 'react-native';
import { general, index, colors, fonts } from '../../styles';
import products from '../../utils/products_const';
import Icon from 'react-native-vector-icons/Feather';

export default function ProductsCard(props) {
  return (
    <TouchableOpacity style={style.container} onPress={props.onClick}>
      <View style={style.likeButtonAlign}>
      <TouchableOpacity style={style.likeButton}>
        <Icon name='heart' color={colors.accent} size={12} />
      </TouchableOpacity>
      </View>
      <Image style={style.image} source={props.image} />
      <View style={style.card}>
        <Text style={style.productName}>{props.name}</Text>
        <Text style={style.productPrice}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin:5
  },
  likeButtonAlign:{
    margin:8,
    marginRight:38,
    width: 157,
    alignItems:'flex-end',
    flex: 1

  },
  likeButton:{
    backgroundColor:'white',
    zIndex:2,
    width:26,
    height:26,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:50,
    elevation:1
  },
  productName: {
    color: colors.body,
    fontFamily: fonts.fontFamily,
  },
  productPrice: {
    color: colors.primary,
    fontFamily: fonts.fontFamily,
  },
  image: {
    zIndex: 1,
    position: 'absolute',

  },
  card: {
    backgroundColor: 'white',
    width: 165,
    height: 155,
    borderRadius: 13,
    zIndex: 0,
    marginTop: 80,
    padding:10,
    justifyContent:'flex-end'
  },
})