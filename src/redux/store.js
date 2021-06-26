import { configureStore } from '@reduxjs/toolkit';
import picturesReducer from './pics/pictures-reducer';

const store = configureStore({
  reducer: picturesReducer,
});

export default store;
