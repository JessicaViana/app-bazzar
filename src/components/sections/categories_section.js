import React from 'react';
import { general, index, colors, fonts } from '../../styles';
import { View, Text, StyleSheet, Touchable } from 'react-native';

export default function CategoriesSection({ title }) {
  return (
    <View style={style.subSection}>
      <Text style={general.sectionSubTitle}>{title}</Text>
    </View>
  );
}


const style = StyleSheet.create({
  subSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7
  },
}
)