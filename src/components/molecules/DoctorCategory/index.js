import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILCatObat, ILCatUmum, ILCatPsikiater} from '../../../assets';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    switch (category) {
      case 'dokter umum':
        return <ILCatUmum style={styles.illustration} />;
      case 'psikiater':
        return <ILCatPsikiater style={styles.illustration} />;
      case 'dokter obat':
        return <ILCatObat style={styles.illustration} />;
      default:
        return <ILCatUmum style={styles.illustration} />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    marginRight: 10,
    borderRadius: 10,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.primary,
  },
  category: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.text.primary,
  },
});
