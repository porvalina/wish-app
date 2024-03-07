
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import wishReducer from './reducers';
import { configureStore } from 'redux'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, wishReducer)

export const store = configureStore(persistedReducer)
export const persistor = persistStore(store)