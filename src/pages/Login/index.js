import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Link, Input, Button, Gap, Loading} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors, useForm, storeData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    setIsLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        setIsLoading(false);
        Firebase.database()
          .ref(`/users/${res.user.uid}/`)
          .once('value')
          .then(result => {
            if (result.val()) {
              storeData('user', result.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        setIsLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Gap height={40} />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Gap height={40} />
          <Input
            label="Email Address"
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button text="Sign In" onPress={signIn} />
          <Gap height={30} />
          <Link
            onPress={() => navigation.navigate('Register')}
            title="Create New Account"
            size={16}
            align="center"
          />
          <Gap height={40} />

        </ScrollView>
      </View>
      {isLoading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 153,
  },
});
