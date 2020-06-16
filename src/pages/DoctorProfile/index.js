import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, Gap, ProfileItem, Button} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Doctor Profile" />
      <Gap height={10} />
      <Profile name="Nabilah Ayu" desc="Dokter Anak" />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem label="No. STR" value="0000116622081996" />
      <Gap height={24} />
      <View style={styles.button}>
        <Button text="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    paddingHorizontal: 40,
  },
});
