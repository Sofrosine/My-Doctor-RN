import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    textAlign: align,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary.normal,
  }),
});
