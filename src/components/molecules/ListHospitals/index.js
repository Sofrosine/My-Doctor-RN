import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';
import {Gap} from '../../atoms';

const ListHospitals = ({pic, type, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View>
        <Text style={styles.name}>{type}</Text>
        <Text style={styles.name}>{name}</Text>
        <Gap height={6} />
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 16,
    padding: 16,
    borderBottomColor: colors.border,
  },
  image: {
    borderRadius: 20,
    width: 80,
    height: 60,
    marginRight: 16,
  },
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
