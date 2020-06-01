import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Link, Input, Button, Gap} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Gap height={40} />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button text="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link
        onPress={() => navigation.navigate('Register')}
        title="Create New Account"
        size={16}
        align="center"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 153,
  },
});
