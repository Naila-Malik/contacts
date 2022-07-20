import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Contacts from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {PermissionsAndroid} from 'react-native';
import ContactCard from './ContactCard';

export default function MyContact({navigation}) {
  const isFocused = useIsFocused();

  const [myContacts, setMyContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, [isFocused]);

  const getAllContacts = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (permission === 'granted') {
        const contacts = await Contacts.getAll();
        setMyContacts(contacts);
        // console.log("LIstof contacts", contacts)
      } else {
        setMyContacts([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Ionicons
        style={styles.addIcon}
        name="pluscircle"
        size={52}
        color="green"
        onPress={() => navigation.navigate('CreateContact')}
      />
      <FlatList
        data={myContacts}
        keyExtractor={item => item.recordID}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {
                contactInfo: {id: item.recordID},
              })
            }>
            <ContactCard contactInfo={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addIcon: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    zIndex: 1,
  },
});
