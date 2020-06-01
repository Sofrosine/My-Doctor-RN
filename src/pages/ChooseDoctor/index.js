import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../components';
import {DummyDoctor2} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        name="Steven Gerrard"
        pic={DummyDoctor2}
        desc="Pria"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List name="Steven Gerrard" pic={DummyDoctor2} desc="Pria" type="next" />
      <List name="Steven Gerrard" pic={DummyDoctor2} desc="Pria" type="next" />
      <List name="Steven Gerrard" pic={DummyDoctor2} desc="Pria" type="next" />
      <List name="Steven Gerrard" pic={DummyDoctor2} desc="Pria" type="next" />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
