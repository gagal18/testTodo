import { configureStore } from '@reduxjs/toolkit';
import userReducer  from '../store/dataSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
