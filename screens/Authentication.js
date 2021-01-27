import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSigninButton } from '@react-native-community/google-signin';

export default function Authentication(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Google Authentication</Text>
      <GoogleSigninButton onPress={props.onGoogleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
});
