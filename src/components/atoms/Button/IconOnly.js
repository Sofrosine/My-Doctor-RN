import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconLeftDark, IconLeftLight} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconLeftDark />;
    }
    if (icon === 'back-light') {
      return <IconLeftLight />;
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
