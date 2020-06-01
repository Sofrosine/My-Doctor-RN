import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  ListProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
  Gap,
} from '../../components/';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';
import {JSONCategoryDoctor} from '../../assets/json/dummy';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.sectionWrapper}>
            <ListProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      onPress={() => navigation.navigate('ChooseDoctor')}
                      category={item.category}
                      key={item.id}
                    />
                  );
                })}
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pedritician"
              avatar={DummyDoctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Sunny Frank"
              desc="Dentist"
              avatar={DummyDoctor2}
            />
            <RatedDoctor
              name="Poe Minn"
              desc="Podiatrist"
              avatar={DummyDoctor3}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

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
  },
  sectionWrapper: {
    paddingHorizontal: 16,
  },
  welcome: {
    marginTop: 30,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  scrollWrapper: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginTop: 30,
    marginBottom: 16,
  },
});
