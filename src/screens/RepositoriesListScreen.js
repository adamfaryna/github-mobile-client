/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import RepositoryRecord from '../components/RepositoryRecord';

const style = StyleSheet.create({
  container: {

  }
});

const RepositoriesListScreen = ({ navigation }) => (
  <View style={style.container}>
    <RepositoryRecord name="One" onPress={() => navigation.navigate('Repository')} />
    <RepositoryRecord name="Two" onPress={() => navigation.navigate('Repository')} />
  </View>
);

export default RepositoriesListScreen;
