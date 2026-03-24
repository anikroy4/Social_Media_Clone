import {configureStore} from '@reduxjs/toolkit';
import authSlice from './users/authSlice';

const store = configureStore({
    reducer: {
       authSlice: authSlice,
    }
});

export default store;