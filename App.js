/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */
import React from 'react';
import { Provider } from 'react-redux';

import Main from './src/Main'
import createStore from './src/store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
