import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../../../utils';
import { fonts } from '../../../utils/fonts';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.link(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    textAlign: align,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary.normal
  }),
});
