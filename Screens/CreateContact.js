import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';

export default function CreateContact({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(['']);

  useEffect(() => {
    if (phoneNumber[phoneNumber.length - 1].length > 0) {
      setPhoneNumber(prevState => [...prevState, '']);
    }
    try {
      if (
        phoneNumber[phoneNumber.length - 2].length === 0 &&
        phoneNumber.length >= 2
      )
        setPhoneNumber(prevState => {
          const newState = prevState.slice();
          newState.pop();
          return newState;
        });
    } catch {
      error => console.log('Errors', error);
    }
  }, [phoneNumber]);

  function addContact() {
    if ((!firstName && !lastName) || phoneNumber.length === 1) {
      Alert.alert('Something went wrong', 'Please fill the all fields');
      return;
    }
    const myPhonenumbers = phoneNumber.map(ph => {
      return {label: 'mobile', number: ph};
    });
    const contactInfo = {
      displayName: firstName + ' ' + lastName,
      givenName: firstName + ' ' + lastName,
      phoneNumbers: myPhonenumbers,
    };
    Contacts.addContact(contactInfo)
      .then(() => navigation.navigate('MyContact'))
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="FirstName"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="LirstName"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>
      {phoneNumber.map((phoneNumber, index) => (
        <View
          style={{...styles.inputContainer, marginVertical: 10}}
          key={index}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={text =>
              setPhoneNumber(prevState => {
                const newState = prevState.slice();
                newState[index] = text;
                return newState;
              })
            }
          />
        </View>
      ))}
      <Button title="Save" onPress={() => addContact()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 10,
    margin: 10,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 10,
  },
});
