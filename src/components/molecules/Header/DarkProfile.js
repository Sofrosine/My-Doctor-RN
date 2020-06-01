import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../atoms';
import {DummyDoctor3} from '../../../assets';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const DarkProfile = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button onPress={onPress} type="icon-only" icon="back-light" />
      <View style={styles.text}>
        <Text style={styles.name}>{title}</Text>
        <Gap height={6} />
        <Text style={styles.profession}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor3} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    flex: 1,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.subtitle,
    textAlign: 'center',
  },
});
