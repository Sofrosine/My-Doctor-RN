import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Profile, Header, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack('UserProfile')}
        title="Edit Profile"
      />
      <ScrollView>
        <View style={styles.content}>
          <Gap height={10} />
          <Profile
            name="Shayna Melinda"
            desc="Product Designer"
            type="remove"
          />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            onPress={() => navigation.replace('MainApp')}
            text="Save Profile"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    marginBottom: 48,
  },
});
