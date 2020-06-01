import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat type="btn-icon-send" icon="send-dark" />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    paddingVertical: 20,
    textAlign: 'center',
  },
});
