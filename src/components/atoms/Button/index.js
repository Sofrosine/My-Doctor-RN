import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';
import IconOnly from './IconOnly';
import {fonts} from '../../../utils/fonts';
import BtnIconSend from './BtnIconSend';

const Button = ({type, text, onPress, icon, disable}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === 'btn-icon-send') {
    return <BtnIconSend icon={icon} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg} onPress={onPress}>
        <Text style={styles.disableTitle}>{text}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  title: type => ({
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  }),
  disableTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.disable.text,
  },
});
