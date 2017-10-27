/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import { Platform } from 'react-native';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
/* import sagas from '../sagas'; */

export default (initialData) => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(
    sagaMiddleware
  );

  let composer = compose
  if (process.env.NODE_ENV = 'development') {
    composer = require('remote-redux-devtools').composeWithDevTools;
  }

  middleware = compose(
    middleware,
    composer( middleware)
  );

  // sagaMiddleware.run(sagas);

  return createStore(reducer, initialData, middleware);
};
