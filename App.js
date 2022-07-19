import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyContact from './Screens/MyContact';
import CreateContact from './Screens/CreateContact';
import Profile from './Screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyContact">
        <Stack.Screen name="MyContact" component={MyContact} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
