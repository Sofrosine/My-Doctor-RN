import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconDoctorActive,
  IconDoctorInactive,
  IconMessagesActive,
  IconMessagesInactive,
  IconHospitalsActive,
  IconHospitalsInactive,
} from '../../../assets';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctorInactive />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessagesInactive />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitalsInactive />;
    }
    return <IconDoctorActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    fontFamily: fonts.primary[600],
    color: active ? colors.text.active : colors.text.inactive,
    marginTop: 4,
  }),
});
