import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, List, Profile, Gap} from '../../components';
import {DummyUser} from '../../assets';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack('MainApp')} title="Profile" />
      <Gap height={10} />
      <Profile name="Shayna Melinda" desc="Product Designer" />
      <List
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
