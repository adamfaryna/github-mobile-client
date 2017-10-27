/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import React from 'react';
import { Button, Image, StyleSheet, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoginScreen = ({  }) => (
  <View style={styles.container}>
    <Image source={require('../public/github_logo.png')} />
    <TextInput placeholder="your email"  />
    <TextInput placeholder="password" secureTextEntry={true} value={t} />
    <Button title="Sign in" />
  </View>
);

export default LoginScreen;
