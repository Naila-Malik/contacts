import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Contacts from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PermissionsAndroid} from 'react-native';
import {contactss} from './contactlist';
export default function MyContact({navigation}) {
  const isFocused = useIsFocused();

  const [myContacts, setMyContacts] = useState([]);

  // async function getAllContacts() {
  //   try {
  //     const permission = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  //       console.log('contactssssssssssssss', permission),
  //     );
  //     if (permission === 'granted') {
  //       const contacts = await Contacts.getAll();
  //       console.log('contacts');
  //       setMyContacts(contacts);
  //     }
  //   } catch (error) {
  //     console.log('Error', error);
  //   }
  // useEffect(() => {
  //   getAllContacts();
  // }, [isFocused]);

  // const getAllContacts = async () => {
  //   try {
  //     const permission = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  //     );
  //     console.log('i am in try block', permission);
  //     if (permission === 'granted') {
  //       console.log('i am in if condition');
  //       const contacts = await Contacts.getAll();
  //       console.log('all contacts', contacts);
  //       console.log('contacts', contacts);
  //       setMyContacts(contacts);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View>
      <Ionicons
        name="pluscircle"
        size={52}
        color="green"
        onPress={() => navigation.navigate('CreateContact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
