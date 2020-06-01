import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyNews1} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Gap height={4} />
        <Text style={styles.subtitle}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingHorizontal: 16
  },
  text: {
    flex: 1,
    maxWidth: '90%',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  subtitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 15,
  },
});
