import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Input, Button, Gap, Loading} from '../../components';
import {colors, useForm, storeData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);

    // REGISTER HANDLER
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(res => {
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: res.user.uid,
        };
        setLoading(false);
        setForm('reset');
        // SEND DATA
        Firebase.database()
          .ref('/users/' + res.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.replace('UploadPhoto', data);
      })
      .catch(error => {
        setLoading(false);
        // SHOW FLASH ERROR MESSAGE
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
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button text="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
