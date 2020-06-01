import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitals, DummyHospital1} from '../../assets';
import {colors} from '../../utils';
import {ListHospitals, Gap} from '../../components/';
import {fonts} from '../../utils/fonts';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitals} style={styles.image}>
        <Text style={styles.name}>Nearby Hospitals</Text>
        <Gap height={6} />
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          pic={DummyHospital1}
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospitals
          pic={DummyHospital1}
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospitals
          pic={DummyHospital1}
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  image: {
    height: 240,
    alignItems: 'center',
    paddingTop: 30,
  },
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
