import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Profile, Header, Input, Button, Gap} from '../../components';
import {colors, useForm, getData, storeData} from '../../utils';
import {ILNullPhoto} from '../../assets';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoDB, setPhotoDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      console.log('ressa', res);
      let data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
      setPhoto(data.photo);
    });
  }, []);

  const updateData = () => {
    const data = profile;
    data.photo = photoDB;
    Firebase.database()
      .ref(`/users/${profile.uid}`)
      .update(data)
      .then(() => {
        console.log('success slur');
        storeData('user', data);
        // navigation.replace('MainApp')
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changePhoto = () => {
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
        }
      },
    );
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack('UserProfile')}
        title="Edit Profile"
      />
      <ScrollView>
        <View style={styles.content}>
          <Gap height={10} />
          <Profile type="remove" onPress={changePhoto} photo={photo} />
          <Gap height={16} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={val => changeText('fullName', val)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={val => changeText('profession', val)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={val => setPassword(val)}
          />
          <Gap height={40} />
          <Button onPress={updateData} text="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    marginBottom: 48,
  },
});
