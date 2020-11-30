import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import {name as appName} from './../app.json';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  keyPrefix: appName,
  storage: AsyncStorage,
};
const middlewares = [thunkMiddleware, promise];
if (__DEV__) {
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducers);
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return {store, persistor};
};