import React from 'react';
import { general, index, colors,fonts } from '../styles';
import { View, Text, StyleSheet, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function CategoriesSection({title}) {
  return (
    <View style={style.subSection}>
      <Text style={general.sectionSubTitle}>{title}</Text>
      <Text style={{color:'gray'}}>________ ⎔ ________</Text>
    </View>
  );
}


const style = StyleSheet.create({
  subSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15
  },
}
)