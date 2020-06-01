import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';
import {
  IconNextGray,
  IconEditProfile,
  IconLanguage,
  IconStarProfile,
  IconHelpCenter,
} from '../../../assets';

const List = ({pic, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <IconEditProfile />;
      case 'language':
        return <IconLanguage />;
      case 'rate':
        return <IconStarProfile />;
      case 'help':
        return <IconHelpCenter />;
      default:
        return <IconEditProfile />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={pic} style={styles.avatar} />}
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNextGray />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  text: {
    flex: 1,
    paddingLeft: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
