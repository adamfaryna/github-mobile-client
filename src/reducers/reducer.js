/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

const INITIAL_STATE = {

};

const handlers = {


};

function reducer(state, action) {
  const handler = handlers[action.type];
  if (handler) return handler(state, action);
  return state;
}

export default reducer;
