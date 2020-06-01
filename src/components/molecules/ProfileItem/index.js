import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';
import {Gap} from '../../atoms';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Gap height={6} />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
});
