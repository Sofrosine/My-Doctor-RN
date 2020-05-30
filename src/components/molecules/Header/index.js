import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconLeftDark} from '../../../assets';
import {colors} from '../../../utils';
import {Gap, Button} from '../../atoms';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.content}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
});
