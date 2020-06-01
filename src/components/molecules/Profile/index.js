import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const Profile = ({name, desc, type}) => {
  return (
    <View style={styles.profile}>
      <View style={styles.imageWrapper}>
        <Image source={DummyUser} style={styles.image} />
        {type === 'remove' && <IconRemovePhoto style={styles.remove} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    alignSelf: 'center',
    marginBottom: 14,
  },
  remove: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
  imageWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
