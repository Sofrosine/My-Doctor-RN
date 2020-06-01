import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconLeftDark} from '../../../assets';
import {colors} from '../../../utils';
import {Gap, Button} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({title, onPress, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} title={title} />;
  }
  return (
    <View style={styles.content(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: type => ({
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
