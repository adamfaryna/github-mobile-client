/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import React, { Component } from 'react';
import { Button, Image, StyleSheet, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    const { login, password, navigation } = this.props;
    navigation.navigate('Main');
  }

  render() {
    let login, password;

    return (
      <View style={styles.container}>
        <Image source={require('../../public/github_logo.png')} />
        <TextInput placeholder="your email" value={login}  />
        <TextInput placeholder="password" secureTextEntry={true} value={password} />
        <Button title="Sign in" onPress={this.onPress.bind(this)} />
      </View>
    );
  }
};

export default LoginScreen;
