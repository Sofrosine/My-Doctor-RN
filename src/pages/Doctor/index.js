import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  UserProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components/';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <UserProfile />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  welcome: {
    marginTop: 30,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 209,
  },
});
