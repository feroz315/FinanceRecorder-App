import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

// local imp
import userReducer from './reducer/user';
// import changeShown from './reducer/submitModalshown';
// import AddTimeManually from './reducer/addTime';

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer','AddTimeManually'], 
};

//  root reducer
const rootReducer = combineReducers({
  userReducer: userReducer,
  // changeShown,
  // AddTimeManually:AddTimeManually
});

const persiReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persiReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);