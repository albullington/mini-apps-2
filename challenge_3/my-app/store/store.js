import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';

import rootReducer from './../reducers/main.js';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

module.exports = store;