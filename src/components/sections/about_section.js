import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, fonts, metrics } from '../../styles';
import Divider from '../divider';

export default function AboutSection() {
  return (
    <View style={style.container}>
      <Image source={require('../../../assets/images/Logo.png')} />
      <Text style={style.text}>
        Making a luxurious lifestyle accessible for a generous group of women is our daily drive.
      </Text>
      <Divider />
      <View style={{ margin: metrics.verticalMargin / 4 }} />
      <View style={style.group}>
        <View style={style.box}>
          <Image source={require('../../../assets/images/stickers/sticker-1.png')} />
          <Text style={style.textBox}>Fast shipping. Free on orders over $25.</Text>
        </View>
        <View style={style.box}>
          <Image source={require('../../../assets/images/stickers/sticker-2.png')} />
          <Text style={style.textBox}>Sustainable process from start to finish.</Text>
        </View>
      </View>
      <View style={style.group}>
        <View style={style.box}>
          <Image source={require('../../../assets/images/stickers/sticker-3.png')} />
          <Text style={style.textBox}>Unique designs and high-quality materials.</Text>
        </View>
        <View style={style.box}>
          <Image source={require('../../../assets/images/stickers/sticker-4.png')} />
          <Text style={style.textBox}>Fast shipping. Free on orders over $25.</Text>
        </View>
      </View>
      <View style={{ margin: metrics.verticalMargin / 2 }} />
      <Image source={require('../../../assets/images/decoration.png')} />
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 25,

    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    paddingVertical: 35
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 70,
    marginVertical: 20,
    fontFamily: fonts.fontFamily
  },
  group: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginVertical: 10
  },
  textBox: {
    flex: 1,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: fonts.fontFamily

  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  }


}
)