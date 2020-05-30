import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconLeftDark} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      <IconLeftDark />;
    } else if (icon === 'back-light') {
      <IconLeftDark />;
    }
    return <IconLeftDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
