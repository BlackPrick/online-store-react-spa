import { configureStore } from '@reduxjs/toolkit';
import cartReducerSlice from './CartReducer';
import bookmarksReducerSlice from './/BookmarksReducer';

export default configureStore({
    reducer : {
        cartReducer : cartReducerSlice,
        bookmarksReducer : bookmarksReducerSlice
    }
})