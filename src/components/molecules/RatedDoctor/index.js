import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconStar} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils';

const RatedDoctor = ({name, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{desc}</Text>
      </View>
      <View style={styles.rating}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  text: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
  rating: {
    flexDirection: 'row',
  },
});
