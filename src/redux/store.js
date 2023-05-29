import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';
import CategoryReducer from './CategoryReducer';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    category : CategoryReducer
  },
});

export default store;