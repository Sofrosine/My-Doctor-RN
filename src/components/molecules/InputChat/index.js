import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from '../../atoms';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const InputChat = ({icon, type}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <Button type={type} icon={icon} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    borderRadius: 10,
    padding: 14,
    maxHeight: 45,
    flex: 1,
    marginRight: 10,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
});
