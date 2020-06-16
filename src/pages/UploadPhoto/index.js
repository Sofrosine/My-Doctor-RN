import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {colors, getData, storeData} from '../../utils';
import {fonts} from '../../utils/fonts';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoDB, setPhotoDB] = useState('');

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.3, maxHeight: 200, maxWidth: 200},
      response => {
        console.log('response', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Gagal mengupload foto atau tidak memilih foto',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const source = {uri: response.uri};
          const base64Photo = `data:${response.type};base64, ${response.data}`;
          setPhotoDB(base64Photo);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref('/users/' + uid + '/')
      .update({photo: photoDB});

    const data = route.params;
    data.photo = photoDB;
    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profileContent}>
          <TouchableOpacity style={styles.profile} onPress={getImage}>
            <Image source={photo} style={styles.photo} />
            {hasPhoto && <IconRemovePhoto style={styles.addButton} />}
            {!hasPhoto && <IconAddPhoto style={styles.addButton} />}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>{fullName}</Text>
          <Gap height={6} />
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View style={styles.buttonContent}>
          <Button
            disable={!hasPhoto}
            text="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            onPress={() => navigation.replace('MainApp')}
            title="Skip for this"
            align="center"
            size={16}
          />
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
    borderRadius: 110 / 2,
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
    textTransform: 'capitalize',
  },
  profession: {
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
