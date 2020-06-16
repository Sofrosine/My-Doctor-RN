import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser, ILNullPhoto} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      let data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
