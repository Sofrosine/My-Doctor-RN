import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({icon}) => {
  return (
    <View style={styles.container(icon)}>
      {icon === 'send-dark' && <IconSendDark />}
      {icon === 'send-light' && <IconSendLight />}
    </View>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: icon => ({
    backgroundColor: icon === 'send-dark' ? colors.disable : colors.tersiery,
    height: 45,
    width: 45,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingTop: 3,
    paddingRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
});
