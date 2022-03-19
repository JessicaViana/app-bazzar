import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { fonts } from '../styles';
import Icon from 'react-native-vector-icons/Feather';


export default function SearchField() {
  return (
    <View style={style.input}>
      <Icon name="search" size={24} style={style.icon} />
      <TextInput style={style.textinput}
        placeholder="jeans, blusas, vestidos, etc"
        onChangeText={(value) => this.setSearch(value)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderColor: '#DEDEDE',
    borderRadius: 9,
    borderWidth: 2,
    flexDirection: 'row',
    marginVertical: 12
  },
  icon: {
    margin: 10
  },
  textinput: {
    fontFamily:  fonts.fontFamilySemiBold,
  }

}
)