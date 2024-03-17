import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {qrCodesSlice} from './slices/qr-codes';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reducers
const rootReducer = combineReducers({
  [qrCodesSlice.name]: qrCodesSlice.reducer,
});

/* Configuration for Redux persist. */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create a persisted version of the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux configuration
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persister = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
