import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils';
import {List} from '../../components/molecules';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      pic: DummyDoctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      pic: DummyDoctor2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      pic: DummyDoctor3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <List
              onPress={() => navigation.navigate('Chatting')}
              key={doctor.id}
              pic={doctor.pic}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    paddingHorizontal: 16,
  },
});
