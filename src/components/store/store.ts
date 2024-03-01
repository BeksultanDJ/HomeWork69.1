import { configureStore } from '@reduxjs/toolkit';
import showReducer from '../showListSlice';

const store = configureStore({
    reducer: {
        shows: showReducer,
    },
});

export default store;
