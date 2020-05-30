import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto} from '../../assets';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profileContent}>
          <View style={styles.profile}>
            <Image source={ILNullPhoto} style={styles.photo} />
            <IconAddPhoto style={styles.addButton} />
          </View>
          <Gap height={26} />
          <Text style={styles.name}>Shayna Maenda</Text>
          <Gap height={6} />
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View style={styles.buttonContent}>
          <Button text="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: 40,
    paddingTop: 0,
  },
  profileContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  profile: {
    borderWidth: 1,
    borderColor: colors.border,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 110,
    width: 110,
  },
  addButton: {
    position: 'absolute',
    right: 4,
    bottom: 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 24,
  },
  profession: {
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    fontSize: 18,
  },
});
