/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

// require('babel-register');
require('babel-polyfill');
// require('react-native-mock/mock');
// require('react-native');

const chai = require('chai');
const enzyme = require('enzyme');

global.expect = chai.expect;
global.shallow = enzyme.shallow;
