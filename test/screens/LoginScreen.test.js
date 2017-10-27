/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import React, { View } from 'react-native';

import LoginScreen from '../../src/screens/LoginScreen';

describe('<LoginScreen>', () => {
  beforeEach(() => {
    component = shallow(<LoginScreen></LoginScreen>);
  });

  it('should be a view component', () => {
    expect(component.type()).to.equal(View);
  });

  it('');

});
