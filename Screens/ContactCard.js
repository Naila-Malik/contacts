import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getColorByLetter} from './Colors';

export default function ContactCard({contactInfo}) {
  const color = getColorByLetter(contactInfo.displayName[0]);
  // const { displayName } = contactInfo;

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <View style={{...styles.icon, backgroundColor: color}}>
          <Text style={styles.iconContent}>{contactInfo.displayName[0]}</Text>
        </View>
        <Text style={styles.primary}>{contactInfo.displayName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    pading: 10,
    margin: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  icon: {
    borderRadius: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    padding: 1,
    backgroundColor: 'green',
  },
  primary: {
    fontSize: 20,
  },
  iconContent: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 18,
    color: 'white',
    marginHorizontal: 20,
  },
});
