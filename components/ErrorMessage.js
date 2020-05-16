import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colours from '../assets/colours.json';

const ErrorMessage = ({ errorValue }) => (
  <View style={errorStyles.container}>
    <Text style={errorStyles.errorText}>{errorValue}</Text>
  </View>
);

const errorStyles = StyleSheet.create({
  container: {
    marginLeft: 25
  },
  errorText: {
    color: colours.spotRed,
    fontFamily: 'allerLt',
    fontSize: 15
  }
});

export default ErrorMessage;
