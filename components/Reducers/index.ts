import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import isLoggedInReducer from './isLoggedInReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    isLoggedIn: isLoggedInReducer,
  },
});

export default store;
