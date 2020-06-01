import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.chat}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    backgroundColor: colors.cardLight,
    padding: 12,
    width: '70%',
    borderRadius: 10,
    marginBottom: 8,
    borderBottomRightRadius: 0,
  },
  chat: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
  },
  time: {
    fontSize: 11,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
