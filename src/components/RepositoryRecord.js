/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
  container: {

  }
});

const RepositoryRecord = ({ name, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={style.container}>
      {name}
    </Text>
  </TouchableOpacity>
);

export default RepositoryRecord;
