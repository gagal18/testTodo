import { configureStore } from '@reduxjs/toolkit';
import userReducer  from '../store/counterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
