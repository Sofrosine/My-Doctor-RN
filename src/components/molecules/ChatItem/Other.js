import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';
import {DummyDoctor3} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor3} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.chat}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.time}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignSelf: 'flex-end',
    marginRight: 8,
  },
  chatContent: {
    backgroundColor: colors.primary,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    marginBottom: 8,
    borderBottomLeftRadius: 0,
  },
  chat: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.primary.normal,
  },
  time: {
    fontSize: 11,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
